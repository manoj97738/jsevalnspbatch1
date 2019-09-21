"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myclas = (function () {
    function myclas() {
    }
    myclas.prototype.getName = function (params) {
    };
    return myclas;
}());
var Myinteface = (function () {
    function Myinteface() {
    }
    return Myinteface;
}());
var Student = (function () {
    function Student(a, b) {
        this.fruitLiost = [];
        this.fruitLiost.push({ name: "manoj", age: 50 });
    }
    Student.prototype.abc = function (a) {
        return 'sasdas';
    };
    return Student;
}());
exports.Student = Student;
var satish = new Student('satish');
console.log(satish.fruitLiost);
