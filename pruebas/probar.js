// Pruebas de la versión HTML. Uso: node pruebas/probar.js [ruta.html] [html_anterior_para_regresión]
const {chromium}=require('playwright');const http=require('http');const path=require('path');const fs=require('fs');
const F=path.resolve(process.argv[2]||'index.html'),OLD=process.argv[3];
const OUT=path.join(__dirname,'resultados');fs.mkdirSync(OUT,{recursive:true});
const res=[];const ok=(n,c,d='')=>{res.push((c?'PASA':'FALLA')+' · '+n+(d?' · '+d:''));if(!c)process.exitCode=1};
(async()=>{
 // servidor local que imita GitHub Pages
 const srv=http.createServer((q,r)=>{r.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});r.end(fs.readFileSync(F))}).listen(8765);
 const URLP='http://127.0.0.1:8765/index.html';
 const b=await chromium.launch();
 const ctx=await b.newContext({viewport:{width:1280,height:900}});const p=await ctx.newPage();
 const red=[],errs=[];p.on('request',r=>{if(!r.url().startsWith(URLP)&&!r.url().startsWith('data:'))red.push(r.url())});
 p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await p.addInitScript(()=>{window.__abiertos=[];window.open=(u,t,f)=>{window.__abiertos.push([u,t,f]);return null}});
 await p.goto(URLP);
 const V=await p.evaluate(()=>CONFIG.VERSION);
 ok('Carga sin errores',errs.length===0,errs.join(' | '));
 const n=await p.$$eval('#pick option',o=>o.length);ok('90 fichas en el selector',n===90,String(n));
 ok('Contador',(await p.textContent('#count'))==='15 temas · 90 fichas · 270 ejercicios');
 ok('Insignia con México',(await p.textContent('.badge')).startsWith('5.º · México · '));
 ok('Cabecera con grado',(await p.textContent('.va-tit span'))==='5.º de primaria · México');
 ok('Título',(await p.title())==='Misiones de matemáticas · 5.º de primaria (México)');
 ok('Logo en cabecera',await p.$eval('.va-logo',i=>i.complete&&i.naturalWidth>0));
 ok('Sello en ficha',/Víctor Arellano · Misiones de matemáticas v1\.\d\d · 5\.º de primaria · México · CC BY-NC-SA 4\.0/.test(await p.textContent('.sello')));
 ok('Pie',/Víctor Arellano · Misiones de matemáticas v1\.\d\d · Versión HTML/.test(await p.textContent('.va-pie')));
 // navegación y respuestas
 await p.click('#next');ok('Siguiente',(await p.$eval('#pick',s=>s.selectedIndex))===1);
 await p.click('#prev');ok('Anterior y deshabilitado al inicio',await p.$eval('#prev',x=>x.disabled));
 await p.click('#toggle');ok('Mostrar respuestas',await p.$eval('#pages',x=>!x.classList.contains('hide-key')));
 await p.click('#toggle');
 // Donar
 for(const [btn,dlg] of [['#btnDonar','#dlgDonar'],['#pieDonar','#dlgDonar'],['#btnAcerca','#dlgAcerca'],['#pieAcerca','#dlgAcerca']]){
  await p.click(btn);ok('Abre '+dlg+' desde '+btn,await p.$eval(dlg,d=>d.open));await p.keyboard.press('Escape');}
 await p.click('#btnDonar');
 for(const s of ['mercadoPago','paypal'])await p.click('#dlgDonar [data-donar="'+s+'"]');
 await p.keyboard.press('Escape');await p.click('#btnAcerca');
 for(const s of ['mercadoPago','paypal'])await p.click('#dlgAcerca [data-donar="'+s+'"]');
 await p.keyboard.press('Escape');
 const ab=await p.evaluate(()=>window.__abiertos.map(a=>a[0]));
 ok('Donar abre solo los enlaces exactos',JSON.stringify(ab)===JSON.stringify(['https://link.mercadopago.com.mx/victorcursos','https://paypal.me/donar369','https://link.mercadopago.com.mx/victorcursos','https://paypal.me/donar369']),ab.join(' '));
 ok('Texto exacto de donar',(await p.textContent('#dlgDonar p'))==='Esta herramienta es gratuita. Si te sirve, puedes apoyar de forma voluntaria.');
 ok('Adaptador bloquea destino no autorizado',await p.evaluate(()=>!Adaptador.enlaces.abrirDonar('https://evil.example/x')&&!Adaptador.enlaces.abrirDonar('https://paypal.me/otro')));
 ok('Etiquetas de los botones de donar',(await p.$$eval('#dlgAcerca [data-donar]',x=>x.map(e=>e.textContent))).join('|')==='Donar con Mercado Pago|Donar con PayPal');
 ok('Acerca de: aviso de privacidad y contacto',/no recaba, guarda, envía ni comparte/.test(await p.textContent('#dlgAcerca'))&&/contacto@victorarellano\.com/.test(await p.textContent('#dlgAcerca')));
 ok('CSP connect-src none',/connect-src 'none'/.test(await p.$eval('meta[http-equiv="Content-Security-Policy"]',m=>m.content)));
 // Descargar
 const [dl]=await Promise.all([p.waitForEvent('download'),p.click('#descargar')]);
 const dp=await dl.path();ok('Descargar este archivo',dl.suggestedFilename()==='misiones-matematicas-'+V+'-html.html'&&fs.readFileSync(dp).equals(fs.readFileSync(F)),dl.suggestedFilename());
 ok('Sin conexiones de red',red.length===0,red.join(' '));
 // Recorrer las 90 fichas y medir desborde en impresión (ancho útil carta 741 px)
 await p.setViewportSize({width:741,height:1000});await p.emulateMedia({media:'print'});
 const mm=96/25.4;
 const desb=await p.evaluate(()=>{const o=[];for(let k=0;k<90;k++){pick.selectedIndex=k;show();setKey(true);
  const s=document.querySelector('.sheet'),top=s.querySelector('.top'),key=s.querySelector('.key');
  if(top.scrollHeight>top.clientHeight+1||key.scrollHeight>key.clientHeight+1)o.push(k+1)}pick.selectedIndex=0;show();return o});
 ok('Ninguna ficha se desborda en carta',desb.length===0,desb.join(','));
 await p.evaluate(()=>{pages.innerHTML=markup.join('')});
 await p.pdf({path:path.join(OUT,'todo.pdf'),format:'Letter',margin:{top:'10mm',bottom:'10mm',left:'10mm',right:'10mm'},printBackground:true});
 try{const pg=+require('child_process').execSync('pdfinfo "'+path.join(OUT,'todo.pdf')+'"').toString().match(/Pages:\s+(\d+)/)[1];ok('PDF carta de 90 páginas',pg===90,String(pg))}catch(e){res.push('NO PROBADO · páginas del PDF (falta pdfinfo)')}
 await p.emulateMedia({media:'screen'});
 // Móvil
 for(const w of [360,768]){await p.setViewportSize({width:w,height:800});await p.evaluate(()=>show());
  const sw=await p.evaluate(()=>document.documentElement.scrollWidth);ok('Sin desplazamiento horizontal a '+w+' px',sw<=w,String(sw));
  await p.screenshot({path:path.join(OUT,'pantalla-'+w+'.png')});}
 await p.setViewportSize({width:1280,height:900});await p.screenshot({path:path.join(OUT,'pantalla-1280.png'),fullPage:false});
 await p.click('#btnAcerca');await p.screenshot({path:path.join(OUT,'acerca.png')});await p.keyboard.press('Escape');
 // Regresión de contenido contra la entrega anterior
 if(OLD){const q=await ctx.newPage();await q.goto('file://'+path.resolve(OLD));
  const norm=s=>s.replace('<span class="badge">5.º · México · ','<span class="badge">5.º · ').replace(/<div class="legend">[\s\S]*$/,'');
  const a=await q.evaluate(()=>markup),bb=await p.evaluate(()=>markup);
  const dif=a.map((x,i)=>norm(x)===norm(bb[i])?0:i+1).filter(Boolean);
  ok('Regresión: 90 fichas idénticas a la entrega anterior (sin insignia ni leyenda)',a.length===bb.length&&dif.length===0,dif.join(','));}
 await b.close();srv.close();
 fs.writeFileSync(path.join(OUT,'resultado.txt'),res.join('\n')+'\n');console.log(res.join('\n'));
})();
