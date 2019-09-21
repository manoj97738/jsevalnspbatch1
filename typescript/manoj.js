"use strict";
exports.__esModule = true;
var myclas = /** @class */ (function () {
    function myclas() {
    }
    myclas.prototype.getName = function (params) {
    };
    return myclas;
}());
var Myinteface = /** @class */ (function () {
    function Myinteface() {
    }
    return Myinteface;
}());
/**
 * sdaskhduhg
 */
var Student = /** @class */ (function () {
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
