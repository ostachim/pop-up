const btn = document.querySelector("section button");
const btnHide = document.querySelector(".button-hide");

function buttonClickPopup(){
    const active = document.querySelectorAll(".pop-off");
    for(i=0; i < active.length;i++){
        active[i].classList.toggle("active")
    }
    
}

btn.addEventListener("click",buttonClickPopup)
btnHide.addEventListener("click",buttonClickPopup);