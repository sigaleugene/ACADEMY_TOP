// объект javascript
const user = {
    name: "Tom",
    married: false,
    age: 39,
    date: new Date("12/25/2024")
};
// объект json
const serializedUser = JSON.stringify(user);
console.log(serializedUser); // {"name":"Tom","married":false,"age":39}

const tomUser = JSON.parse(serializedUser);
console.log(tomUser.name); // Tom