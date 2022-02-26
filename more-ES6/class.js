class Support{
    name;
    address;
    designation = 'Support web developer';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name,', start a support session');
    }
}
const aamir = new Support('Aamir Khan','BD');
const salman = new Support('Salman Khan','India');
const allu = new Support('Aallu Arjun','Chennai');
console.log(aamir, salman, allu);
aamir.startSession();
salman.startSession();
allu.startSession();