class TeamMember {
    name;
    address;
    designation = 'Support web developer';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
class Support extends TeamMember {
    supportTime;
    constructor(name, address, time) {
        super(name, address);
        this.supportTime = time;
    }
    startSession() {
        console.log(this.name, ', start a support session');
    }
}
const aamir = new Support('Aamir Khan', 'BD', 11);
const salman = new Support('Salman Khan', 'India', 4);
const allu = new Support('Aallu Arjun', 'Chennai', 9);
// console.log(aamir, salman, allu);
// aamir.startSession();
// salman.startSession();
// allu.startSession();

class StudentCare extends TeamMember {

    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}

class NeptuneDev extends TeamMember {
    codeEditor;
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
// console.log(alia);
// alia.buildARoutine('ananna');
const ash = new NeptuneDev('Ash', 'Mumbai', 'Android Studio');
console.log(ash);
ash.releaseApp('1.4.5');
