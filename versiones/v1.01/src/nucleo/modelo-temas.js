/* ---------- Temas de 5.º (además de fracciones) ----------
 E(q, f, a, h, o): q pregunta, f figuras (fijas salvo o.model), a respuesta, h pista-pregunta.
 o.k figuras del solucionario; o.model=true las figuras son modelo y bajan con las etapas. */
const E=(q,f,a,h,o)=>Object.assign({q,f:f||[],k:(o&&o.k)||f||[],a,h,fixed:!(o&&o.model)},o||{});
const PT9=['CMi','DMi','UMi','CM','DM','UM','C','D','U'],G9=[[0,3,'Millones'],[3,3,'Miles'],[6,3,'Unidades']];
const PTD=['U','.','d','c','m','dm'];
const dig=(n,len)=>String(n).padStart(len,' ').split('').map(c=>c===' '?'':c);
const cuadras=(a,b)=>Math.abs(a[0]-b[0])+Math.abs(a[1]-b[1]);
const PL=Object.fromEntries(PLACES.map(([n,x,y])=>[n,[x,y]]));
const sum=a=>a.reduce((x,y)=>x+y,0);
const modaDe=(cats,vals)=>{const m=Math.max(...vals);return cats.filter((c,i)=>vals[i]===m)};
const TEMAS=[];

/* NÚMEROS NATURALES */
TEMAS.push({eje:'num',title:'Números hasta 9 cifras',rows:[
 {t:'El censo de las ciudades',e:[
  E('¿Qué número muestra la tabla? Escríbelo con letra.',[{k:'ptab',cols:PT9,groups:G9,d:dig(405203718,9)}],N(405203718)+': cuatrocientos cinco millones doscientos tres mil setecientos dieciocho.','¿Cuántos millones hay? ¿Cuántos miles?'),
  E('Escribe con cifras: dos millones treinta mil cuarenta.',[{k:'ptab',cols:PT9,groups:G9}],N(2030040),'¿En qué columna va el 2? ¿Y el 3 de «treinta mil»?',{model:true,k:[{k:'ptab',cols:PT9,groups:G9,d:dig(2030040,9)}]}),
  E('La ciudad A tiene 1,305,000 habitantes y la B 1,350,000. Mario dice: «A es mayor porque termina en 5». ¿Tiene razón?',[{k:'ptab',cols:PT9,groups:G9,d:dig(1305000,9)},{k:'ptab',cols:PT9,groups:G9,d:dig(1350000,9)}],'No. '+(1350000>1305000?'B es mayor':'A es mayor')+': en las decenas de millar B tiene 5 y A tiene 0.','¿Desde qué columna, de izquierda a derecha, son diferentes?',{col:true})]},
 {t:'Boletos del estadio',e:[
  E('¿Qué número marca el punto?',[{k:'nl',min:3000000,max:4000000,step:100000,every:5,pt:3600000,w:300,lfs:9}],N(3600000),'¿Cuánto vale cada rayita entre 3,000,000 y 3,500,000?'),
  (()=>{const xs=[98765432,123456789,98756432],o=[...xs].sort((a,b)=>a-b);return E('Ordena de menor a mayor: '+xs.map(N).join('; ')+'.',[],o.map(N).join(' &lt; '),'¿Cuántas cifras tiene cada número? Si tienen las mismas, ¿dónde son distintos?')})(),
  (()=>{const cap=87500,v=87050;return E('Un estadio tiene '+N(cap)+' lugares y se vendieron '+N(v)+' boletos. ¿Se agotaron? Si no, ¿cuántos faltan?',[],(v>=cap?'Sí':'No')+'. Faltan '+N(cap-v)+' boletos.','¿Qué es mayor, 87,500 o 87,050? ¿Cuánto hay de uno a otro?')})()]},
 {t:'Saltos de la liebre',e:[
  E('¿Cuánto vale el 8 en este número?',[{k:'ptab',cols:PT9,groups:G9,d:dig(70008300,9),hl:5}],'8 unidades de millar = '+N(8000)+'.','¿En qué columna está el 8?'),
  E('Escribe el número que es 10,000 mayor que 4,995,000.',[{k:'ptab',cols:PT9,groups:G9}],N(4995000+10000),'¿Qué pasa en la columna de las decenas de millar si le sumas 1 a 9?',{model:true}),
  (()=>{const s=250000,t=2000000;return E('Una liebre salta así: 250,000; 500,000; 750,000; … ¿Llegará exactamente a 2,000,000? Si es así, ¿en qué salto?',[{k:'nl',min:0,max:2000000,step:250000,every:4,w:300,lfs:9}],(t%s===0?'Sí, en el salto '+t/s:'No')+' ('+N(s)+' × '+t/s+' = '+N(t)+').','¿Cuántas veces cabe 250,000 en 1,000,000?')})()]},
 {t:'El número escondido',e:[
  E('Lee el número de la tabla y escribe su nombre.',[{k:'ptab',cols:PT9,groups:G9,d:dig(600300080,9)}],N(600300080)+': seiscientos millones trescientos mil ochenta.','¿Qué dice el grupo de los millones? ¿Y el de los miles?'),
  E('Descompón 47,025,600 en sumandos según el valor de cada cifra.',[{k:'ptab',cols:PT9,groups:G9}],'40,000,000 + 7,000,000 + 20,000 + 5,000 + 600 = '+N(40000000+7000000+20000+5000+600),'¿Cuánto vale el 4? ¿Y el 7?',{model:true}),
  E('Lucía escribió «tres millones cuatrocientos» así: 3,400. Encuentra su error y corrígelo.',[{k:'ptab',cols:PT9,groups:G9}],'Lo correcto es '+N(3000400)+'. A Lucía le faltaron los tres ceros del grupo de los miles.','¿Cuántas cifras tiene un número de millones?',{model:true,k:[{k:'ptab',cols:PT9,groups:G9,d:dig(3000400,9)}]})]},
 {t:'La rifa gigante',e:[
  E('¿Qué número marca el punto?',[{k:'nl',min:1200000,max:1300000,step:10000,every:5,pt:1270000,w:300,lfs:9}],N(1270000),'¿Cuánto vale cada rayita?'),
  E('Continúa la sucesión: 999,990; 999,995; ___; ___.',[],N(1000000)+'; '+N(1000005),'¿De cuánto en cuánto aumenta?'),
  (()=>{const meta=2500000,v=2499990+15;return E('Una rifa necesita vender <b>más de</b> 2,500,000 boletos. Vendieron 2,499,990 y luego 15 más. ¿Lo lograron?',[],(v>meta?'Sí':'No')+'. 2,499,990 + 15 = '+N(v)+', que es mayor que 2,500,000.','¿Cuánto le falta a 2,499,990 para llegar a 2,500,000?')})()]}
]});

/* DECIMALES */
TEMAS.push({eje:'num',title:'Números decimales',rows:[
 {t:'Tornillos del taller',e:[
  E('¿Qué parte está sombreada? Escríbela con número y con letra.',[{k:'g100',m:37}],'0.37: treinta y siete centésimos.','¿Cuántos cuadritos de 100 están sombreados?'),
  E('Escribe con número: cuatro décimos y cinco centésimos.',[{k:'ptab',cols:PTD}],'0.45','¿En qué columna van los décimos? ¿Y los centésimos?',{model:true,k:[{k:'ptab',cols:PTD,d:['0','.','4','5','','']}]}),
  E('Un tornillo mide 0.5 cm y otro 0.45 cm. Iván dice que el de 0.45 es más largo porque 45 es mayor que 5. ¿Tiene razón?',[{k:'g100',m:50},{k:'g100',m:45}],'No. 0.5 = 0.50, que es mayor que 0.45. El de 0.5 cm es más largo.','¿Cuántos centésimos son 0.5?')]},
 {t:'La carrera de 100 metros',e:[
  E('¿Qué número marca el punto?',[{k:'nl',min:0,max:1,step:0.1,every:1,pt:0.7}],'0.7','¿Cuánto vale cada rayita entre 0 y 1?'),
  (()=>{const xs=[0.305,0.35,0.3],o=[...xs].sort((a,b)=>a-b);return E('Ordena de menor a mayor: 0.305, 0.35, 0.3.',[{k:'ptab',cols:PTD}],o.map(N).join(' &lt; ')+' (0.300 &lt; 0.305 &lt; 0.350).','¿Cómo quedan si todos tienen tres cifras decimales?',{model:true})})(),
  (()=>{const a=14.25,b=14.205;return E('En 100 m, Ana hizo 14.25 s y Bety 14.205 s. Gana quien hace <b>menos</b> tiempo. ¿Quién ganó?',[],(b<a?'Bety':'Ana')+'. 14.205 &lt; 14.250.','¿Cómo se ven los dos con tres decimales?')})()]},
 {t:'La medicina del veterinario',e:[
  E('¿Cuánto vale el 7 en este número?',[{k:'ptab',cols:PTD,d:['2','.','0','4','7','6'],hl:4}],'7 milésimos = 0.007.','¿En qué columna está el 7?'),
  E('Escribe con letra: 3.0025.',[{k:'ptab',cols:PTD}],'Tres enteros veinticinco diezmilésimos.','¿Hasta qué columna llega la última cifra?',{model:true,k:[{k:'ptab',cols:PTD,d:['3','.','0','0','2','5']}]}),
  E('Una pastilla debe tener <b>al menos</b> 0.125 g de medicina. Una tiene 0.12 g. ¿Cumple?',[],(0.12>=0.125?'Sí':'No')+'. 0.120 es menor que 0.125.','¿Cuántos milésimos son 0.12?')]},
 {t:'El termómetro',e:[
  E('¿Qué número marca el punto?',[{k:'nl',min:2,max:3,step:0.1,every:1,pt:2.6}],'2.6','¿Cuánto vale cada rayita entre 2 y 3?'),
  E('Escribe un número que esté entre 0.25 y 0.26.',[{k:'nl',min:0.25,max:0.26,step:0.001,every:10}],'Cualquiera mayor que 0.25 y menor que 0.26; por ejemplo, 0.255.','¿Cuántos milésimos hay entre 0.250 y 0.260?',{model:true}),
  E('Pedro dice que 1.09 es mayor que 1.1 porque «09 tiene más cifras». Corrígelo.',[{k:'nl',min:1,max:1.2,step:0.01,every:10}],'1.1 = 1.10, que es mayor que 1.09.','¿Cuántos centésimos tiene 1.1?',{model:true,k:[{k:'nl',min:1,max:1.2,step:0.01,every:10,pt:1.09},{k:'nl',min:1,max:1.2,step:0.01,every:10,pt:1.1}]})]},
 {t:'La gasolinera',e:[
  E('¿Qué parte está sombreada? Escríbela como decimal.',[{k:'g100',m:8}],'0.08','¿Cuántos cuadritos de 100 están sombreados?'),
  (()=>{const xs=[4.5,4.05,4.505,4.055],o=[...xs].sort((a,b)=>b-a);return E('Ordena de mayor a menor: 4.5, 4.05, 4.505, 4.055.',[],o.map(N).join(' &gt; '),'¿Cómo se ven todos con tres decimales?')})(),
  E('La gasolina cuesta $23.89 en la estación A y $23.9 en la B. ¿Cuál es más barata?',[],(23.89<23.9?'La A':'La B')+'. 23.89 &lt; 23.90.','¿Cuántos centésimos tiene 23.9?')]}
]});

/* SUMA Y RESTA */
TEMAS.push({eje:'ope',title:'Suma y resta',rows:[
 {t:'La papelería',e:[
  E('¿Qué suma muestran los saltos?',[{k:'nl',min:0,max:1000,step:100,every:2,jumps:[[0,300],[300,800]]}],'300 + 500 = 800','¿Cuánto mide cada salto?'),
  E('Calcula 2.5 + 1.75.',[{k:'ptab',cols:PTD,d:['2','.','5','0','','']},{k:'ptab',cols:PTD,d:['1','.','7','5','','']}],N(2.5+1.75),'¿Qué pasa si escribes 2.5 como 2.50?',{model:true,col:true}),
  (()=>{const t=28.5+12.75;return E('Tienes $50. Un cuaderno cuesta $28.50 y un lápiz $12.75. ¿Te alcanza para los dos? ¿Cuánto sobra o falta?',[],(t<=50?'Sí':'No')+'. 28.50 + 12.75 = '+N(t)+'; '+(t<=50?'sobran $'+N(50-t):'faltan $'+N(t-50))+'.','¿Cuánto suman los pesos? ¿Y los centavos?')})()]},
 {t:'La cinta de regalo',e:[
  E('¿Qué suma muestran los saltos?',[{k:'nl',min:0,max:2,step:0.1,every:5,jumps:[[0,0.8],[0.8,1.3]]}],'0.8 + 0.5 = 1.3','¿Cuántos décimos mide cada salto?'),
  E('Calcula mentalmente 1,300 + 2,800 y explica cómo lo hiciste.',[],N(1300+2800)+' (13 centenas + 28 centenas = 41 centenas).','¿Cuántas centenas son 1,300? ¿Y 2,800?'),
  (()=>{const q=3-1.25-0.8;return E('Una cinta mide 3 m. Cortas 1.25 m y luego 0.8 m. ¿Te queda <b>al menos</b> 1 m?',[{k:'nl',min:0,max:3,step:0.25,every:4}],(q>=1?'Sí':'No')+'. 3 − 1.25 − 0.8 = '+N(q)+' m, que es menor que 1 m.','¿Cuánto cortaste en total?',{model:true})})()]},
 {t:'El cambio en la tienda',e:[
  E('¿Qué suma muestra la cuadrícula? (puntos más rayas)',[{k:'grid',r:10,c:10,cw:10,m:30,add:25,byCol:true}],'0.30 + 0.25 = 0.55','¿Cuántos cuadritos tienen puntos? ¿Cuántos rayas?'),
  E('Calcula 15.6 − 7.85.',[{k:'ptab',cols:['D','U','.','d','c']}],N(15.6-7.85),'¿Cómo escribes 15.6 con dos decimales?',{model:true}),
  E('Pagas $200 por algo que cuesta $137.40. ¿Qué cuenta da tu cambio? A) 200 + 137.40 B) 200 − 137.40 C) 137.40 − 200. Elige y resuélvela.',[],'B. 200 − 137.40 = '+N(200-137.4)+' → $62.60.','Si pagas más de lo que cuesta, ¿el cambio es lo que sobra o lo que se junta?')]},
 {t:'El error de Toño',e:[
  E('¿Qué resta muestra el salto hacia atrás?',[{k:'nl',min:0,max:1,step:0.1,every:5,jumps:[[0.9,0.4]]}],'0.9 − 0.5 = 0.4','¿Dónde empieza y dónde termina el salto?'),
  E('Calcula mentalmente 5,000 − 1,700.',[],N(5000-1700),'¿Cuántas centenas son 5,000? ¿Y 1,700?'),
  E('Toño sumó 4.5 + 2.35 acomodando las cifras a la derecha y obtuvo 2.80. Encuentra el error y corrígelo.',[{k:'ptab',cols:PTD}],'Debe alinear el punto: 4.50 + 2.35 = '+N(4.5+2.35)+'. Toño sumó 45 + 235 centésimos.','¿Qué cifras deben quedar una debajo de la otra?',{model:true,k:[{k:'ptab',cols:PTD,d:['4','.','5','0','','']},{k:'ptab',cols:PTD,d:['2','.','3','5','','']}],col:true})]},
 {t:'El camión de mudanza',e:[
  E('¿Cuánto le falta a la parte sombreada para llegar a 1?',[{k:'g100',m:72}],'1 − 0.72 = 0.28','¿Cuántos cuadritos blancos hay?'),
  E('Calcula 9 − 3.475.',[],N(9-3.475),'¿Cómo escribes 9 con tres decimales?'),
  (()=>{const t=R4(1.35+1.2);return E('Un camión carga como máximo 2.5 t. Ya lleva 1.35 t y quieren subir 1.2 t más. ¿Puede?',[],(t<=2.5?'Sí':'No')+'. 1.35 + 1.2 = '+N(t)+' t, que es mayor que 2.5 t.','¿Cuánto suman las dos cargas?')})()]}
]});

/* MULTIPLICACIÓN Y DIVISIÓN */
TEMAS.push({eje:'ope',title:'Multiplicación y división',rows:[
 {t:'La tienda de gises',e:[
  E('¿Qué multiplicación muestra el arreglo? ¿Cuántos cuadros hay?',[{k:'grid',r:4,c:6,m:24}],'4 × 6 = 24','¿Cuántas filas hay? ¿Cuántos cuadros por fila?'),
  E('Calcula 4 × 1.25.',[{k:'nl',min:0,max:5,step:0.25,every:4}],'4 × 1.25 = '+N(4*1.25),'¿Cuánto son 4 veces 1? ¿Y 4 veces 0.25?',{model:true,k:[{k:'nl',min:0,max:5,step:0.25,every:4,jumps:[[0,1.25],[1.25,2.5],[2.5,3.75],[3.75,5]]}]}),
  (()=>{const t=6*3.5;return E('Cada gis cuesta $3.50. ¿Te alcanzan $20 para 6 gises?',[],(t<=20?'Sí':'No')+'. 6 × 3.50 = '+N(t)+'; faltan $'+N(t-20)+'.','¿Cuánto cuestan 6 gises de $3 y cuánto los 6 de 50 centavos?')})()]},
 {t:'Los garrafones',e:[
  E('¿Qué multiplicación muestran los saltos?',[{k:'nl',min:0,max:3,step:0.5,every:2,jumps:[[0,0.5],[0.5,1],[1,1.5],[1.5,2],[2,2.5]]}],'5 × 0.5 = 2.5','¿Cuántos saltos hay y cuánto mide cada uno?'),
  E('Reparte 7 m de listón entre 2 niñas en partes iguales. ¿Cuánto le toca a cada una?',[{k:'bar',d:2}],'7 ÷ 2 = '+N(7/2)+' m','¿Cuánto es la mitad de 6? ¿Y la mitad del metro que sobra?',{model:true}),
  (()=>{const q=15/4;return E('Se reparten 15 L de agua en 4 garrafones iguales. ¿Cabe <b>más de</b> 3.5 L en cada uno?',[],(q>3.5?'Sí':'No')+'. 15 ÷ 4 = '+N(q)+' L, que es mayor que 3.5 L.','¿Cuántos litros completos le tocan a cada uno? ¿Qué haces con los 3 L que sobran?')})()]},
 {t:'La pizza compartida',e:[
  E('La tira mide 12 m y está dividida en 5 partes iguales. ¿Cuánto mide cada parte?',[{k:'bar2',d:5,lab:'12 m'}],'12 ÷ 5 = '+N(12/5)+' m','¿Cuánto es 10 ÷ 5? ¿Y los 2 m que sobran?'),
  E('Calcula 3 × 2.75.',[],N(3*2.75),'¿Cuánto es 3 × 2? ¿Y 3 × 0.75?'),
  (()=>{const p=189,c=p/4;return E('Una pizza de $'+p+' se paga entre 4 amigos en partes iguales. Si cada uno pone $47, ¿alcanza?',[],(47*4>=p?'Sí':'No')+'. 4 × 47 = '+(47*4)+'; falta $'+(p-47*4)+'. Cada uno debe poner $'+N(c)+'.','¿Cuánto es 4 × 47?')})()]},
 {t:'El error de Karla',e:[
  E('Reparte los cuadros en 3 filas iguales. ¿Cuántos van en cada fila? Escribe la división.',[{k:'grid',r:3,c:8,m:24}],'24 ÷ 3 = 8','¿Cuántos cuadros hay en total?'),
  E('Calcula 9 ÷ 4 hasta los centésimos.',[],'9 ÷ 4 = '+N(9/4),'¿Cuántos enteros caben? ¿Cómo repartes el 1 que sobra en 4?'),
  E('Karla dice que 6 × 0.4 = 24. Encuentra el error.',[{k:'nl',min:0,max:3,step:0.2,every:5}],'6 × 0.4 = '+N(6*0.4)+'. Son 6 veces 4 décimos = 24 décimos = 2.4.','¿6 veces algo menor que 1 puede dar más que 6?',{model:true,k:[{k:'nl',min:0,max:3,step:0.2,every:5,jumps:[[0,0.4],[0.4,0.8],[0.8,1.2],[1.2,1.6],[1.6,2],[2,2.4]]}]})]},
 {t:'Disfraces para la obra',e:[
  E('¿Qué multiplicación muestran los saltos?',[{k:'nl',min:0,max:1,step:0.25,every:4,jumps:[[0,0.25],[0.25,0.5],[0.5,0.75],[0.75,1]]}],'4 × 0.25 = 1','¿Cuántos saltos? ¿Cuánto mide cada uno?'),
  E('Calcula 5 × 2.06.',[],N(5*2.06),'¿Cuánto es 5 × 2? ¿Y 5 × 0.06?'),
  (()=>{const t=7*1.5;return E('Un rollo tiene 10 m de tela y cada disfraz usa 1.5 m. ¿Alcanza para 7 disfraces?',[],(t<=10?'Sí':'No')+'. 7 × 1.5 = '+N(t)+' m, que es mayor que 10 m.','¿Cuánto es 7 × 1? ¿Y 7 × 0.5?')})()]}
]});

/* PROPORCIONALIDAD */
TEMAS.push({eje:'pro',title:'Proporcionalidad y porcentajes',rows:[
 {t:'La paletería',e:[
  E('Tres paletas cuestan $24. ¿Cuánto cuesta una?',[{k:'set',n:3,m:3,shape:'drop'}],'24 ÷ 3 = $8','¿En cuántas partes iguales repartes $24?'),
  E('Completa la tabla.',[{k:'table',head:['Paletas','2','4','6'],rows:[['Precio ($)','36','','']]}],'4 → $72 (el doble) y 6 → $108 (el triple).','Si compras el doble de paletas, ¿qué pasa con el precio?',{model:true,k:[{k:'table',head:['Paletas','2','4','6'],rows:[['Precio ($)','36','72','108']]}]}),
  (()=>{const need=36/12*3;return E('Con 3 tazas de harina salen 12 galletas. Quieres 36 galletas y tienes 8 tazas. ¿Alcanzan?',[{k:'table',head:['Galletas','12','24','36'],rows:[['Tazas','3','','']]}],(8>=need?'Sí':'No')+'. Para 36 galletas (el triple) se necesitan '+need+' tazas.','¿Cuántas veces cabe 12 en 36?',{model:true})})()]},
 {t:'Tiros a la canasta',e:[
  E('¿Qué porcentaje está sombreado?',[{k:'g100',m:20}],'20% = '+fs(F(1,5)),'¿Cuántos cuadritos de 100 están sombreados?'),
  E('Calcula el 25% de 80.',[{k:'bar',d:4}],'25% = '+fs(F(1,4))+'; 80 ÷ 4 = 20','¿Qué fracción es 25%?',{model:true,k:[{k:'bar',d:4,m:1}]}),
  E('En el equipo A entran 3 de cada 5 tiros. En el B, 5 de cada 10. ¿Quién tiene mejor puntería?',[{k:'bar',d:5},{k:'bar',d:10}],'A. 3 de 5 = 6 de 10, que es más que 5 de 10.','¿Cuántos de cada 10 tiros mete el equipo A?',{model:true,col:true,k:[{k:'bar',d:5,m:3},{k:'bar',d:10,m:5}]})]},
 {t:'Rebajas de invierno',e:[
  E('La tira representa $300 dividida en 10 partes iguales. ¿Qué porcentaje está sombreado y cuánto dinero es?',[{k:'bar2',d:10,m:1,lab:'$300'}],'10% = $30','¿Cuánto vale cada parte?'),
  E('Si 5 cuadernos cuestan $85, ¿cuánto cuestan 7?',[{k:'table',head:['Cuadernos','5','1','7'],rows:[['Precio ($)','85','','']]}],'1 cuaderno: 85 ÷ 5 = $17; 7 cuadernos: 7 × 17 = $'+(7*17),'¿Cuánto cuesta un cuaderno?',{model:true}),
  (()=>{const a=600*0.75,b=500;return E('Tienda A: chamarra de $600 con 25% de descuento. Tienda B: la misma chamarra a $500 sin descuento. ¿Dónde es más barata?',[],(a<b?'En la A':'En la B')+'. 25% de 600 = 150; 600 − 150 = $'+a+', menos que $500.','¿Cuánto es la cuarta parte de 600?')})()]},
 {t:'La mezcla de pintura',e:[
  E('Por cada lata con puntos hay latas blancas. ¿Cuántas con puntos hay por cada 3 blancas?',[{k:'set',n:5,m:2,shape:'coin'}],'2 con puntos por cada 3 blancas (2 de cada 5).','¿Cuántas latas tienen puntos y cuántas son blancas?'),
  E('Calcula el 50% de 46.',[],'50% = '+fs(F(1,2))+'; 46 ÷ 2 = 23','¿Qué fracción es 50%?'),
  E('Raúl dice que el 20% de 150 es 20. Encuentra el error.',[{k:'bar',d:5}],'20% = '+fs(F(1,5))+'; 150 ÷ 5 = 30. Raúl confundió el porcentaje con la cantidad.','¿Qué fracción es 20%? ¿Cuánto es 150 ÷ 5?',{model:true,k:[{k:'bar',d:5,m:1}]})]},
 {t:'Agua de jamaica',e:[
  E('¿Cuánto vale 1 en esta tabla?',[{k:'table',head:['Cajas','1','2','5'],rows:[['Kilos','?','8','20']]}],'1 caja = 4 kilos (8 ÷ 2).','¿Cuánto pesan 2 cajas? ¿Y una?'),
  E('Si 4 boletos cuestan $140, ¿cuánto cuestan 10?',[],'1 boleto: $35; 10 boletos: $'+(35*10),'¿Cuánto cuesta un boleto?'),
  E('Jarra A: 1 vaso de concentrado por cada 4 de agua. Jarra B: 3 vasos de concentrado por cada 10 de agua. ¿Cuál sabe más a jamaica?',[],(1/4>3/10?'La A':'La B')+'. A: 1 por 4 = 2.5 por 10. B: 3 por 10. B tiene más concentrado por cada vaso de agua.','Si la jarra A usara 10 vasos de agua, ¿cuánto concentrado llevaría?')]}
]});

/* CUERPOS GEOMÉTRICOS */
TEMAS.push({eje:'geo',title:'Prismas y pirámides',rows:[
 {t:'La caja de regalos',e:[
  E('¿Cuántas caras, aristas y vértices tiene este prisma rectangular?',[{k:'solid',t:'prismRect'}],'6 caras, 12 aristas y 8 vértices.','¿Cuántas caras hay arriba, abajo y alrededor?'),
  E('Una pirámide de base cuadrada: ¿cuántas caras, aristas y vértices tiene?',[{k:'solid',t:'pyrSq'}],'5 caras, 8 aristas y 5 vértices.','¿Cuántos triángulos hay alrededor de la base?'),
  E('Un objeto tiene 5 caras: 1 cuadrado y 4 triángulos que se juntan en un punto. ¿Es prisma o pirámide?',[],'Pirámide cuadrangular: una base y caras laterales triangulares que llegan a un vértice.','¿Cuántas bases tiene un prisma? ¿Y una pirámide?')]},
 {t:'La tienda de campaña',e:[
  E('¿Cuántas caras, aristas y vértices tiene este prisma triangular?',[{k:'solid',t:'prismTri'}],'5 caras, 9 aristas y 6 vértices.','¿Cuántos triángulos y cuántos rectángulos tiene?'),
  E('Una pirámide tiene base hexagonal. ¿Cuántas caras laterales tiene? ¿Cuántas caras en total?',[],'6 caras laterales; 7 caras en total.','¿Cuántos lados tiene la base?'),
  E('¿Cuál de estos desarrollos sirve para armar un cubo?',[{k:'choice',items:[{k:'net',t:'cubeCross',c:18},{k:'net',t:'rect2x3',c:18},{k:'net',t:'line6',c:14}]}],'A. B no cierra: quedan caras encimadas. C tampoco: 4 caras dan la vuelta y las otras 2 se enciman.','¿Qué cara queda arriba y cuál abajo al doblarlo?')]},
 {t:'El empaque del jugo',e:[
  E('¿Qué cuerpo se arma con este desarrollo?',[{k:'net',t:'prismRect',c:16}],'Un prisma rectangular (6 caras rectangulares).','¿Cuántas caras tiene y de qué forma son?'),
  E('Un prisma tiene bases de 5 lados. ¿Cuántas caras tiene en total?',[],'7 caras (2 bases + 5 laterales).','¿Cuántas caras laterales hay por cada lado de la base?'),
  E('Con 2 cuadrados y 4 rectángulos se arma una caja. ¿Es prisma o pirámide? ¿Cuántas aristas tiene?',[],'Prisma cuadrangular, 12 aristas.','¿Tiene dos bases iguales?')]},
 {t:'La pirámide de papel',e:[
  E('¿Qué cuerpo se arma con este desarrollo?',[{k:'net',t:'pyrSq',c:16}],'Una pirámide cuadrangular.','¿Qué figura queda en el centro? ¿Hacia dónde se doblan los triángulos?'),
  E('¿Cuántas aristas tiene una pirámide de base triangular?',[{k:'solid',t:'pyrTri'}],'6 aristas (3 de la base y 3 laterales).','¿Cuántas aristas tiene la base? ¿Cuántas suben al vértice?',{model:true}),
  E('Iris dice: «El cubo es una pirámide porque su base es un cuadrado». Corrígela.',[{k:'solid',t:'cube'}],'Un cubo es un prisma: tiene dos bases iguales y caras laterales cuadradas; no tiene un vértice donde se junten las caras.','¿Las caras laterales del cubo son triángulos?')]},
 {t:'El museo de cuerpos',e:[
  E('¿Cuántas caras, aristas y vértices tiene esta pirámide triangular?',[{k:'solid',t:'pyrTri'}],'4 caras, 6 aristas y 4 vértices.','¿Cuántos triángulos la forman?'),
  E('Un prisma de base hexagonal: ¿cuántas caras, aristas y vértices tiene?',[{k:'solid',t:'prismHex'}],'8 caras, 18 aristas y 12 vértices.','¿Cuántos vértices tiene cada base?'),
  E('Para armar una pirámide cuadrangular tienes 1 cuadrado y 3 triángulos. ¿Te alcanzan las piezas?',[],'No. Falta 1 triángulo: se necesitan 4, uno por cada lado de la base.','¿Cuántos lados tiene la base?')]}
]});

/* CÍRCULO */
TEMAS.push({eje:'geo',title:'El círculo',rows:[
 {t:'Platos de la cocina',e:[
  E('El radio mide 3 cm. ¿Cuánto mide el diámetro?',[{k:'circ',show:'r',lab:'3 cm'}],'6 cm (el diámetro es el doble del radio).','¿Cuántos radios caben en el diámetro?'),
  E('Un círculo tiene 10 cm de diámetro. ¿Cuánto mide su radio?',[{k:'circ',show:'d',lab:'10 cm'}],'5 cm.','¿Qué parte del diámetro es el radio?',{model:true}),
  E('Un plato mide 24 cm de diámetro. ¿Cabe acostado en una caja cuadrada de 20 cm de lado?',[],(24<=20?'Sí':'No')+'. El plato necesita 24 cm de ancho y la caja solo tiene 20 cm.','¿Cuánto mide el plato de lado a lado?')]},
 {t:'El compás mágico',e:[
  E('El diámetro mide 8 cm. ¿Cuánto mide el radio?',[{k:'circ',show:'d',lab:'8 cm'}],'4 cm.','¿Cuánto es la mitad de 8?'),
  E('Abres el compás 4.5 cm. ¿Qué diámetro tendrá el círculo?',[{k:'circ',show:'r',lab:'4.5 cm'}],'9 cm.','¿La abertura del compás es el radio o el diámetro?',{model:true}),
  E('En una moneda, ¿la circunferencia es el borde o toda la cara? Si pintas la cara, ¿pintas el círculo o la circunferencia?',[],'La circunferencia es el borde. Al pintar la cara pintas el círculo.','¿La circunferencia es una línea o una superficie?')]},
 {t:'La fuente del parque',e:[
  E('¿Qué punto está exactamente sobre la circunferencia?',[{k:'circ',show:'pts'}],'A. B está dentro del círculo y C está fuera.','¿Qué punto está a la misma distancia del centro que el borde?'),
  E('Dos puntos están a 7 cm. Quieres un círculo que tenga ese segmento como diámetro. ¿Qué radio usas?',[],'3.5 cm.','¿Cuánto es la mitad de 7?'),
  E('Una fuente circular tiene 3 m de radio. Ponen una banca a 4 m del centro. ¿Queda dentro o fuera de la fuente?',[{k:'circ',show:'r',lab:'3 m'}],'Fuera: 4 m es más que el radio de 3 m.','¿Hasta dónde llega la fuente desde el centro?')]},
 {t:'La diana',e:[
  E('La diana tiene dos círculos con el mismo centro. El radio del chico es 2 cm y el del grande es el doble. ¿Cuánto mide el diámetro del grande?',[{k:'circ',R:40,inner:20,show:'two',lab:'2 cm'}],'Radio grande 4 cm → diámetro 8 cm.','¿Cuánto mide el radio del círculo grande?'),
  E('El diámetro de un círculo mide 15 cm. ¿Cuánto mide su radio?',[],'7.5 cm.','¿Cuánto es la mitad de 15?'),
  E('Sergio dice: «el radio es el doble del diámetro». Corrígelo.',[{k:'circ',show:'d'}],'Es al revés: el diámetro es el doble del radio.','¿Cuál segmento es más largo, el que cruza todo o el que va del centro al borde?')]},
 {t:'Latas en la repisa',e:[
  E('¿Cuál segmento es un diámetro, AB o CD? ¿Por qué?',[{k:'circ',show:'chord'}],'AB, porque pasa por el centro O. CD no pasa por el centro.','¿Cuál segmento pasa por O?'),
  E('Tres monedas de 2.6 cm de diámetro están en fila, tocándose. ¿Cuánto mide la fila?',[],'3 × 2.6 = '+N(3*2.6)+' cm.','¿Cuánto ocupa cada moneda de lado a lado?'),
  (()=>{const t=4*7;return E('¿Caben 4 latas de 7 cm de diámetro en fila en una repisa de 30 cm?',[],(t<=30?'Sí':'No')+'. 4 × 7 = '+t+' cm, que es menor que 30 cm.','¿Cuánto ocupan las 4 latas juntas?')})()]}
]});

/* CROQUIS */
const D=(a,b)=>cuadras(PL[a],PL[b]);
TEMAS.push({eje:'geo',title:'Croquis y ubicación',rows:[
 {t:'Mi colonia',e:[
  E('¿En qué esquina está la Tienda?',[{k:'map'}],'Roble y Mar.','¿Qué calle pasa de arriba abajo por la Tienda? ¿Y de lado a lado?'),
  E('Usa el croquis del ejercicio 1. ¿Cuántas cuadras caminas, como mínimo, de la Casa a la Escuela?',[],D('Casa','Escuela')+' cuadras (2 al norte y 2 al este).','¿Cuántas cuadras hacia el norte? ¿Cuántas hacia el este?',{k:[{k:'map',path:[[0,0],[0,2],[2,2]]}]}),
  E('Usa el croquis del ejercicio 1. Lalo dice: «De la Casa camina 2 cuadras al norte por Pino y 1 al este por Mar; llegas a la Escuela». ¿Tiene razón?',[],'No. Llega a la Tienda (Roble y Mar). A la Escuela le falta 1 cuadra más al este.','Sigue el camino con el dedo. ¿Dónde terminas?',{k:[{k:'map',path:[[0,0],[0,2],[1,2]]}]})]},
 {t:'El camino más corto',e:[
  E('¿Qué lugar está en la esquina de Olmo y Luna?',[{k:'map'}],'El Parque.','Busca la calle Olmo y sube hasta Luna.'),
  E('Usa el croquis del ejercicio 1. ¿Cuántas cuadras hay, como mínimo, de la Escuela al Mercado?',[],D('Escuela','Mercado')+' cuadras (2 al sur y 1 al este).','¿Cuántas al sur? ¿Cuántas al este?'),
  E('Usa el croquis del ejercicio 1. De la Tienda al Parque, ¿qué ruta es más corta? A: 2 al este y 1 al sur. B: 1 al este, 2 al sur, 1 al este y 1 al norte.',[],'A: 3 cuadras. B también llega, pero camina 5 cuadras.','Cuenta las cuadras de cada ruta.',{k:[{k:'map',path:[[1,2],[3,2],[3,1]]}]})]},
 {t:'El mandado',e:[
  E('Sobre Av. Sol, ¿qué lugar está al este de la Casa?',[{k:'map'}],'El Mercado (Olmo y Av. Sol).','¿Hacia qué lado está el este en la rosa de los vientos?'),
  E('Usa el croquis del ejercicio 1. Escribe un camino del Mercado a la Escuela con direcciones (N, S, E, O) y cuadras.',[],'Por ejemplo: 2 al norte y 1 al oeste. Mínimo '+D('Mercado','Escuela')+' cuadras.','¿La Escuela está más al norte o más al sur que el Mercado?',{k:[{k:'map',path:[[3,0],[3,2],[2,2]]}]}),
  E('Usa el croquis del ejercicio 1. Un letrero de la Escuela dice: «El Parque está a menos de 3 cuadras». ¿Es cierto?',[],(D('Escuela','Parque')<3?'Sí':'No')+'. Son '+D('Escuela','Parque')+' cuadras (1 al este y 1 al sur).','¿Cuántas cuadras hay al este y cuántas al sur?')]},
 {t:'La rosa de los vientos',e:[
  E('Si caminas de la Escuela a la Tienda, ¿hacia qué dirección vas?',[{k:'map'}],'Hacia el oeste.','¿La Tienda está a la izquierda o a la derecha de la Escuela en el croquis?'),
  E('Usa el croquis del ejercicio 1. ¿Cuántas cuadras hay, como mínimo, de la Casa al Parque?',[],D('Casa','Parque')+' cuadras (3 al este y 1 al norte).','¿Cuántas al este? ¿Cuántas al norte?'),
  E('Usa el croquis del ejercicio 1. Mauro dice que el Mercado está al norte de la Casa. Corrígelo.',[],'El Mercado está al este de la Casa, sobre Av. Sol.','¿Están en la misma calle horizontal?')]},
 {t:'¿Llego a tiempo?',e:[
  E('¿Cuáles son las dos calles de la esquina de la Casa?',[{k:'map'}],'Pino y Av. Sol.','¿Qué calle vertical y qué calle horizontal se cruzan ahí?'),
  E('Usa el croquis del ejercicio 1. ¿Cuántas cuadras hay, como mínimo, de la Tienda al Mercado?',[],D('Tienda','Mercado')+' cuadras (2 al sur y 2 al este).','¿Cuántas al sur? ¿Cuántas al este?'),
  (()=>{const t=D('Casa','Escuela')*3;return E('Usa el croquis del ejercicio 1. Cada cuadra te toma 3 minutos y faltan 10 minutos para entrar. ¿Llegas a tiempo de la Casa a la Escuela por el camino más corto?',[],(t<=10?'Sí':'No')+'. Son '+D('Casa','Escuela')+' cuadras × 3 = '+t+' minutos.','¿Cuántas cuadras son? ¿Cuántos minutos en total?')})()]}
]});

/* MEDICIÓN */
TEMAS.push({eje:'med',title:'Longitud, masa y capacidad',rows:[
 {t:'El estuche',e:[
  E('¿Cuánto mide el lápiz? Escríbelo en cm y en mm.',[{k:'ruler',cm:10,len:7.5}],'7.5 cm = 75 mm.','¿Dónde termina la punta?'),
  E('Convierte 3.5 km a metros.',[{k:'nl',min:0,max:4,step:0.5,every:2}],'3.5 km = '+N(3.5*1000)+' m.','¿Cuántos metros tiene 1 km?',{model:true}),
  (()=>{const t=12*75;return E('Un elevador soporta como máximo 1 t. Suben 12 personas de 75 kg cada una. ¿Se pasan?',[],(t>1000?'Sí, se pasan':'No se pasan')+'. 12 × 75 = '+N(t)+' kg, menos que 1 t = 1,000 kg.','¿Cuántos kilos tiene una tonelada?')})()]},
 {t:'La jarra de limonada',e:[
  E('¿Cuánta agua tiene la jarra? Escríbelo en ml y en L.',[{k:'jar',cap:1000,step:250,level:750,unit:'ml'}],'750 ml = 0.75 L.','¿Cuántos ml hay entre cada rayita?'),
  E('Convierte 2,500 g a kilogramos.',[],'2,500 g = 2.5 kg.','¿Cuántos gramos tiene 1 kg?'),
  (()=>{const t=9*250;return E('Una jarra tiene 2 L. ¿Alcanza para servir 9 vasos de 250 ml?',[{k:'jar',cap:2000,step:250,level:2000,unit:'ml'}],(t<=2000?'Sí':'No')+'. 9 × 250 = '+N(t)+' ml, más que 2,000 ml.','¿Cuántos ml tiene 2 L?')})()]},
 {t:'El puente del río',e:[
  E('¿Cuánta agua tiene la jarra?',[{k:'jar',cap:2000,step:500,level:1500,unit:'ml'}],'1,500 ml = 1.5 L.','¿Cuántos ml vale cada rayita?'),
  E('¿Cuántos metros son 4 km con 250 m?',[],N(4250)+' m.','¿Cuántos metros son 4 km?'),
  (()=>{const t=3.2+1.9;return E('Un camión vacío pesa 3.2 t y lleva 1,900 kg de carga. El puente aguanta como máximo 5 t. ¿Puede pasar?',[],(t<=5?'Sí':'No')+'. 1,900 kg = 1.9 t; 3.2 + 1.9 = '+N(t)+' t, más que 5 t.','¿Cuántas toneladas son 1,900 kg?')})()]},
 {t:'¿Qué pesa más?',e:[
  E('¿Cuánto mide el lápiz? Escríbelo en cm y en mm.',[{k:'ruler',cm:15,len:12.3,u:13}],'12.3 cm = 123 mm.','¿En qué centímetro termina? ¿Cuántos milímetros después?'),
  E('Ordena de menor a mayor: 1.2 km, 950 m, 1,050 m.',[],'950 m &lt; 1,050 m &lt; 1.2 km (1,200 m).','¿Cuántos metros son 1.2 km?'),
  E('Ana dice que medio kilo de algodón pesa menos que 500 g de hierro. ¿Tiene razón?',[],'No. Medio kilo = 500 g: pesan lo mismo, aunque el algodón ocupe más espacio.','¿Cuántos gramos son medio kilo?')]},
 {t:'El plan de entrenamiento',e:[
  E('¿Cuánta agua tiene la jarra? Escríbelo en litros.',[{k:'jar',cap:2000,step:250,level:1250,unit:'ml'}],'1,250 ml = 1.25 L.','¿Cuántas rayitas de 250 ml hay llenas?'),
  E('Convierte 0.75 t a kilogramos.',[],'0.75 t = '+N(750)+' kg.','¿Cuántos kilos tiene 1 t? ¿Y tres cuartos de tonelada?'),
  (()=>{const t=2.5*5;return E('Un corredor entrena 2.5 km diarios durante 5 días. Su meta es <b>al menos</b> 12 km a la semana. ¿La cumple?',[],(t>=12?'Sí':'No')+'. 5 × 2.5 = '+N(t)+' km.','¿Cuánto es 5 × 2? ¿Y 5 × 0.5?')})()]}
]});

/* PERÍMETRO Y ÁREA */
const rect=(x,y,w,h,name,lab)=>({pts:[[x,y],[x+w,y],[x+w,y+h],[x,y+h]],name,lab});
TEMAS.push({eje:'med',title:'Perímetro y área',rows:[
 {t:'El huerto escolar',e:[
  E('Cada cuadro mide 1 cm por lado. ¿Cuánto mide el perímetro y cuánto el área del rectángulo?',[{k:'poly',gw:8,gh:5,shapes:[rect(1,1,5,3)]}],'Perímetro: 5 + 3 + 5 + 3 = 16 cm. Área: 5 × 3 = 15 cm².','¿Cuántos cuadros caben dentro? ¿Cuánto mide cada lado?'),
  E('Calcula el área de un rectángulo de 8 m por 4.5 m.',[],'8 × 4.5 = '+N(8*4.5)+' m².','¿Qué operación da el área de un rectángulo?'),
  E('Compara el rectángulo A y el cuadrado B. ¿Cuál tiene más área? ¿Y más perímetro?',[{k:'poly',gw:13,gh:6,shapes:[rect(1,2,6,2,'A',[4,3]),rect(8,1,4,4,'B',[10,3])]}],'B tiene más área (16 contra 12). Los dos tienen el mismo perímetro: 16.','Cuenta los cuadros de adentro y la orilla de cada figura.')]},
 {t:'El jardín cercado',e:[
  E('Cada cuadro mide 1 cm por lado. ¿Cuál es el área del triángulo?',[{k:'poly',gw:8,gh:6,shapes:[{pts:[[1,5],[7,5],[3,1]],h:[[3,1,3,5]]}]}],'Base 6 cm, altura 4 cm: 6 × 4 ÷ 2 = 12 cm².','¿Cuánto mide la base? ¿Y la altura (línea punteada)?'),
  E('Calcula el perímetro de un hexágono regular de 4.5 cm de lado.',[],'6 × 4.5 = '+N(6*4.5)+' cm.','¿Cuántos lados iguales tiene un hexágono?'),
  (()=>{const p=2*(12+7);return E('Quieres cercar un jardín rectangular de 12 m por 7 m y tienes 40 m de malla. ¿Alcanza?',[],(p<=40?'Sí':'No')+'. Perímetro = 12 + 7 + 12 + 7 = '+p+' m; sobran '+(40-p)+' m.','¿Cuánto mide toda la orilla del jardín?')})()]},
 {t:'La pared del salón',e:[
  E('Cada cuadro mide 1 cm por lado. ¿Cuál es el área del romboide?',[{k:'poly',gw:9,gh:5,shapes:[{pts:[[1,4],[6,4],[8,1],[3,1]],h:[[3,1,3,4]]}]}],'Base 5 cm, altura 3 cm: 5 × 3 = 15 cm².','¿Qué pasa si cortas el triángulo de un lado y lo pegas del otro?'),
  E('Calcula el área de un triángulo de base 9 cm y altura 6 cm.',[],'9 × 6 ÷ 2 = '+(9*6/2)+' cm².','¿Por qué se divide entre 2?'),
  (()=>{const a=4*2.5;return E('Vas a pintar una pared de 4 m por 2.5 m. Un bote de pintura alcanza para 8 m². ¿Basta con un bote?',[],(a<=8?'Sí':'No')+'. Área = 4 × 2.5 = '+N(a)+' m², más que 8 m².','¿Cuál es el área de la pared?')})()]},
 {t:'El error de Beto',e:[
  E('Cada cuadro mide 1 cm. ¿Cuál es el área y el perímetro de la figura en L?',[{k:'poly',gw:7,gh:6,shapes:[{pts:[[1,1],[3,1],[3,3],[6,3],[6,5],[1,5]]}]}],'Área: '+(2*4+3*2)+' cm². Perímetro: 2 + 2 + 3 + 2 + 5 + 4 = 18 cm.','¿Puedes partirla en dos rectángulos?'),
  E('Calcula el área de un romboide de base 7 m y altura 3.5 m.',[],'7 × 3.5 = '+N(7*3.5)+' m².','¿Es la misma fórmula que la del rectángulo?'),
  E('Beto calculó el área de un triángulo de base 8 cm y altura 5 cm y obtuvo 40 cm². Encuentra el error.',[{k:'poly',gw:10,gh:7,shapes:[{pts:[[1,6],[9,6],[4,1]],h:[[4,1,4,6]]}]}],'Falta dividir entre 2: 8 × 5 ÷ 2 = 20 cm². 40 es el área del rectángulo que lo contiene.','¿El triángulo ocupa todo el rectángulo de 8 por 5 o solo la mitad?')]},
 {t:'Las losetas del piso',e:[
  E('Cada cuadro mide 1 cm. El cuadrado tiene perímetro 16 cm y área 16 cm². ¿Miden lo mismo?',[{k:'poly',gw:6,gh:6,shapes:[rect(1,1,4,4)]}],'No. Coincide el número, pero el perímetro mide longitud (cm) y el área mide superficie (cm²).','¿Qué unidad lleva cada medida?'),
  E('Calcula el perímetro de un rectángulo de 9.5 m por 4 m.',[],'9.5 + 4 + 9.5 + 4 = '+N(2*(9.5+4))+' m.','¿Cuántos lados tiene y cuánto mide cada uno?'),
  (()=>{const a=6*5,c=a/2;return E('Un piso mide 6 m por 5 m. Cada caja de loseta cubre 2 m² y tienes 14 cajas. ¿Alcanzan?',[],(14>=c?'Sí':'No')+'. Área = '+a+' m²; se necesitan '+a+' ÷ 2 = '+c+' cajas.','¿Cuál es el área del piso?')})()]}
]});

/* DATOS */
const C1=['Mango','Manzana','Plátano','Uva'],V1=[8,5,6,3];
const C3=['Fútbol','Básquet','Natación','Voleibol'],V3=[12,7,4,7];
const C4=['Lun','Mar','Mié','Jue'],V4=[6,10,4,8];
TEMAS.push({eje:'dat',title:'Tablas, gráficas y moda',rows:[
 {t:'La fruta favorita',e:[
  E('¿Cuál es la moda (la fruta más votada)?',[{k:'chart',cats:C1,vals:V1,max:10,step:1}],modaDe(C1,V1).join(' y ')+' ('+Math.max(...V1)+' votos).','¿Qué barra es la más alta?'),
  E('Usa la gráfica del ejercicio 1. ¿Cuántos alumnos votaron en total?',[],V1.join(' + ')+' = '+sum(V1),'¿Cuántos votos tiene cada barra?'),
  E('Usa la gráfica del ejercicio 1. La maestra dice que Plátano y Manzana juntos tienen más votos que Mango. ¿Tiene razón?',[],((V1[1]+V1[2])>V1[0]?'Sí':'No')+'. '+V1[1]+' + '+V1[2]+' = '+(V1[1]+V1[2])+', más que '+V1[0]+'.','¿Cuántos votos suman Plátano y Manzana?')]},
 {t:'Goles del torneo',e:[
  E('La tabla muestra los goles de 6 partidos. ¿Cuál es la moda?',[{k:'table',head:['Partido','1','2','3','4','5','6'],rows:[['Goles','2','3','2','1','2','4']]}],'2 goles (se repite 3 veces).','¿Qué número de goles aparece más veces?'),
  E('Haz la gráfica de barras: ¿en cuántos partidos se metieron 1, 2, 3 y 4 goles?',[{k:'chart',cats:['1','2','3','4'],vals:[1,3,1,1],max:4,step:1,empty:true}],'1 gol: 1 partido; 2 goles: 3; 3 goles: 1; 4 goles: 1.','¿Cuántas veces aparece el 2 en la tabla?',{model:true,k:[{k:'chart',cats:['1','2','3','4'],vals:[1,3,1,1],max:4,step:1}]}),
  E('El entrenador dice que lo más frecuente fue meter 3 goles. ¿Tiene razón?',[],'No. Lo más frecuente (la moda) fue 2 goles; 3 goles solo pasó una vez.','¿Cuántas veces aparece el 3?')]},
 {t:'El taller deportivo',e:[
  E('¿Qué deportes tienen los mismos votos?',[{k:'chart',cats:C3,vals:V3,max:14,step:2}],'Básquet y Voleibol (7 votos cada uno).','¿Qué barras llegan a la misma altura?'),
  E('Usa la gráfica del ejercicio 1. ¿Cuántos votos más tiene Fútbol que Natación?',[],V3[0]+' − '+V3[2]+' = '+(V3[0]-V3[2]),'¿Cuántos votos tiene cada uno?'),
  (()=>{const t=sum(V3),need=t/3,win=C3.filter((c,i)=>V3[i]>=need);return E('Usa la gráfica del ejercicio 1. Se abrirá un taller del deporte que tenga <b>al menos</b> la tercera parte de los votos. ¿Cuál lo logra?',[],win.join(' y ')+'. Total '+t+' votos; la tercera parte es '+need+'.','¿Cuántos votos hay en total? ¿Cuánto es su tercera parte?')})()]},
 {t:'Libros de la biblioteca',e:[
  E('¿Cuántos libros se prestaron el martes? Fíjate en la escala.',[{k:'chart',cats:C4,vals:V4,max:12,step:2}],V4[1]+' libros (la escala va de 2 en 2).','¿De cuánto en cuánto aumentan las rayas?'),
  E('Usa la gráfica del ejercicio 1. ¿Cuántos libros se prestaron en total?',[],V4.join(' + ')+' = '+sum(V4),'¿Cuánto marca cada barra?'),
  E('Usa la gráfica del ejercicio 1. Lía dice: «La moda es 10 porque es el número más grande». Corrígela.',[],'La moda es el dato más frecuente: el día con más préstamos es '+modaDe(['lunes','martes','miércoles','jueves'],V4)[0]+'. El 10 es cuántas veces ocurrió, no la moda.','¿La moda es un día o una cantidad?')]},
 {t:'Autos en la calle',e:[
  E('Contaron autos por color. ¿Cuál es la moda?',[{k:'table',head:['Color','Rojo','Blanco','Gris','Negro'],rows:[['Autos','4','9','9','6']]}],'Blanco y gris (9 cada uno): hay dos modas.','¿Qué colores tienen más autos?'),
  E('¿Cuántos autos contaron en total?',[],'4 + 9 + 9 + 6 = 28','Suma la fila de autos.'),
  E('¿Es cierto que más de la mitad de los autos son blancos o grises?',[],((9+9)>28/2?'Sí':'No')+'. 9 + 9 = 18; la mitad de 28 es 14 y 18 &gt; 14.','¿Cuánto es la mitad del total?')]}
]});

/* AZAR */
TEMAS.push({eje:'dat',title:'Azar y frecuencias',rows:[
 {t:'La ruleta de colores',e:[
  E('La ruleta tiene partes iguales: R rojo, A azul, V verde. ¿Qué color ocupa más espacio?',[{k:'spin',parts:['R','R','A','V']}],'Rojo: 2 de 4 partes.','¿Cuántas partes tiene cada color?'),
  E('Giraron la ruleta 20 veces: rojo 11, azul 5 y verde 4. ¿Cuál es la frecuencia relativa de azul?',[{k:'table',head:['Color','R','A','V'],rows:[['Veces','11','5','4']]}],'5 de 20 = '+fs(F(5,20))+' = '+fs(F(1,4))+'.','¿Cuántas veces salió azul de cuántos giros?'),
  E('¿Cuál es una situación de azar? A) Que mañana salga el sol B) El color que saldrá en la ruleta C) Cuánto es 2 + 2',[],'B. Es la única cuyo resultado no se puede saber antes.','¿En cuál no sabes qué va a pasar?')]},
 {t:'Águila o sol',e:[
  E('¿Cuántos resultados posibles hay en esta ruleta?',[{k:'spin',parts:['1','2','3'],pat:{'1':'pDot','2':'pHatch'}}],'3 resultados: 1, 2 o 3.','¿Cuántas partes distintas tiene?'),
  E('Lanzaron una moneda 30 veces y cayó águila 14 veces. ¿Cuántas veces cayó sol? ¿Cuál es su frecuencia relativa?',[],'Sol: 30 − 14 = 16 veces; frecuencia relativa '+fs(F(16,30))+' = '+fs(F(8,15))+'.','¿Cuántos lanzamientos no fueron águila?'),
  E('Ganas si sale 3 en la ruleta. Juan dice que si gira 3 veces seguro gana. ¿Tiene razón?',[{k:'spin',parts:['1','2','3'],pat:{'1':'pDot','2':'pHatch'}}],'No. Es azar: puede no salir 3 en ninguno de los 3 giros.','¿Un giro sabe lo que salió en el anterior?')]},
 {t:'La bolsa de canicas',e:[
  E('En la bolsa hay canicas azules (con puntos) y blancas. ¿De qué color hay más?',[{k:'set',n:6,m:4,shape:'coin'}],'Azules: 4 de 6.','¿Cuántas tienen puntos?'),
  E('Sacaron una canica y la regresaron, 12 veces: azul 9 y blanca 3. ¿Cuál es la frecuencia relativa de blanca?',[],'3 de 12 = '+fs(F(3,12))+' = '+fs(F(1,4))+'.','¿Cuántas veces salió blanca de cuántas?'),
  E('¿Qué es más fácil sacar, azul o blanca? ¿Por qué?',[{k:'set',n:6,m:4,shape:'coin'}],'Azul, porque hay 4 azules y solo 2 blancas.','¿De qué color hay más canicas?')]},
 {t:'El error de Lupita',e:[
  E('¿Qué fracción de la ruleta es A?',[{k:'spin',parts:['A','A','A','A','A','B','B','B'],pat:{A:'pDot',B:'pHatch'}}],fs(F(5,8))+'.','¿Cuántas partes son A de cuántas?'),
  E('En 40 giros salió A 26 veces y B 14. ¿Cuál es la frecuencia relativa de A? Escríbela como fracción y como decimal.',[],fs(F(26,40))+' = '+fs(F(13,20))+' = '+N(26/40)+'.','¿Cuánto es 26 ÷ 40?'),
  E('Lupita dice: «Salió B en los últimos 3 giros, así que en el siguiente seguro sale A». ¿Tiene razón?',[],'No. A es más probable, pero no es seguro: cada giro es independiente del anterior.','¿La ruleta recuerda lo que salió antes?')]},
 {t:'Dos ruletas',e:[
  E('¿Cuántos resultados posibles hay en esta ruleta?',[{k:'spin',parts:['1','2','3','4','5','6'],pat:{'2':'pDot','4':'pDot','6':'pDot'}}],'6 resultados.','¿Cuántas partes distintas hay?'),
  E('Lanzaron un dado 60 veces y el 6 salió 9 veces. Escribe su frecuencia absoluta y su frecuencia relativa.',[],'Absoluta: 9. Relativa: '+fs(F(9,60))+' = '+fs(F(3,20))+'.','¿Cuántas veces salió y de cuántos lanzamientos?'),
  E('Ruleta A: 3 de 4 partes iguales son rojas. Ruleta B: 5 de 8 partes iguales son rojas. ¿Con cuál es más fácil sacar rojo?',[{k:'spin',parts:['R','R','R','V']},{k:'spin',parts:['R','R','R','R','R','V','V','V']}],'Con la A: '+fs(F(3,4))+' = '+fs(F(6,8))+', que es mayor que '+fs(F(5,8))+'.','¿Cuántos octavos son '+fs(F(3,4))+'?')]}
]});
