const LV=[];

/* NIVEL 1 · Equivalentes, comparar y ordenar */
(()=>{
 const L=[];
 const pctRead=(spec,frac,extra)=>({q:'¿Qué fracción está marcada? '+(extra||''),f:[spec],k:[spec],fixed:true,a:fs(frac)+(simp(frac).d!==frac.d?' (también '+fs(simp(frac))+')':''),h:'¿En cuántas partes iguales está dividido el entero? ¿Cuántas están marcadas?'});
 const eqv=(a,d)=>{const r=to(a,d);return{q:'Las dos tiras son del mismo tamaño. Marca '+fs(a)+' en la primera y la misma cantidad en la segunda. Completa: '+fs(a)+' = ___/'+d+'.',col:true,f:[{k:'bar',d:a.d,m:a.n},{k:'bar',d}],k:[{k:'bar',d:a.d,m:a.n},{k:'bar',d,m:r.n}],a:fs(a)+' = '+fs(r),h:'¿Cuántas partes de la segunda tira caben en una parte de la primera?'}};
 // F1
 L.push({t:"La pizzería del dragón",e:[
  pctRead({k:'pie',d:4,m:3},F(3,4)),
  eqv(F(1,2),6),
  (()=>{const a=F(1,2),b=F(2,4);return{q:'Lía comió '+fs(a)+' de una pizza y Tomás '+fs(b)+' de otra pizza igual. Tomás dice: «Yo comí más porque 2 es mayor que 1». ¿Tiene razón?',f:[{k:'pie',d:2,m:1},{k:'pie',d:4,m:2}],k:[{k:'pie',d:2,m:1},{k:'pie',d:4,m:2}],a:'No. '+fs(a)+' es '+cmpWord(a,b)+' '+fs(b)+': comieron lo mismo. Las partes de Tomás son más chicas.',h:'Si cortas cada mitad en dos, ¿cuántos cuartos tiene la mitad?'}})()]});
 // F2
 L.push({t:"Banderas del castillo",e:[
  pctRead({k:'grid',r:2,c:3,m:2},F(2,6)),
  eqv(F(1,3),6),
  (()=>{const meta=F(2,3),hay=F(4,6);return{q:'Para la bandera hay que pintar <b>al menos</b> '+fs(meta)+' de verde. Ya pintaron '+fs(hay)+'. ¿Ya llegaron a la meta?',f:[{k:'bar',d:6,m:4}],k:[{k:'bar',d:3,m:2},{k:'bar',d:6,m:4}],col:true,a:(cmp(hay,meta)>=0?'Sí':'No')+'. '+fs(hay)+' es '+cmpWord(hay,meta)+' '+fs(meta)+'; «al menos» incluye el caso igual.',h:'¿Cuántos sextos son '+fs(meta)+'?'}})()]});
 // F3
 L.push({t:"Carrera de caracoles",e:[
  pctRead({k:'set',n:8,m:6,shape:'star'},F(6,8)),
  eqv(F(3,4),8),
  (()=>{const A=F(1,2),B=F(5,8);return{q:'En pistas iguales, el caracol A avanzó '+fs(A)+' y el caracol B '+fs(B)+'. ¿Cuál avanzó más? Escribe A, B o «iguales».',f:[{k:'bar',d:2,m:1},{k:'bar',d:8,m:5}],col:true,k:[{k:'bar',d:8,m:4},{k:'bar',d:8,m:5}],a:(cmp(A,B)>0?'A':cmp(A,B)<0?'B':'Iguales')+'. '+fs(A)+' = '+fs(to(A,8))+', que es '+cmpWord(A,B)+' '+fs(B)+'.',h:'¿Cuántos octavos son '+fs(A)+'?'}})()]});
 // F4
 L.push({t:"El faro de los décimos",e:[
  {q:'¿Qué fracción marca el punto?',f:[{k:'line',d:5,pt:2}],k:[{k:'line',d:5,pt:2}],fixed:true,a:fs(F(2,5)),h:'¿En cuántos saltos iguales está dividido el camino de 0 a 1?'},
  (()=>{const xs=[F(1,2),F(3,10),F(4,5)],o=[...xs].sort(cmp);return{q:'Ordena de menor a mayor: '+xs.map(fs).join(', ')+'. Ubícalas en la recta.',f:[{k:'line',d:10}],k:[{k:'line',d:10,labels:o.map(x=>[to(x,10).n,''])}],a:o.map(fs).join(' &lt; ')+' (en décimos: '+o.map(x=>fs(to(x,10))).join(', ')+').',h:'¿Cuántos décimos es cada fracción?'}})(),
  (()=>{const a=F(3,5),b=F(1,2);return{q:'Beto dice: «'+fs(a)+' es menor que '+fs(b)+' porque 5 es mayor que 2». ¿Tiene razón? Explica con la tira.',f:[{k:'bar',d:10}],k:[{k:'bar',d:10,m:6},{k:'bar',d:10,m:5}],col:true,a:'No. '+fs(a)+' = '+fs(to(a,10))+' y '+fs(b)+' = '+fs(to(b,10))+'; '+fs(a)+' es '+cmpWord(a,b)+' '+fs(b)+'. Comparar solo denominadores no sirve.',h:'¿Cuántos décimos son '+fs(a)+'? ¿Y '+fs(b)+'?'}})()]});
 // F5
 L.push({t:"El panal de las abejas",e:[
  pctRead({k:'hex',m:4},F(4,6)),
  {q:'Simplifica '+fs(F(6,8))+' dividiendo arriba y abajo entre el mismo número.',f:[{k:'bar',d:8,m:6},{k:'bar',d:4}],col:true,k:[{k:'bar',d:8,m:6},{k:'bar',d:4,m:3}],a:fs(F(6,8))+' = '+fs(simp(F(6,8)))+' (se divide entre 2).',h:'¿Qué número divide a 6 y a 8?'},
  {q:'¿Cuál figura <b>no</b> muestra '+fs(F(1,4))+' sombreado? Explica por qué.',fixed:true,f:[{k:'choice',items:[{k:'pie',d:4,m:1,r:30},{k:'uneq',parts:[.4,.2,.2,.2],mark:0,w:100},{k:'grid',r:2,c:4,m:2,cw:22}]}],k:[{k:'choice',items:[{k:'pie',d:4,m:1,r:22},{k:'uneq',parts:[.4,.2,.2,.2],mark:0,w:80},{k:'grid',r:2,c:4,m:2,cw:16}]}],a:'B. Sus 4 partes no son iguales; la sombreada es más grande que un cuarto. C sí es '+fs(F(2,8))+' = '+fs(F(1,4))+'.',h:'¿Las cuatro partes de cada figura son del mismo tamaño?'}]});
 // F6
 L.push({t:"Taller de moños",e:[
  pctRead({k:'grid',r:3,c:4,m:9},F(9,12)),
  (()=>{const a=F(2,3),b=F(3,4);return{q:'Escribe &lt;, = o &gt;: '+fs(a)+' ___ '+fs(b)+'. Usa doceavos.',f:[{k:'bar',d:12},{k:'bar',d:12}],col:true,k:[{k:'bar',d:12,m:to(a,12).n},{k:'bar',d:12,m:to(b,12).n}],a:fs(a)+' &lt; '+fs(b)+' porque '+fs(to(a,12))+' &lt; '+fs(to(b,12))+'.',h:'¿Cuántos doceavos son '+fs(a)+'? ¿Y '+fs(b)+'?'}})(),
  (()=>{const need=F(5,6),have=F(3,4);return{q:'Ana necesita <b>al menos</b> '+fs(need)+' de una cinta para un moño. Tiene un pedazo de '+fs(have)+' de la misma cinta. ¿Le alcanza?',f:[{k:'bar',d:12}],k:[{k:'bar',d:12,m:to(have,12).n},{k:'bar',d:12,m:to(need,12).n}],col:true,a:(cmp(have,need)>=0?'Sí':'No')+'. '+fs(have)+' = '+fs(to(have,12))+' y '+fs(need)+' = '+fs(to(need,12))+'; le falta '+fs(simp(sub(need,have)))+'.',h:'¿Qué denominador sirve para sextos y cuartos a la vez?'}})()]});
 // F7
 L.push({t:"Las canicas del pirata",e:[
  pctRead({k:'set',n:10,m:4,shape:'coin'},F(4,10)),
  (()=>{const xs=[F(2,3),F(5,6),F(1,2)],o=[...xs].sort(cmp);return{q:'Ordena de menor a mayor: '+xs.map(fs).join(', ')+'.',f:[{k:'bar',d:6}],k:[{k:'bar',d:6,m:3},{k:'bar',d:6,m:4},{k:'bar',d:6,m:5}],col:true,a:o.map(fs).join(' &lt; ')+' (en sextos: '+o.map(x=>fs(to(x,6))).join(', ')+').',h:'¿Cuántos sextos es cada una?'}})(),
  (()=>{const A=F(3,8),B=F(1,4);return{q:'Dos tanques iguales: el rojo está a '+fs(A)+' y el azul a '+fs(B)+'. ¿Cuál tiene más agua? Escribe rojo, azul o «iguales».',f:[{k:'grid',r:1,c:8,cw:30}],k:[{k:'bar',d:8,m:3},{k:'bar',d:8,m:2}],col:true,a:(cmp(A,B)>0?'Rojo':cmp(A,B)<0?'Azul':'Iguales')+'. '+fs(B)+' = '+fs(to(B,8))+', que es menor que '+fs(A)+'.',h:'¿Cuántos octavos son '+fs(B)+'?'}})()]});
 // F8
 L.push({t:"Chocolates del robot",e:[
  pctRead({k:'pie',d:8,m:6},F(6,8)),
  {q:'Completa: '+fs(F(4,10))+' = ___/5.',f:[{k:'bar',d:10,m:4},{k:'bar',d:5}],col:true,k:[{k:'bar',d:10,m:4},{k:'bar',d:5,m:2}],a:fs(F(4,10))+' = '+fs(to(F(4,10),5)),h:'¿Cuántos décimos caben en un quinto?'},
  {q:'Rafa dice: «'+fs(F(2,6))+' y '+fs(F(1,3))+' de chocolates iguales son distintos porque usan otros números». ¿Tiene razón? Dibuja y explica.',f:[{k:'bar',d:6},{k:'bar',d:3}],col:true,k:[{k:'bar',d:6,m:2},{k:'bar',d:3,m:1}],a:'No. '+fs(F(2,6))+' es '+cmpWord(F(2,6),F(1,3))+' '+fs(F(1,3))+': dos sextos cubren lo mismo que un tercio.',h:'Si juntas los sextos de dos en dos, ¿qué partes obtienes?'}]});
 // F9
 L.push({t:"El examen del explorador",e:[
  {q:'¿Qué fracción marca el punto? Escribe dos nombres para ella.',f:[{k:'line',d:8,pt:6}],k:[{k:'line',d:8,pt:6}],fixed:true,a:fs(F(6,8))+' = '+fs(simp(F(6,8))),h:'¿Cuántos octavos hay de 0 al punto? ¿Puedes agruparlos de dos en dos?'},
  (()=>{const xs=[F(7,12),F(1,2),F(2,3)],o=[...xs].sort(cmp);return{q:'Ordena de menor a mayor: '+xs.map(fs).join(', ')+'.',f:[{k:'bar',d:12}],k:o.map(x=>({k:'bar',d:12,m:to(x,12).n})),col:true,a:o.map(fs).join(' &lt; ')+' (en doceavos: '+o.map(x=>fs(to(x,12))).join(', ')+').',h:'¿Cuántos doceavos es cada una?'}})(),
  (()=>{const need=F(3,5),got=F(7,10);return{q:'Para ganar la votación se necesita <b>más de</b> '+fs(need)+' de los votos. La planilla azul obtuvo '+fs(got)+'. ¿Gana?',f:[{k:'bar',d:10}],k:[{k:'bar',d:10,m:7},{k:'bar',d:10,m:6}],col:true,a:(cmp(got,need)>0?'Sí':'No')+'. '+fs(got)+' es '+cmpWord(got,need)+' '+fs(need)+' = '+fs(to(need,10))+'.',h:'¿Cuántos décimos son '+fs(need)+'?'}})()]});
 // F10
 L.push({t:"La receta secreta",e:[
  pctRead({k:'grid',r:2,c:5,m:7},F(7,10)),
  (()=>{const a=F(5,6),b=F(3,4);return{q:'¿Cuál es mayor, '+fs(a)+' o '+fs(b)+'? Escribe &lt;, = o &gt;.',f:[{k:'bar',d:12}],k:[{k:'bar',d:12,m:10},{k:'bar',d:12,m:9}],col:true,a:fs(a)+' &gt; '+fs(b)+' porque '+fs(to(a,12))+' &gt; '+fs(to(b,12))+'.',h:'¿Qué denominador sirve para sextos y cuartos?'}})(),
  (()=>{const need=F(3,4),have=F(2,3);return{q:'Una receta pide '+fs(need)+' de taza de leche. Hay '+fs(have)+' de taza. ¿Alcanza?',f:[{k:'bar',d:12}],k:[{k:'bar',d:12,m:8},{k:'bar',d:12,m:9}],col:true,a:(cmp(have,need)>=0?'Sí':'No')+'. '+fs(have)+' = '+fs(to(have,12))+' es '+cmpWord(have,need)+' '+fs(need)+' = '+fs(to(need,12))+'. Falta '+fs(sub(to(need,12),to(have,12)))+'.',h:'¿Cuántos doceavos son '+fs(need)+'? ¿Y '+fs(have)+'?'}})()]});
 LV.push({title:"Equivalentes y comparar",rows:L});
})();

/* NIVEL 2 · Sumar y restar con distinto denominador */
(()=>{
 const L=[];
 const op=(a,b,sign,d,pre)=>{const A=to(a,d),B=to(b,d),R=sign>0?add(A,B):sub(A,B),Rd=to(R,d);
  return{q:'Calcula '+fs(a)+(sign>0?' + ':' − ')+fs(b)+'. Usa partes de '+fs(F(1,d))+'.',f:[{k:'bar',d,m:pre?A.n:0}],k:[sign>0?{k:'bar',d,m:A.n,add:B.n}:{k:'bar',d,m:A.n,cross:B.n}],
   a:fs(A)+(sign>0?' + ':' − ')+fs(B)+' = '+fs(Rd)+(simp(Rd).d!==d?' = '+fs(simp(Rd)):''),h:'¿Cuántas partes de '+fs(F(1,d))+' son '+fs(a)+'? ¿Y '+fs(b)+'?',R:Rd}};
 const read=(spec,txt,ans,h)=>({q:txt,f:[spec],k:[spec],fixed:true,a:ans,h});
 const thr=(q,start,ch,sign,goal,strict,d,h)=>{const S=to(start,d),C=to(ch,d),R=sign>0?add(S,C):sub(S,C),G=to(goal,d),ok=strict?cmp(R,G)>0:cmp(R,G)>=0;
  return{q,f:[{k:'bar',d}],k:[sign>0?{k:'bar',d,m:S.n,add:C.n}:{k:'bar',d,m:S.n,cross:C.n}],a:(ok?'Sí':'No')+'. '+fs(S)+(sign>0?' + ':' − ')+fs(C)+' = '+fs(to(R,d))+', que es '+cmpWord(R,G)+' '+fs(G)+(G.d!==goal.d?' = '+fs(goal):'')+(cmp(R,G)===0?(strict?', y se pedía <b>más de</b> '+fs(goal):'; «al menos» incluye el caso igual'):'')+'.',h}};
 L.push({t:"El puente colgante",e:[
  read({k:'bar',d:8,m:4},'¿Qué fracción está marcada? Escríbela en octavos y en medios.',fs(F(4,8))+' = '+fs(F(1,2)),'¿Cuántos octavos forman la mitad?'),
  op(F(1,2),F(1,8),1,8,true),
  thr('Una tabla cubre '+fs(F(1,2))+' del puente y otra cubre '+fs(F(1,4))+', sin encimarse. ¿Cubren <b>al menos</b> '+fs(F(3,4))+'?',F(1,2),F(1,4),1,F(3,4),false,4,'¿Cuántos cuartos son '+fs(F(1,2))+'?')]});
 L.push({t:"La lona del circo",e:[
  read({k:'pie',d:6,m:3},'¿Qué fracción está sombreada? Escribe dos nombres.',fs(F(3,6))+' = '+fs(F(1,2)),'¿Qué parte del círculo cubren 3 de 6 partes?'),
  op(F(1,3),F(1,6),1,6,true),
  thr('Para tapar la jaula se necesita <b>más de</b> '+fs(F(2,3))+' de una lona. Juntan un pedazo de '+fs(F(1,2))+' y otro de '+fs(F(1,6))+'. ¿Alcanza?',F(1,2),F(1,6),1,F(2,3),true,6,'¿Cuántos sextos son '+fs(F(1,2))+'? ¿Y '+fs(F(2,3))+'?')]});
 L.push({t:"Saltos de la rana",e:[
  read({k:'line',d:8,pt:5},'¿En qué fracción cayó la rana?',fs(F(5,8)),'¿Cuántos octavos hay de 0 al punto?'),
  op(F(3,4),F(1,2),-1,4),
  {q:'Lupe calculó '+fs(F(1,2))+' + '+fs(F(1,4))+' = '+fs(F(2,6))+'. ¿Es correcto? Comprueba con la tira.',f:[{k:'bar',d:4}],k:[{k:'bar',d:4,m:2,add:1}],a:'No. Da '+fs(add(F(2,4),F(1,4)))+'. Lupe sumó numeradores y denominadores; además '+fs(F(2,6))+' es menor que '+fs(F(1,2))+', y al sumar no puede quedar menos.',h:'¿El resultado puede ser menor que '+fs(F(1,2))+' si le agregas algo?'}]});
 L.push({t:"El tinaco de la azotea",e:[
  read({k:'grid',r:2,c:5,m:3},'¿Qué fracción está sombreada?',fs(F(3,10)),'¿Cuántos cuadros hay en total?'),
  op(F(2,5),F(3,10),1,10),
  thr('Un tinaco estaba a '+fs(F(9,10))+'. Se usaron '+fs(F(2,5))+' del tinaco. Debe quedar <b>al menos</b> '+fs(F(1,2))+' para la noche. ¿Queda suficiente?',F(9,10),F(2,5),-1,F(1,2),false,10,'¿Cuántos décimos son '+fs(F(2,5))+'?')]});
 L.push({t:"El acuario",e:[
  read({k:'set',n:6,m:4,shape:'fish'},'¿Qué fracción de los peces tiene puntos? Escribe dos nombres.',fs(F(4,6))+' = '+fs(F(2,3)),'¿Cuántos peces hay en total?'),
  op(F(5,6),F(1,3),-1,6),
  {q:'Mateo tenía '+fs(F(3,4))+' de una pizza y regaló '+fs(F(1,8))+' de una pizza completa. ¿Qué cuenta resuelve el problema? A) '+fs(F(3,4))+' + '+fs(F(1,8))+' B) '+fs(F(3,4))+' − '+fs(F(1,8))+' C) '+fs(F(3,8))+' − '+fs(F(1,4))+'. Elige y resuelve.',f:[{k:'pie',d:8}],k:[{k:'pie',d:8,m:6,cross:1}],a:'B. '+fs(F(6,8))+' − '+fs(F(1,8))+' = '+fs(sub(F(6,8),F(1,8)))+' de pizza.',h:'Si regaló, ¿la cantidad sube o baja?'}]});
 L.push({t:"El sendero del bosque",e:[
  read({k:'pie',d:8,m:5},'¿Qué fracción está sombreada? ¿Cuánto falta para el entero?',fs(F(5,8))+'; faltan '+fs(F(3,8))+'.','¿Cuántas partes blancas hay?'),
  op(F(7,8),F(1,4),-1,8),
  (()=>{const a=F(1,3),b=F(1,4),D=sub(to(a,12),to(b,12));return{q:'En el mismo sendero, Sofía caminó '+fs(a)+' y Ernesto '+fs(b)+'. ¿Quién caminó más y cuánto más?',f:[{k:'bar',d:12}],k:[{k:'bar',d:12,m:4},{k:'bar',d:12,m:3}],col:true,a:'Sofía, '+fs(D)+' más ('+fs(to(a,12))+' − '+fs(to(b,12))+').',h:'¿Qué denominador sirve para tercios y cuartos?'}})()]});
 L.push({t:"La pintura del mural",e:[
  read({k:'line',d:6,jumps:[[0,2],[2,5]]},'¿Qué suma muestran los saltos? ¿Dónde terminan?',fs(F(2,6))+' + '+fs(F(3,6))+' = '+fs(F(5,6)),'¿Cuántos sextos mide cada salto?'),
  op(F(1,4),F(2,3),1,12),
  thr('Un frasco tenía '+fs(F(1,2))+' de pintura. Se usó '+fs(F(1,3))+' del frasco completo. Para el último mural se necesita <b>al menos</b> '+fs(F(1,4))+'. ¿Alcanza?',F(1,2),F(1,3),-1,F(1,4),false,12,'¿Qué denominador sirve para medios, tercios y cuartos?')]});
 L.push({t:"El error del robot",e:[
  read({k:'grid',r:3,c:4,m:5},'¿Qué fracción está sombreada?',fs(F(5,12)),'¿Cuántos cuadros hay en total?'),
  op(F(3,4),F(2,3),-1,12),
  {q:'El robot dice: «'+fs(F(3,4))+' + '+fs(F(1,8))+' = '+fs(F(4,12))+'». Encuentra su error y corrígelo.',f:[{k:'bar',d:8}],k:[{k:'bar',d:8,m:6,add:1}],a:fs(F(6,8))+' + '+fs(F(1,8))+' = '+fs(add(F(6,8),F(1,8)))+'. El robot sumó 3 + 1 y 4 + 8; los denominadores no se suman.',h:'¿Cuántos octavos son '+fs(F(3,4))+'?'}]});
 L.push({t:"Reparto de tareas",e:[
  read({k:'hex',m:5},'¿Qué fracción del hexágono está sombreada?',fs(F(5,6)),'¿Cuántos triángulos iguales hay?'),
  op(F(1,4),F(1,6),1,12),
  (()=>{const r=sub(F(1,1),add(F(1,4),F(1,3)));return{q:'Una tarea se reparte: Ana hace '+fs(F(1,4))+', Beto '+fs(F(1,3))+' y Carla lo que sobra. Carla dice que le toca más de la mitad. ¿Tiene razón?',f:[{k:'bar',d:12}],k:[{k:'bar',d:12,m:3,add:4}],a:(cmp(r,F(1,2))>0?'Sí':'No')+'. A Carla le toca 1 − '+fs(F(7,12))+' = '+fs(to(r,12))+', que es '+cmpWord(r,F(1,2))+' '+fs(F(6,12))+'.',h:'¿Cuántos doceavos hacen juntos Ana y Beto?'}})()]});
 L.push({t:"La mochila del viaje",e:[
  read({k:'line',d:10,pt:7},'¿Qué fracción marca el punto?',fs(F(7,10)),'¿Cuántos décimos hay de 0 al punto?'),
  op(F(4,5),F(3,10),-1,10),
  (()=>{const a=F(1,2),b=F(3,8),max=F(3,4),s=add(to(a,8),b);return{q:'La mochila aguanta como máximo '+fs(max)+' kg más. Metes '+fs(a)+' kg de fruta y '+fs(b)+' kg de pan. ¿Te pasas del máximo?',f:[{k:'bar',d:8}],k:[{k:'bar',d:8,m:4,add:3}],a:(cmp(s,max)>0?'Sí, se pasa':'No se pasa')+'. '+fs(to(a,8))+' + '+fs(b)+' = '+fs(to(s,8))+', que es '+cmpWord(s,max)+' '+fs(to(max,8))+'.',h:'¿Cuántos octavos son '+fs(a)+'? ¿Y '+fs(max)+'?'}})()]});
 LV.push({title:"Sumar y restar con distinto denominador",rows:L});
})();

/* NIVEL 3 · Decimales, porcentajes y multiplicar por un natural */
(()=>{
 const L=[];
 const read=(spec,txt,ans,h)=>({q:txt,f:[spec],k:[spec],fixed:true,a:ans,h});
 const times=(k,a,bars)=>{const r=mul(a,k);return{q:'Calcula '+k+' × '+fs(a)+'. Dibuja '+k+' veces '+fs(a)+'.',f:Array(bars).fill(0).map((_,i)=>({k:'bar',d:a.d,m:i===0?a.n:0})),col:true,k:Array(bars).fill(0).map((_,i)=>({k:'bar',d:a.d,m:Math.max(0,Math.min(a.d,r.n-i*a.d))})),a:k+' × '+fs(a)+' = '+fs(r)+(r.n>=r.d||simp(r).d!==r.d?' = '+mixed(r):''),h:'¿Cuántas partes de '+fs(F(1,a.d))+' tienes en total?'}};
 const partOf=(p,fr,n)=>{const r=n*fr.n/fr.d;if(!Number.isInteger(r))throw Error('parte no entera');return{q:'Calcula el '+p+'% de '+n+'.',f:[{k:'bar',d:fr.d}],k:[{k:'bar',d:fr.d,m:fr.n}],a:p+'% = '+fs(fr)+'; '+n+' ÷ '+fr.d+(fr.n>1?' × '+fr.n:'')+' = '+r+'.',h:'¿Qué fracción es '+p+'%? ¿En cuántas partes iguales repartes '+n+'?',r}};
 L.push({t:"Monedas del tesoro",e:[
  read({k:'grid',r:2,c:5,m:5},'¿Qué parte está sombreada? Escríbela como fracción y como decimal.',fs(F(5,10))+' = 0.5 = '+fs(F(1,2)),'¿Cuántos décimos están sombreados?'),
  times(3,F(1,4),1),
  {q:'Una botella tiene 0.25 L de jugo y otra '+fs(F(1,4))+' L. ¿Cuál tiene más? Escribe la primera, la segunda o «iguales».',f:[{k:'g100',m:25}],k:[{k:'g100',m:25},{k:'bar',d:4,m:1}],a:'Iguales. 0.25 = '+fs(F(25,100))+' = '+fs(simp(F(25,100)))+'.',h:'¿Cuántos centésimos son '+fs(F(1,4))+'?'}]});
 L.push({t:"La tienda de cometas",e:[
  read({k:'g100',m:25},'¿Qué parte está sombreada? Escríbela como fracción, decimal y porcentaje.',fs(F(25,100))+' = 0.25 = 25% = '+fs(F(1,4)),'¿Cuántos cuadritos de 100 están sombreados?'),
  times(4,F(2,5),2),
  (()=>{const a=F(1,4),b=F(1,5);return{q:'Una cometa tiene 25% de descuento y otra '+fs(b)+' de descuento sobre su precio. ¿Cuál descuento es mayor si las dos cuestan lo mismo?',f:[{k:'bar',d:4,m:1},{k:'bar',d:5}],col:true,k:[{k:'bar',d:4,m:1},{k:'bar',d:5,m:1}],a:'El de 25%. 25% = '+fs(a)+', que es '+cmpWord(a,b)+' '+fs(b)+' (20%).',h:'¿Qué fracción es 25%? ¿Qué parte es más grande, un cuarto o un quinto?'}})()]});
 L.push({t:"El termómetro del volcán",e:[
  read({k:'line',d:10,pt:8},'¿Qué número marca el punto? Escríbelo como decimal y como fracción.','0.8 = '+fs(F(8,10))+' = '+fs(F(4,5)),'¿Cuántos décimos hay de 0 al punto?'),
  {q:'Escribe '+fs(F(3,4))+' como número decimal.',f:[{k:'g100'}],k:[{k:'g100',m:75}],a:fs(F(3,4))+' = '+fs(to(F(3,4),100))+' = '+dec(val(F(3,4))),h:'¿Cuántos centésimos son '+fs(F(1,4))+'? ¿Y tres cuartos?'},
  {q:'Pepe escribe: '+fs(F(1,5))+' = 0.5. ¿Tiene razón? Corrígelo con la recta.',f:[{k:'line',d:10}],k:[{k:'line',d:10,pt:2}],a:'No. '+fs(F(1,5))+' = '+fs(to(F(1,5),10))+' = '+dec(val(F(1,5)))+'. 0.5 es '+fs(F(1,2))+'.',h:'¿Cuántos décimos caben en un quinto?'}]});
 L.push({t:"La colecta del viaje",e:[
  read({k:'set',n:10,m:2,shape:'star'},'¿Qué parte de las estrellas tiene puntos? Escríbela como fracción y como porcentaje.',fs(F(2,10))+' = '+fs(F(1,5))+' = 20%','¿Cuántas estrellas hay en total?'),
  partOf(50,F(1,2),18),
  (()=>{const goal=400,need=goal*3/4,have=280;return{q:'Para el viaje hay que juntar <b>al menos</b> '+fs(F(3,4))+' de $'+goal+'. Llevan $'+have+'. ¿Ya alcanzan?',f:[{k:'bar',d:4}],k:[{k:'bar',d:4,m:3}],a:(have>=need?'Sí':'No')+'. '+fs(F(3,4))+' de '+goal+' = '+need+'; '+have+(have>=need?' ≥ ':' &lt; ')+need+'. Faltan $'+Math.max(0,need-have)+'.',h:'¿Cuánto es '+fs(F(1,4))+' de 400?'}})()]});
 L.push({t:"Ruedas de la bicicleta",e:[
  read({k:'pie',d:8,m:1},'¿Qué fracción está sombreada? Escríbela también como decimal.',fs(F(1,8))+' = '+dec(val(F(1,8))),'¿Cuántas partes iguales tiene la rueda? Si '+fs(F(1,4))+' = 0.25, ¿cuánto es la mitad de un cuarto?'),
  {q:'Llenas 5 vasos con 0.3 L de agua cada uno. ¿Cuántos litros usas? Calcula 5 × 0.3.',f:[{k:'line',d:10,max:2,w:300}],k:[{k:'line',d:10,max:2,w:300,jumps:[[0,3],[3,6],[6,9],[9,12],[12,15]]}],a:'5 × 0.3 = '+dec(5*0.3)+' (15 décimos).',h:'¿Cuántos décimos son 0.3? ¿Y cinco veces?'},
  {q:'¿Cuál <b>no</b> es igual a '+fs(F(1,2))+'? A) 0.5 B) 50% C) '+fs(F(5,10))+' D) 0.05',fixed:true,f:[{k:'g100',m:50}],k:[{k:'g100',m:50}],a:'D. 0.05 = '+fs(F(5,100))+' = '+fs(simp(F(5,100)))+'; '+fs(F(1,2))+' = 0.5.',h:'¿Cuántos centésimos son 0.05? ¿Y 0.5?'}]});
 L.push({t:"Jarras de agua fresca",e:[
  read({k:'g100',m:10},'¿Qué parte está sombreada? Fracción, decimal y porcentaje.',fs(F(10,100))+' = '+fs(F(1,10))+' = 0.1 = 10%','¿Cuántas columnas completas hay sombreadas?'),
  times(3,F(3,8),2),
  (()=>{const v=F(1,4),n=5,need=mul(v,n),jar=F(3,2);return{q:'Cada vaso lleva '+fs(v)+' L. Una jarra tiene 1 '+fs(F(1,2))+' L. ¿Alcanza para '+n+' vasos?',f:[{k:'bar',d:4},{k:'bar',d:4}],col:true,k:[{k:'bar',d:4,m:4},{k:'bar',d:4,m:1}],a:(cmp(jar,need)>=0?'Sí':'No')+'. '+n+' × '+fs(v)+' = '+fs(need)+' = '+mixed(need)+' L, que es '+cmpWord(need,jar)+' 1 '+fs(F(1,2))+' L. Sobra '+mixed(sub(jar,need))+' L.',h:'¿Cuántos cuartos hay en 1 '+fs(F(1,2))+' L?'}})()]});
 L.push({t:"La venta de balones",e:[
  read({k:'line',d:4,pt:3},'¿Qué número marca el punto? Fracción y decimal.',fs(F(3,4))+' = 0.75','¿Cuántos cuartos hay de 0 al punto?'),
  partOf(20,F(1,5),35),
  (()=>{const p=240,a=p/4,b=50;return{q:'Un balón cuesta $'+p+' en las dos tiendas. La tienda A descuenta '+fs(F(1,4))+' del precio; la B descuenta $'+b+'. ¿Dónde ahorras más?',f:[{k:'bar',d:4}],k:[{k:'bar',d:4,m:1}],a:(a>b?'En la A':'En la B')+'. '+fs(F(1,4))+' de '+p+' = $'+a+', que es más que $'+b+'.',h:'¿Cuánto es '+fs(F(1,4))+' de 240?'}})()]});
 L.push({t:"Las semillas del huerto",e:[
  read({k:'set',n:8,m:3,shape:'drop'},'¿Qué fracción de las gotas tiene puntos?',fs(F(3,8)),'¿Cuántas gotas hay en total?'),
  {q:'Escribe '+fs(F(1,8))+' como decimal. Pista de inicio: '+fs(F(1,4))+' = 0.25.',f:[{k:'bar',d:8}],k:[{k:'bar',d:8,m:1}],a:fs(F(1,8))+' = '+dec(val(F(1,8)))+' (la mitad de 0.25).',h:'Si partes '+fs(F(1,4))+' en dos, ¿qué fracción obtienes? ¿Cuánto es la mitad de 0.25?'},
  {q:'Lola dice: «0.3 es menor que 0.25 porque 3 es menor que 25». Encuentra el error.',f:[{k:'g100'}],k:[{k:'g100',m:30},{k:'g100',m:25}],a:'0.3 = 0.30 = '+fs(F(30,100))+', que es mayor que 0.25 = '+fs(F(25,100))+'. Lola comparó cifras sin igualar las posiciones.',h:'¿Cuántos centésimos son 0.3?'}]});
 L.push({t:"El camión de carga",e:[
  read({k:'g100',m:75},'¿Qué parte está sombreada? Fracción, decimal y porcentaje.',fs(F(75,100))+' = '+fs(F(3,4))+' = 0.75 = 75%','¿Cuántos cuadritos de 100 están sombreados?'),
  times(6,F(2,3),4),
  (()=>{const c=F(3,4),n=7,tot=mul(c,n),max=F(5,1);return{q:'Cada caja pesa '+fs(c)+' de tonelada. El camión carga como máximo 5 toneladas. ¿Puede llevar '+n+' cajas?',f:[{k:'bar',d:4}],k:[0,1,2,3,4,5].map(i=>({k:'bar',d:4,m:Math.max(0,Math.min(4,21-4*i)),w:90,h:14})),a:(cmp(tot,max)<=0?'Sí':'No')+'. '+n+' × '+fs(c)+' = '+fs(tot)+' = '+mixed(tot)+' t, que es '+cmpWord(tot,max)+' 5 t.',h:'¿Cuántos cuartos son 5 toneladas?'}})()]});
 L.push({t:"Bicicletas en la escuela",e:[
  read({k:'line',d:5,pt:3},'¿Qué número marca el punto? Fracción, decimal y porcentaje.',fs(F(3,5))+' = 0.6 = 60%','¿Cuántos quintos hay de 0 al punto? ¿Cuánto vale cada quinto en décimos?'),
  partOf(10,F(1,10),250),
  (()=>{const A=200*3/5,B=220/2;return{q:'En la escuela A, '+fs(F(3,5))+' de sus 200 alumnos tienen bicicleta. En la B, el 50% de sus 220 alumnos. ¿En cuál hay más alumnos con bicicleta?',f:[{k:'bar',d:5},{k:'bar',d:2}],col:true,k:[{k:'bar',d:5,m:3},{k:'bar',d:2,m:1}],a:(A>B?'En la A':'En la B')+'. A: 200 ÷ 5 × 3 = '+A+'. B: 220 ÷ 2 = '+B+'.',h:'¿Cuánto es '+fs(F(1,5))+' de 200?'}})()]});
 LV.push({title:"Decimales, porcentajes y multiplicar",rows:L});
})();
