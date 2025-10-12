
class TrafficLight {

  constructor(obj) {
    this.ligths = [];
    this.onLight = 0;
    this.TrafficLight = obj;
    this.changeEvent = new CustomEvent(`chengeTrafficLight${this.TrafficLight.id}`);
    
    for (const element of this.TrafficLight.children) {
      this.ligths.push(element.id);
      element.addEventListener(
        `chengeTrafficLight${this.TrafficLight.id}`,
        ()=> this.onOffLigth(event)
      );
    }
  }
  //переключение светофора
  changeLight() {
    this.onLight++;
    for (const element of this.TrafficLight.children) {
      element.dispatchEvent(this.changeEvent);
    }
  }
  //включение/выключение сигнала
  onOffLigth(event) {
    if (event.target.id ==this.ligths[this.onLight % this.ligths.length]) {
      event.target.classList.remove("lightOff");
    } else {
      event.target.classList.add("lightOff");
    }
  }
}

 TF1 = new TrafficLight(document.getElementById("TF"));
 document.getElementById("btn").onclick = () => {
   TF1.changeLight();
 };



 // document.getElementById("btn1").onclick = () => {
//   TF2.changeLight();
// };

// class WrapTrafficLight{
//     constructor(){
//         for(const wrap of document.getElementsByClassName('wrap')){
//             let TF = new TrafficLight(wrap.children.TF)
//             wrap.children.btn.onclick= () => {
//                 TF.changeLight();
//             }
//         }
        
//     }
// }

// a = new WrapTrafficLight();
