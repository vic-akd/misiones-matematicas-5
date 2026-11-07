/* ========== MODELO: respuestas para contestar en pantalla ==========
 Clave 'tema.ficha.ejercicio' (orden de ALL). Cada ejercicio es una lista de campos:
  n(v,l,o)  número (acepta 1,234 · 1234 · 0.5 · .5 · fracción con el mismo valor). o.dec: exige forma decimal.
  f('a/b',l,o) fracción (acepta equivalentes y mixtos). o.exacta: exige ese numerador y denominador.
  dos('a/b') dos nombres distintos para la misma fracción.
  ent(a,b,l) número estrictamente entre a y b.
  sn(c,l)   Sí / No (c=0 Sí, c=1 No).   op([...],c,l) opción múltiple.
  ord([...],[índices en orden],l) ordenar opciones.
  tx(l,ok)  texto libre: si coincide con ok se califica solo; si no, el alumno se autoevalúa con el solucionario. */
const RESP=(()=>{
const n=(v,l,o)=>Object.assign({k:'n',v,l:l||'Respuesta'},o||{});
const f=(v,l,o)=>Object.assign({k:'f',v,l:l||'Fracción'},o||{});
const dos=v=>({k:'dos',v,l:'Dos nombres'});
const ent=(a,b,l)=>({k:'ent',a,b,l:l||'Un número'});
const sn=(c,l)=>({k:'op',ops:['Sí','No'],c,l:l||'¿Sí o no?'});
const op=(ops,c,l)=>({k:'op',ops,c,l:l||'Elige'});
const ord=(ops,c,l)=>({k:'ord',ops,c,l:l||'Ordena'});
const tx=(l,ok)=>({k:'tx',l,ok:ok||[]});
const seq=(vs,f2,lab)=>vs.map((v,i)=>(f2||n)(v,(lab||['1.º','2.º','3.º','4.º'])[i]));
const SF=vs=>seq(vs,(v,l)=>f(v,l));
const CAV=(c,a,v)=>[n(c,'Caras'),n(a,'Aristas'),n(v,'Vértices')];
const ABC=['A','B','C'],CR=['Norte','Sur','Este','Oeste'],CU=['Prisma rectangular','Pirámide cuadrangular','Prisma triangular'];
return {
'1.1.1':[n(405203718,'Con cifras'),tx('Con letra',['cuatrocientos cinco millones doscientos tres mil setecientos dieciocho'])],
'1.1.2':[n(2030040)],'1.1.3':[sn(1,'¿Tiene razón?')],
'1.2.1':[n(3600000)],'1.2.2':seq([98756432,98765432,123456789]),'1.2.3':[sn(1,'¿Se agotaron?'),n(450,'¿Cuántos faltan?')],
'1.3.1':[n(8000,'¿Cuánto vale?')],'1.3.2':[n(5005000)],'1.3.3':[sn(0,'¿Llegará?'),n(8,'¿En qué salto?')],
'1.4.1':[n(600300080,'Con cifras'),tx('Nombre',['seiscientos millones trescientos mil ochenta'])],'1.4.2':[tx('Sumandos',['40,000,000 + 7,000,000 + 20,000 + 5,000 + 600','40000000 + 7000000 + 20000 + 5000 + 600'])],'1.4.3':[n(3000400,'Lo correcto')],
'1.5.1':[n(1270000)],'1.5.2':seq([1000000,1000005],null,['Primero','Segundo']),'1.5.3':[sn(0,'¿Lo lograron?')],
'2.1.1':[n(0.37,'Con número',{dec:true}),tx('Con letra',['treinta y siete centesimos'])],'2.1.2':[n(0.45)],'2.1.3':[sn(1,'¿Tiene razón?')],
'2.2.1':[n(0.7)],'2.2.2':seq([0.3,0.305,0.35]),'2.2.3':[op(['Ana','Bety'],1,'¿Quién ganó?')],
'2.3.1':[n(0.007,'¿Cuánto vale?')],'2.3.2':[tx('Con letra',['tres enteros veinticinco diezmilesimos'])],'2.3.3':[sn(1,'¿Cumple?')],
'2.4.1':[n(2.6)],'2.4.2':[ent(0.25,0.26)],'2.4.3':[op(['1.09','1.1'],1,'¿Cuál es mayor?')],
'2.5.1':[n(0.08,'Decimal',{dec:true})],'2.5.2':seq([4.505,4.5,4.055,4.05]),'2.5.3':[op(['La A','La B'],0,'¿Cuál es más barata?')],
'3.1.1':[f('3/4')],'3.1.2':[n(3,'Numerador: ___/6')],'3.1.3':[sn(1,'¿Tiene razón?')],
'3.2.1':[f('2/6')],'3.2.2':[n(2,'Numerador: ___/6')],'3.2.3':[sn(0,'¿Llegaron a la meta?')],
'3.3.1':[f('6/8')],'3.3.2':[n(6,'Numerador: ___/8')],'3.3.3':[op(['A','B','Iguales'],1,'¿Cuál avanzó más?')],
'3.4.1':[f('2/5')],'3.4.2':SF(['3/10','1/2','4/5']),'3.4.3':[sn(1,'¿Tiene razón?')],
'3.5.1':[f('4/6')],'3.5.2':[f('3/4','Simplificada',{exacta:true})],'3.5.3':[op(ABC,1,'¿Cuál no muestra {1/4}?')],
'3.6.1':[f('9/12')],'3.6.2':[op(['&lt;','=','&gt;'],0,'{2/3} ___ {3/4}')],'3.6.3':[sn(1,'¿Le alcanza?')],
'3.7.1':[f('4/10')],'3.7.2':SF(['1/2','2/3','5/6']),'3.7.3':[op(['Rojo','Azul','Iguales'],0,'¿Cuál tiene más?')],
'3.8.1':[f('6/8')],'3.8.2':[n(2,'Numerador: ___/5')],'3.8.3':[sn(1,'¿Tiene razón?')],
'3.9.1':[dos('3/4')],'3.9.2':SF(['1/2','7/12','2/3']),'3.9.3':[sn(0,'¿Gana?')],
'3.10.1':[f('7/10')],'3.10.2':[op(['&lt;','=','&gt;'],2,'{5/6} ___ {3/4}')],'3.10.3':[sn(1,'¿Alcanza?')],
'4.1.1':[n(800,'Resultado')],'4.1.2':[n(4.25)],'4.1.3':[sn(0,'¿Te alcanza?'),n(8.75,'¿Cuánto sobra? $')],
'4.2.1':[n(1.3,'Resultado')],'4.2.2':[n(4100)],'4.2.3':[sn(1,'¿Queda al menos 1 m?')],
'4.3.1':[n(0.55,'Resultado')],'4.3.2':[n(7.75)],'4.3.3':[op(ABC,1,'¿Qué cuenta?'),n(62.6,'Cambio $')],
'4.4.1':[n(0.4,'Resultado')],'4.4.2':[n(3300)],'4.4.3':[n(6.85,'Resultado correcto')],
'4.5.1':[n(0.28)],'4.5.2':[n(5.525)],'4.5.3':[sn(1,'¿Puede?')],
'5.1.1':[f('4/8','En octavos',{exacta:true}),f('1/2','En medios',{exacta:true})],'5.1.2':[f('5/8','Resultado')],'5.1.3':[sn(0,'¿Cubren al menos {3/4}?')],
'5.2.1':[dos('1/2')],'5.2.2':[f('1/2','Resultado')],'5.2.3':[sn(1,'¿Alcanza?')],
'5.3.1':[f('5/8')],'5.3.2':[f('1/4','Resultado')],'5.3.3':[sn(1,'¿Es correcto?'),f('3/4','Resultado correcto')],
'5.4.1':[f('3/10')],'5.4.2':[f('7/10','Resultado')],'5.4.3':[sn(0,'¿Queda suficiente?')],
'5.5.1':[dos('2/3')],'5.5.2':[f('1/2','Resultado')],'5.5.3':[op(ABC,1,'¿Qué cuenta?'),f('5/8','Resultado')],
'5.6.1':[f('5/8','Sombreada'),f('3/8','Falta')],'5.6.2':[f('5/8','Resultado')],'5.6.3':[op(['Sofía','Ernesto'],0,'¿Quién caminó más?'),f('1/12','¿Cuánto más?')],
'5.7.1':[f('5/6','¿Dónde terminan?')],'5.7.2':[f('11/12','Resultado')],'5.7.3':[sn(1,'¿Alcanza?')],
'5.8.1':[f('5/12')],'5.8.2':[f('1/12','Resultado')],'5.8.3':[f('7/8','Resultado correcto')],
'5.9.1':[f('5/6')],'5.9.2':[f('5/12','Resultado')],'5.9.3':[sn(1,'¿Tiene razón?')],
'5.10.1':[f('7/10')],'5.10.2':[f('1/2','Resultado')],'5.10.3':[sn(0,'¿Te pasas?')],
'6.1.1':[n(24,'¿Cuántos cuadros?')],'6.1.2':[n(5)],'6.1.3':[sn(1,'¿Te alcanzan?')],
'6.2.1':[n(2.5,'Resultado')],'6.2.2':[n(3.5,'Metros')],'6.2.3':[sn(0,'¿Más de 3.5 L?')],
'6.3.1':[n(2.4,'Metros')],'6.3.2':[n(8.25)],'6.3.3':[sn(1,'¿Alcanza?')],
'6.4.1':[n(8,'En cada fila')],'6.4.2':[n(2.25)],'6.4.3':[n(2.4,'Resultado correcto')],
'6.5.1':[n(1,'Resultado')],'6.5.2':[n(10.3)],'6.5.3':[sn(1,'¿Alcanza?')],
'7.1.1':[f('5/10'),n(0.5,'Decimal',{dec:true})],'7.1.2':[f('3/4','Resultado')],'7.1.3':[op(['La primera','La segunda','Iguales'],2,'¿Cuál tiene más?')],
'7.2.1':[f('25/100'),n(0.25,'Decimal',{dec:true}),n(25,'Porcentaje %')],'7.2.2':[f('8/5','Resultado')],'7.2.3':[op(['El de 25%','El de {1/5}'],0,'¿Cuál es mayor?')],
'7.3.1':[n(0.8,'Decimal',{dec:true}),f('4/5')],'7.3.2':[n(0.75,'Decimal',{dec:true})],'7.3.3':[sn(1,'¿Tiene razón?'),n(0.2,'{1/5} como decimal',{dec:true})],
'7.4.1':[f('1/5'),n(20,'Porcentaje %')],'7.4.2':[n(9)],'7.4.3':[sn(1,'¿Ya alcanzan?'),n(20,'¿Cuánto falta? $')],
'7.5.1':[f('1/8'),n(0.125,'Decimal',{dec:true})],'7.5.2':[n(1.5,'Litros')],'7.5.3':[op(['A','B','C','D'],3,'¿Cuál no es igual?')],
'7.6.1':[f('1/10'),n(0.1,'Decimal',{dec:true}),n(10,'Porcentaje %')],'7.6.2':[f('9/8','Resultado')],'7.6.3':[sn(0,'¿Alcanza?')],
'7.7.1':[f('3/4'),n(0.75,'Decimal',{dec:true})],'7.7.2':[n(7)],'7.7.3':[op(['En la A','En la B'],0,'¿Dónde ahorras más?')],
'7.8.1':[f('3/8')],'7.8.2':[n(0.125,'Decimal',{dec:true})],'7.8.3':[op(['0.3','0.25'],0,'¿Cuál es mayor?')],
'7.9.1':[f('3/4'),n(0.75,'Decimal',{dec:true}),n(75,'Porcentaje %')],'7.9.2':[n(4,'Resultado')],'7.9.3':[sn(1,'¿Puede?')],
'7.10.1':[f('3/5'),n(0.6,'Decimal',{dec:true}),n(60,'Porcentaje %')],'7.10.2':[n(25)],'7.10.3':[op(['En la A','En la B'],0,'¿En cuál hay más?')],
'8.1.1':[n(8,'Una paleta $')],'8.1.2':[n(72,'4 paletas $'),n(108,'6 paletas $')],'8.1.3':[sn(1,'¿Alcanzan?')],
'8.2.1':[n(20,'Porcentaje %')],'8.2.2':[n(20)],'8.2.3':[op(['A','B'],0,'¿Quién tiene mejor puntería?')],
'8.3.1':[n(10,'Porcentaje %'),n(30,'Dinero $')],'8.3.2':[n(119,'7 cuadernos $')],'8.3.3':[op(['En la A','En la B'],0,'¿Dónde es más barata?')],
'8.4.1':[n(2,'Con puntos')],'8.4.2':[n(23)],'8.4.3':[n(30,'Resultado correcto')],
'8.5.1':[n(4,'Kilos')],'8.5.2':[n(350,'10 boletos $')],'8.5.3':[op(['La A','La B'],1,'¿Cuál sabe más?')],
'9.1.1':CAV(6,12,8),'9.1.2':CAV(5,8,5),'9.1.3':[op(['Prisma','Pirámide'],1,'¿Qué es?')],
'9.2.1':CAV(5,9,6),'9.2.2':[n(6,'Caras laterales'),n(7,'Caras en total')],'9.2.3':[op(ABC,0,'¿Cuál arma un cubo?')],
'9.3.1':[op(CU,0,'¿Qué cuerpo?')],'9.3.2':[n(7,'Caras')],'9.3.3':[op(['Prisma','Pirámide'],0,'¿Qué es?'),n(12,'Aristas')],
'9.4.1':[op(CU,1,'¿Qué cuerpo?')],'9.4.2':[n(6,'Aristas')],'9.4.3':[op(['Prisma','Pirámide'],0,'El cubo es un…')],
'9.5.1':CAV(4,6,4),'9.5.2':CAV(8,18,12),'9.5.3':[sn(1,'¿Te alcanzan?'),n(1,'¿Cuántos triángulos faltan?')],
'10.1.1':[n(6,'Diámetro cm')],'10.1.2':[n(5,'Radio cm')],'10.1.3':[sn(1,'¿Cabe?')],
'10.2.1':[n(4,'Radio cm')],'10.2.2':[n(9,'Diámetro cm')],'10.2.3':[op(['El borde','Toda la cara'],0,'La circunferencia es…'),op(['El círculo','La circunferencia'],0,'Al pintar la cara pintas…')],
'10.3.1':[op(ABC,0,'¿Qué punto?')],'10.3.2':[n(3.5,'Radio cm')],'10.3.3':[op(['Dentro','Fuera'],1,'La banca queda…')],
'10.4.1':[n(8,'Diámetro cm')],'10.4.2':[n(7.5,'Radio cm')],'10.4.3':[op(['El radio es el doble del diámetro','El diámetro es el doble del radio'],1,'Lo correcto es…')],
'10.5.1':[op(['AB','CD'],0,'¿Cuál es diámetro?')],'10.5.2':[n(7.8,'La fila mide cm')],'10.5.3':[sn(0,'¿Caben?')],
'11.1.1':[tx('Esquina',['roble y mar','mar y roble'])],'11.1.2':[n(4,'Cuadras')],'11.1.3':[sn(1,'¿Tiene razón?')],
'11.2.1':[tx('Lugar',['el parque','parque'])],'11.2.2':[n(3,'Cuadras')],'11.2.3':[op(['A','B'],0,'¿Cuál es más corta?')],
'11.3.1':[tx('Lugar',['el mercado','mercado'])],'11.3.2':[tx('Camino',['2 al norte y 1 al oeste','2 norte 1 oeste','2n 1o'])],'11.3.3':[sn(0,'¿Es cierto?')],
'11.4.1':[op(CR,3,'Vas hacia el…')],'11.4.2':[n(4,'Cuadras')],'11.4.3':[op(CR,2,'El Mercado está al…')],
'11.5.1':[tx('Calles',['pino y av sol','pino y avenida sol','av sol y pino','avenida sol y pino','pino y sol','sol y pino'])],'11.5.2':[n(4,'Cuadras')],'11.5.3':[sn(1,'¿Llegas a tiempo?')],
'12.1.1':[n(7.5,'cm'),n(75,'mm')],'12.1.2':[n(3500,'Metros')],'12.1.3':[sn(1,'¿Se pasan?')],
'12.2.1':[n(750,'ml'),n(0.75,'L')],'12.2.2':[n(2.5,'Kilogramos')],'12.2.3':[sn(1,'¿Alcanza?')],
'12.3.1':[n(1500,'ml')],'12.3.2':[n(4250,'Metros')],'12.3.3':[sn(1,'¿Puede pasar?')],
'12.4.1':[n(12.3,'cm'),n(123,'mm')],'12.4.2':[ord(['1.2 km','950 m','1,050 m'],[1,2,0],'De menor a mayor')],'12.4.3':[sn(1,'¿Tiene razón?')],
'12.5.1':[n(1.25,'Litros')],'12.5.2':[n(750,'Kilogramos')],'12.5.3':[sn(0,'¿La cumple?')],
'13.1.1':[n(16,'Perímetro cm'),n(15,'Área cm²')],'13.1.2':[n(36,'Área m²')],'13.1.3':[op(['A','B','Iguales'],1,'¿Más área?'),op(['A','B','Iguales'],2,'¿Más perímetro?')],
'13.2.1':[n(12,'Área cm²')],'13.2.2':[n(27,'Perímetro cm')],'13.2.3':[sn(0,'¿Alcanza?')],
'13.3.1':[n(15,'Área cm²')],'13.3.2':[n(27,'Área cm²')],'13.3.3':[sn(1,'¿Basta?')],
'13.4.1':[n(14,'Área cm²'),n(18,'Perímetro cm')],'13.4.2':[n(24.5,'Área m²')],'13.4.3':[n(20,'Área correcta cm²')],
'13.5.1':[sn(1,'¿Miden lo mismo?')],'13.5.2':[n(27,'Perímetro m')],'13.5.3':[sn(1,'¿Alcanzan?'),n(15,'Cajas necesarias')],
'14.1.1':[tx('Moda',['mango'])],'14.1.2':[n(22,'Alumnos')],'14.1.3':[sn(0,'¿Tiene razón?')],
'14.2.1':[n(2,'Goles')],'14.2.2':[n(1,'Con 1 gol'),n(3,'Con 2 goles'),n(1,'Con 3 goles'),n(1,'Con 4 goles')],'14.2.3':[sn(1,'¿Tiene razón?')],
'14.3.1':[tx('Deportes',['basquet y voleibol','voleibol y basquet','basquetbol y voleibol','voleibol y basquetbol'])],'14.3.2':[n(8,'Votos más')],'14.3.3':[tx('Deporte',['futbol'])],
'14.4.1':[n(10,'Libros')],'14.4.2':[n(28,'Libros')],'14.4.3':[tx('La moda es',['martes','el martes'])],
'14.5.1':[tx('Moda',['blanco y gris','gris y blanco'])],'14.5.2':[n(28,'Autos')],'14.5.3':[sn(0,'¿Es cierto?')],
'15.1.1':[op(['Rojo','Azul','Verde'],0,'¿Qué color?')],'15.1.2':[f('1/4','Frecuencia relativa')],'15.1.3':[op(ABC,1,'¿Cuál es de azar?')],
'15.2.1':[n(3,'Resultados')],'15.2.2':[n(16,'Veces sol'),f('8/15','Frecuencia relativa')],'15.2.3':[sn(1,'¿Tiene razón?')],
'15.3.1':[op(['Azules','Blancas'],0,'¿De cuál hay más?')],'15.3.2':[f('1/4','Frecuencia relativa')],'15.3.3':[op(['Azul','Blanca'],0,'¿Cuál es más fácil?')],
'15.4.1':[f('5/8')],'15.4.2':[f('13/20','Fracción'),n(0.65,'Decimal',{dec:true})],'15.4.3':[sn(1,'¿Tiene razón?')],
'15.5.1':[n(6,'Resultados')],'15.5.2':[n(9,'Absoluta'),f('3/20','Relativa')],'15.5.3':[op(['La A','La B'],0,'¿Con cuál?')]
};
})();
