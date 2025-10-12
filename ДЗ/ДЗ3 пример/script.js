class myDate{
    //приватные поля
    #nameDaysOfWeek = ['понедельник','вторник','седа','четверг','пятница','суббота','воскресенье'];
    #nameMoth = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'] 
    
    constructor(day, month, year){
        this.day = day;
        this.month = month;
        this.year= year;
    }
    //проверяем является ли год високосным
    IsLeapYear(year){
        return ((year%4===0 && year%100!==0)||year%400===0);
    }
    //получаем кол-во 
    GetCountDayOfMonth(month, year){
        if (month==2){
            return (this.IsLeapYear(year))? 29:28;
        }
        return month<8?  (30 + month%2):  (30 + (month+1)%2)
    }
    //получаем колличество дней до текущей даты в году включая текущую
    GetCountYearDayBefo(){
        if(this.month==1){
            return this.day
        }
        var result = this.day;
        for(let i=1; i<this.month; i++){
            result+=this.GetCountDayOfMonth(i, this.year);
        }
        return  result;
    }
    //получение клиичества дней до конца года без текущей даты
    GetCountYearDayAfte(){
        if(this.month==12){
            return 31-this.day;
        }
        var result = this.GetCountDayOfMonth(this.month, this.year)-this.day;
        for(let i = this.month+1; i<=12; i++){
            result+=this.GetCountDayOfMonth(i, this.year);
        }
        return result;
    }
    //получение кол-во дней года
    GetYearDayCount(year){
        return this.IsLeapYear(year)? 366 : 365;
    }
    //Спавнеие дат -1 otheDay меньше 0 равны 1 больше
    MatchDate(otheDate){
        if(otheDate.year<this.year)
            return -1;
        if(otheDate.year>this.year)
            return 1;
        if(otheDate.month<this.month)
            return -1;
        if(otheDate.month>this.month)
            return 1;
        if(otheDate.day<this.day)
            return -1;
        if(otheDate.day>this.day)
            return 1;
        return 0;
    }
    //Получение колличества дней между дтатами
    GetCountDayBetwin(otheDay){
        if( this.MatchDate(otheDay)==0) 
            return 0;
        var startDate = this.MatchDate(otheDay)<0? otheDay: this;
        var endDate = this.MatchDate(otheDay)>0? otheDay: this;
        var  result = startDate.GetCountYearDayAfte()+endDate.GetCountYearDayBefo();
        for(let i = startDate.year+1; i<endDate.year; i++){
            result += this.GetYearDayCount(i);
        }
        return result;
    }
    //получение дня недели
    GetWeekDay(){
        return this.#nameDaysOfWeek[(this.GetCountDayBetwin(new myDate(3,1,2000)))%7]
    }
    //дата в строке
    GetStringDate(){
        return `${this.GetWeekDay()} ${this.day} ${this.#nameMoth[this.month-1]} ${this.year}`;
    }

}

const curentDay = new myDate(5,12,2024);
const otheDate = new myDate(26,8,1996);
alert(`${otheDate.GetStringDate()} - ${curentDay.GetStringDate()} разница = ${curentDay.GetCountDayBetwin(otheDate)}` );
