let clicks_btn2 = 0;     // счетчик нажатий
let clicks_btn3 = 0;

function btn_click(){
    console.log( ++clicks_btn2 + " нажатие на кнопку 2");
}

document.getElementById("btn3").onclick = btn3_click1; 
function btn3_click1(){
    clicks_btn3++;
    console.log(`${clicks_btn3} нажатие на кнопку 3`);
    document.getElementById("btn3").onclick = btn3_click2;
}

function btn3_click2(){
    clicks_btn3++;
    alert(`${clicks_btn3} нажатие на кнопку 3`);
    document.getElementById("btn3").onclick = btn3_click1;
}

const btn = document.getElementById("btn4");
// прикрепляем обработчик события "click"
btn.addEventListener("click", btn_click);
// добавлем еще один обработчик
btn.addEventListener("click", ()=>console.log("еще один обработчик"));
