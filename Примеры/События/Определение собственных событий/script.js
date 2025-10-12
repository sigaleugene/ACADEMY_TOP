const button = document.getElementById("btn");
const myAcc = new Account(100); // условный денежный счет
// устанавливаем обработчик события payment для всего документа
document.addEventListener("payment", () => console.log("Payment succeeded!"));

// по нажатию на кнопку выполняем метод pay
button.addEventListener("click", () => myAcc.pay(50));
// конструктор объекта счета
function Account(money) {
  _money = money;
  this.pay = function (sum) {
    if (_money >= sum) {
      _money -= sum;
      console.log(_money);

      const event = new Event("payment"); // определяем объект события
      document.dispatchEvent(event); // генерируем событие для всего документа
    }
  };
}
