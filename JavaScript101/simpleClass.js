class Student {
    constructor (firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    getBirthYear(){
        return `His year of birth is ${this.dob.getFullYear()}`
    }
}

const student1 = new Student('Ralu', 'Ugochukwu', '1-07-2003' )
console.log(student1);
// console.log(Ralu.getFullYear());
const Chidu = new Student("Chidu", 'Ugochukwu', '6-10-1997' )
console.log(Chidu);




