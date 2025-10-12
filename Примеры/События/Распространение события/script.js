const redRect = document.getElementById("redRect");
redRect.addEventListener("click", () => {console.log("Событие на redRect")});

const blueRect = document.getElementById("blueRect");
blueRect.addEventListener("click", () => console.log("Событие на blueRect"));

//document.body.addEventListener("click", () => console.log("Событие на body"));

//=================================================================================

const greenRect = document.getElementById("greenRect");
greenRect.addEventListener("click", function(){
    console.log("Событие на greenRect");
}, true);
 
const yellowRect = document.getElementById("yellowRect");
yellowRect.addEventListener("click", function(){
    console.log("Событие на yellowRect");
}, true);
 
/* document.body.addEventListener("click", function(){
    console.log("Событие на body");
}, true); */

const event = new Event(имя_события, config);   //  определяем объект события
element.dispatchEvent(event);   //   вызываем событие для элемента element