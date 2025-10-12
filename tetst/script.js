class User {
    static UserCount = 0;
    static UserArray=[];
    static GetUserCount(){
        console.log(`колличество пользователей ${User.UserCount}`);
    }
    static GetAllUsers(){
        document.write("<ul>");
        for (const u of User.UserArray){
           console.log(`${u.userName} зарегистрирован ${u.registrationDate}`);
           document.writeln(`<li>${u.userName} зарегистрирован ${u.registrationDate}</li>`);
        }
        document.write("</ul>");
    }
    userName;
    registrationDate;
    constructor(userName){
        this.userName=userName;
        this.registrationDate = new Date();
        User.UserCount++;
        User.UserArray.push(this);
        
    }
    
}

user1 = new User("Иван");
user2 = new User("Александр");
User.GetUserCount();
User.GetAllUsers();
