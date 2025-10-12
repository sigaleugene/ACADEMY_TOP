function btn_click(obj){
    console.log( obj.textContent +" / "+ new Date());  // выводим этот текст
}

function argPrint(e){
    alert(e.target.id);
    for(i in e){
        console.log(`${i} : ${e[i]}`)
    }
}