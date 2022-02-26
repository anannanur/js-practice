const student ={
    name: 'Sakib-al-hasan',
    job: 'cricketer'
}

const person = new Object();
// console.log(person);

class Support{
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name,'start a support session');
    }
}

const aamir = new Support('Aamir Khan', 'BD');
const salman = new Support('Solaiman Khan', 'Dubai');
const sharukh = new Support('sharukh Khan', 'Dubai');
// const salman = new Support('Solaiman Khan', 'Dubai');
console.log(aamir,salman,sharukh);
// console.log(salman);

aamir.startSession();
salman.startSession();