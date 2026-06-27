let savecount = localStorage.getItem("showclicks") || 0;
savecount = Number(savecount);
document.getElementById("showclicks").innerText = savecount;

function theme() {
        document.body.classList.toggle("dark-theme") /* Nova propriedade (toggle) para troca de classes/temas */
}

function counter() {
    savecount++; /* Incrementa +1 na contagem */
    document.getElementById("showclicks").innerText = savecount; 
    localStorage.setItem("showclicks", savecount); /* Salva o novo número adicionado */
}

function reset(){
    savecount = -1;
}

document.getElementById("btn").addEventListener("click", counter); /* Adicionar contagem */

document.getElementById("btn").addEventListener("keypress", reset) /* Resetar a contagem */

document.getElementById("stheme").addEventListener("click", theme);