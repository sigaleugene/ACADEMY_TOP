const button = document.getElementById("btn");
document.addEventListener("payment", (e)=>{
    console.log("Payment succeeded!");
    console.log("Payment Sum:", e.detail.paymentSum);   // получаем данные события
    console.log("Current balance:", e.detail.balance);
});
 
const myAcc = new Account(100);
// по нажатию на кнопку выполняем метод pay
button.addEventListener("click", ()=>myAcc.pay(50));
 
function Account(money) {
    _money = money;
    this.pay=function(sum){
        if(_money >= sum){
            _money -= sum;
            // определяем объект события
            const event = new CustomEvent("payment", {
                detail:{                //  передаем в CustomEvent данные о событии
                    paymentSum: sum, 
                    balance: _money
                }
            });
            document.dispatchEvent(event);      // генерируем событие для всего документа
        }
    }
}