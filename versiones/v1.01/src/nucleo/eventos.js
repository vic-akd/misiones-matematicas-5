/* ========== EVENTOS ========== */
const pages=document.querySelector("#pages"),pick=document.querySelector("#pick"),toggle=document.querySelector("#toggle");
let k0=0;pick.innerHTML=ALL.map((tm,ti)=>'<optgroup label="'+(ti+1)+'. '+tm.title+'">'+tm.rows.map((r,i)=>'<option value="'+(k0++)+'">'+(i+1)+'. '+r.t+'</option>').join("")+'</optgroup>').join("");
document.querySelector("#count").textContent=ALL.length+" temas · "+markup.length+" fichas · "+markup.length*3+" ejercicios";
function setKey(show){pages.classList.toggle("hide-key",!show);toggle.textContent=show?"Ocultar respuestas":"Mostrar respuestas";toggle.setAttribute("aria-pressed",String(show))}
function show(){
 pages.innerHTML=markup[Number(pick.value)];
 setKey(false);
 document.querySelector("#prev").disabled=pick.selectedIndex===0;
 document.querySelector("#next").disabled=pick.selectedIndex===markup.length-1;
}
pick.onchange=show;
document.querySelector("#prev").onclick=()=>{pick.selectedIndex--;show()};
document.querySelector("#next").onclick=()=>{pick.selectedIndex++;show()};
toggle.onclick=()=>setKey(pages.classList.contains("hide-key"));
let printing=false;
const printSet=list=>{printing=true;pages.innerHTML=list.join("");Adaptador.pdf.imprimir()};
document.querySelector("#one").onclick=()=>Adaptador.pdf.imprimir();
document.querySelector("#tema").onclick=()=>{const ti=IDX[Number(pick.value)][0];printSet(markup.filter((m,k)=>IDX[k][0]===ti))};
document.querySelector("#all").onclick=()=>printSet(markup);
/* afterprint restaura la ficha también en navegadores donde print() no bloquea */
window.addEventListener("afterprint",()=>{if(printing){printing=false;const k=!pages.classList.contains("hide-key");pages.innerHTML=markup[Number(pick.value)];setKey(k)}});

/* Funciones no disponibles: aria-disabled, acción bloqueada y aviso anunciado */
const aviso=document.querySelector("#aviso");
function conFuncion(id,fn,boton){
 const ok=FUNCIONES[id][PLATAFORMA];
 if(!ok){boton.setAttribute("aria-disabled","true");boton.setAttribute("aria-describedby","aviso");boton.classList.add("va-off")}
 boton.addEventListener("click",()=>{if(ok){fn();return}aviso.textContent="Esta función no está disponible en la versión "+({html:"HTML",portable:"portable",instalable:"instalable",android:"Android"})[PLATAFORMA]+"."+(FUNCIONES[id].html?" Disponible en la versión HTML.":"")});
}
conFuncion("descargarArchivo",()=>Adaptador.archivos.descargarHTML(),document.querySelector("#descargar"));
/* Donar y Acerca de */
const dlgDonar=document.querySelector("#dlgDonar"),dlgAcerca=document.querySelector("#dlgAcerca");
[["#btnDonar",dlgDonar],["#pieDonar",dlgDonar],["#btnAcerca",dlgAcerca],["#pieAcerca",dlgAcerca]].forEach(([s,d])=>document.querySelector(s).addEventListener("click",()=>d.showModal()));
document.querySelectorAll("[data-donar]").forEach(b=>b.addEventListener("click",()=>Adaptador.enlaces.abrirDonar(CONFIG.DONAR[b.dataset.donar])));

/* ========== ARRANQUE ========== */
show();
