/* ---------- Orden de temas de 5.º ---------- */
const FR=LV.map((g,i)=>({eje:'fra',title:'Fracciones: '+['equivalentes y comparar','sumar y restar','decimales, % y × natural'][i],rows:g.rows}));
const ALL=[TEMAS[0],TEMAS[1],FR[0],TEMAS[2],FR[1],TEMAS[3],FR[2],TEMAS[4],TEMAS[5],TEMAS[6],TEMAS[7],TEMAS[8],TEMAS[9],TEMAS[10],TEMAS[11]];
const EJE={num:'Números',ope:'Operaciones',fra:'Fracciones',pro:'Proporcionalidad',geo:'Geometría',med:'Medición',dat:'Datos y azar'};

/* ---------- Construcción de las fichas ---------- */
const STAGE=["Con apoyo","Práctica","Práctica","Misión con pista","Comprobación"];
function stg(n,i){return n===10?stageOf(i):i}
function stagedS(list,s,exNo){
 const strip=x=>{const y=Object.assign({},x);['m','add','cross','pt','jumps','path'].forEach(k=>delete y[k]);return y};
 const lvl=exNo===1?[0,1,1,2,3][s]:[0,1,2,3,3][s];
 if(lvl===3)return [{k:'blank'}];
 return list.map(x=>lvl===0?x:lvl===1?strip(x):Object.assign(strip(x),{outline:true}));
}
const icons={
 num:'<text x="32" y="32" font-size="16" font-weight="700" text-anchor="middle" fill="var(--acc)">1,234</text>',
 ope:'<text x="32" y="33" font-size="14" font-weight="700" text-anchor="middle" fill="var(--acc)">+ − × ÷</text>',
 fra:'<circle cx="32" cy="25" r="16" fill="var(--tint)" stroke="var(--acc)" stroke-width="2"/><path d="M32 9V41M16 25H48" stroke="var(--acc)" stroke-width="2"/>',
 pro:'<text x="32" y="33" font-size="19" font-weight="700" text-anchor="middle" fill="var(--acc)">25%</text>',
 geo:'<path d="M14 40L32 10L50 40Z" fill="var(--tint)" stroke="var(--acc)" stroke-width="2"/><circle cx="46" cy="18" r="8" fill="none" stroke="var(--acc)" stroke-width="2"/>',
 med:'<rect x="9" y="19" width="46" height="13" fill="var(--tint)" stroke="var(--acc)" stroke-width="2"/><path d="M15 19v6M21 19v4M27 19v6M33 19v4M39 19v6M45 19v4M51 19v6" stroke="var(--acc)" stroke-width="1.5"/>',
 dat:'<path d="M14 40V26h8v14M28 40V14h8v26M42 40V22h8v18" fill="var(--tint)" stroke="var(--acc)" stroke-width="2"/>'
};
const icon2=e=>'<svg viewBox="0 0 64 50" aria-hidden="true"><rect x="2" y="2" width="60" height="46" rx="9" fill="#fff" stroke="var(--acc)" stroke-width="2"/>'+icons[e]+'</svg>';
function make2(tema,ti,i){
 const row=tema.rows[i],n=tema.rows.length,s=stg(n,i);
 if(row.e.length!==3)throw Error("Cada ficha necesita 3 ejercicios: "+row.t);
 const exs=row.e.map((e,j)=>{
  const list=(e.fixed||j===0)?e.f:stagedS(e.f,s,j);
  const tip=(s===3&&j>0)?'<div class="tip"><b>Pista:</b> '+t(e.h)+'</div>':'';
  const fg=list.length?figs(list,e.col&&list[0].k!=='blank'):'<div class="figs"><div class="blank"><span>Haz aquí tus cuentas</span></div></div>';
  return '<section class="ex"><h3><span class="num">'+(j+1)+'</span>'+titles[j]+'</h3><div class="q"><p>'+t(e.q)+'</p>'+tip+'<div class="resp">Respuesta:</div></div>'+fg+'</section>';
 }).join('');
 const keys=row.e.map((e,j)=>'<div class="ans">'+(e.k&&e.k.length?figs(e.k,e.col,true):'<div></div>')+'<div><p><b>'+(j+1)+'. '+t(e.a)+'</b></p><p><b>Pista</b> '+t(e.h)+'</p>'+track+'</div></div>').join('');
 return '<article class="sheet" data-eje="'+tema.eje+'"><div class="top"><header class="head"><div><span class="badge">5.º · México · '+EJE[tema.eje]+' · '+tema.title+' · '+(n===10?stageName(i):STAGE[i])+'</span><h2>'+row.t+'</h2><p class="meta">Tema '+(ti+1)+' · Ficha '+(i+1)+' de '+n+' &nbsp;·&nbsp; Nombre ______________________ &nbsp; Fecha ________</p></div>'+icon2(tema.eje)+'</header>'+exs+'</div>'+
 '<div class="key"><div class="cut">✂ Dobla o recorta por esta línea</div><h4>Respuestas para revisar juntos</h4>'+keys+legend+'</div></article>';
}
const IDX=[],markup=[];
ALL.forEach((tm,ti)=>{if(tm.rows.length!==5&&tm.rows.length!==10)throw Error("Tema con fichas inválidas");tm.rows.forEach((r,i)=>{IDX.push([ti,i]);markup.push(make2(tm,ti,i))})});

