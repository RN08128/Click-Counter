let savecount = localStorage.getItem("showclicks") || 0;
savecount = Number(savecount);
let show = document.getElementById("showclicks").innerText = savecount;
let btntheme = document.getElementById("stheme")

function theme() {
    if (btntheme.innerText == "Dark Mode") {
        btntheme.innerText = "Light Mode"
        document.body.style.backgroundColor = "black";
        document.getElementById("showclicks").style.color = "white"
    } else {
        btntheme.innerText = "Dark Mode"
        document.body.style.backgroundColor = "white";
        document.getElementById("showclicks").style.color = "black"
    }
}

function counter() {
    savecount++;
    document.getElementById("showclicks").innerText = savecount;
    localStorage.setItem("showclicks", savecount);
}

document.getElementById("btn").addEventListener("click", counter);

document.getElementById("stheme").addEventListener("click", theme);