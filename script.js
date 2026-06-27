let savecount = localStorage.getItem("showclicks") || 0;
savecount = Number(savecount);
document.getElementById("showclicks").innerText = savecount;

function theme() {
        document.body.classList.toggle("dark-theme")
}

function counter() {
    savecount++;
    document.getElementById("showclicks").innerText = savecount;
    localStorage.setItem("showclicks", savecount);
}

function reset(){
    savecount = -1;
}

document.getElementById("btn").addEventListener("click", counter);

document.getElementById("btn").addEventListener("keypress", reset)

document.getElementById("stheme").addEventListener("click", theme);