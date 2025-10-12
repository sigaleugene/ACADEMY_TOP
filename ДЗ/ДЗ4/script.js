class Marker{
    constructor(color, ink){
        this.color =color;
        this.ink = ink;
    }
    print(text){
        const header = document.createElement("p");     // создаем заголовок <h1>
        header.setAttribute("style", `color:${this.color}; opacity:${this.ink/10}`);
        const headerText = document.createTextNode(text);  // создаем текстовый узел
        header.appendChild(headerText); // добавляем в элемент h1 текстовый узел
        document.body.appendChild(header);  //  добавляем элемент h1 на страницу в элемент body 
        this.ink--;
    }
}

/*const myMarker = new Marker('red', 10);
for(i=0; i<10;i++)
    myMarker.print('Hellow World');*/

class ExtDate extends  Date {
    getStringDay(){
        switch(this.getDate()){
            case 1: return "Первое";
            case 2: return "Второе";
            case 3: return "Третье";
            case 4: return "Четвертое";
            case 5: return "Пятое";
            case 6: return "Шестое";
            case 7: return "Седьмое";
            case 8: return "Восьмое";
            case 9: return "Девятое";
            case 10: return "Десятое";
            case 11: return "Одинадцатое";
            case 12: return "Двенадцатое";
            case 13: return "Тоинадцатое";
            case 14: return "Четырнадцатое";
            case 15: return "Пятнадцатое";
            case 16: return "Шетнадцатое";
            case 17: return "Семнадцатое";
            case 18: return "Восемнадцатое";
            case 19: return "Девятнадцатое";
            case 20: return "Двадцатое";
            case 21: return "Дадцать первое";
            case 22: return "Двадцать второе";
            case 23: return "Двадцать третье";
            case 24: return "Двадцать четвертое";
            case 25: return "Двадцать пятое";
            case 26: return "Двадцать шестое";
            case 27: return "Двадцать седьмое";
            case 28: return "Двадцать восьмое";
            case 29: return "Двадцать девятое";
            case 30: return "Тридцатое";
            case 31: return "Тридцать первое";
        }        
    }
    getStringMonth(){
        switch(this.getMonth()){
            case  1: return "января";
            case  2: return "февраля";
            case  3: return "марта";
            case  4: return "апреля";
            case  5: return "мая";
            case  6: return "июня";
            case  7: return "июля";
            case  8: return "августа";
            case  9: return "сентября";
            case 10: return "октября";
            case 11: return "ноября";
            case 12: return "декабря";
        }
    }
    getStringDate(){
        return `${this.getStringDay()} ${this.getStringMonth()}`;
    }
    getTypeDate(){
        curentDate = new Date();
        if(this.getFullYear()!==curentDate.getFullYear()){
            return this.getFullYear()>curentDate.getFullYear()
        }
        if(this.getMonth()!==curentDate.getMonth()){
           return this.getMonth()>curentDate.getMonth();
        }
        if(this.getDate()!==curentDate.getDate()){
           return this.getDate()>curentDate.getDate();
        }
        return true
    }
    isLeapYear(){
     
        if ((this.getFullYear()%4==0 && this.getFullYear()%100!=0) || this.getFullYear()%400==0)
            return true;
        return false;
    }
    getMaxDateInMonth(){
        if(this.getMonth()===1)
            return this.isLeapYear()? 29:28;
        return 30 + ((this.getMonth()<8)? (this.getMonth()+1)%2 : this.getMonth()%2 );
    }
    getNextDate(){
   
       
        if(this.getDate()===31 && this.getMonth()===11)
            return `01.01.${this.getFullYear()+1}`;
        if(this.getDate()==this.getMaxDateInMonth())
            return `1.${this.getMonth()+2}.${this.getFullYear()}`
        return `${this.getDate()+1}.${this.getMonth()+1}.${this.getFullYear()}`
    }

}

/* const mydate = new ExtDate("5/20/2001");
alert(mydate.getNextDate()); */

class Employee{
    static EmpList=[];
    constructor(name, department){
        this.name =name;
        this.department=department;
        Employee.EmpList.push(this);
    }
}

class EmpTable{
    constructor(EmpList){
        this.EmpList = EmpList;
    }
    getHtml(){
        var table = document.createElement('table');
       // table.setAttribute("style", 'border: 1px solid grey;');
        for(var emp of this.EmpList){
           
             var row = document.createElement('tr'); 
         //    row.setAttribute("style", 'border: 1px solid grey;');
            for(var pr in emp){
                var cell = document.createElement('td');
                var text = document.createTextNode(emp[pr]);
                cell.appendChild(text);
             //   cell.setAttribute("style", 'border: 1px solid red;');
                row.appendChild(cell);
            }
            table.appendChild(row); 
            
        }
        let div = document.createElement('div');
        div.append(table);
        return div.getHTML();
    }
    drowTable(){
        document.body.innerHTML = this.getHtml();
    }
}
 new Employee("Tom","Dep №1")
 new Employee("Bob","Dep №2")
 new Employee("Ann","Dep №3")

 class StyledEmpTable extends EmpTable{

    getStyles(){
        var text = this.getHtml();
        let div = document.createElement('div');
        div.innerHTML = text;
        var tab = div.getElementsByTagName("td");
        for(let cell of tab){
            cell.setAttribute("style", 'border: 1px solid red;');
        }
        console.log(div.getHTML());
        document.body.innerHTML=div.getHTML();
       // alert(tab[0].style.border);
    }
}

myTable = new StyledEmpTable(Employee.EmpList);
myTable.getHtml();
//myTable.drowTable();
myTable.getStyles();


