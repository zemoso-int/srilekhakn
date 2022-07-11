//Single line code
const printName = (name)=>{return 'Hi '+name}

//Template litrales
const printBill = (name, bill) => {
    return `Hi ${name} , please pay: ${bill}`;
}

const person = {
     name: 'Noam Chomsky',
     age: 92
}

//Object Destruction
const {name, age} = person;

console.log(name);
console.log(age);

console.log(printName(name));
console.log(printBill(name,100));