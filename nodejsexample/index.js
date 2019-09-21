//global variable methots and functions 

console.log(__filename);
console.log(__dirname);
console.log(process);
console.log(global.process.env);
console.log(global.process.argv);
const _shadi = require('./shadilalgharthode');
console.log(_shadi.shadiThode());
const os = require('os');
console.log(os.arch())
console.log(os.cpus());

//ecma 6
export class Student {
    constructor(a, b) {

    }
    abc() {

    }
}

class User extends Student {
    constructor(a, b) {
        super(a, b);
    }
    getMan() {
        this.name;
        super.abc();
    }
    name = "sadkasn"
}

// let vs var

let u21 = new User(10, 20);
u21.getMan();

