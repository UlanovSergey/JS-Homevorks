
'use strict';
//                            Повторение урока
// function Post(author, text) {
//     this.author = author;
//     this.text = text;
//     this.show = function () {
//         alert(this.author + ' say ' + this.text);
//     };
// }
//
// const post1 = new Post('sergey', 'привет');
// console.log(post1);
// console.log(post1.show());
//
// let transport = {
//     color: 'grey',
// }
//
// function Car(model, color) {
//     this.model = model;
//     this.color = color;
// }
// Car.prototype = transport;
// const car1 = new Car('Ford', 'Blue');
// const car2 = new Car('Toyota', 'white');
// function UserRole() {
//     this.rights = ['create', 'edit'];
// }
//
// function UserModer() {
//     UserRole.call(this);
//     this.rights.push('delete');
// }
//
// function UserAdmin() {
//     UserModer.call(this);
//     this.rights.push('ban');
// }
//
// const user = new UserRole();
// const  moder = new UserModer();
// const admin = new UserAdmin();
//
// console.log(user);
// console.log(moder);
// console.log(admin);

//                                                                                  Повторение урока
// function Person(name, age, gender) {
// // //     this.name = name;
// // //     this.age = age;
// // //     this.gender = gender;
// // // }
// // // Person.prototype.incrementAge = function () {
// // //     this.age += 1;
// // // };
// // // function Personal(name, age, gender, location, hobby) {
// // //     Person.call(this, name, age, gender);
// // //     this.location = location;
// // //     this.hobby = hobby;
// // // }
// // // Personal.prototype = Object.create(Person.prototype);
// // // Personal.prototype.constructor = Personal;
// // //
// // //
// // // pers.incrementAge();
// // // const person2 = new Personal('Alex', 36, 'male', 'ufa', 'programming');
//
// console.log(person2.incrementAge());
//                                                                                    Повторение урока
// class Person {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//
//     incrementAge() {
//         this.age += 1;
//     }
// }
//
// class Personal extends Person {
//     constructor(name, age, gender, location,hobby) {
//         super(name, age, gender);
//         this.location = location;
//         this.hobby = hobby;
//     }
//     sayName(){
//         console.log(this.name);
//     }
// }
//                                                                                   Повторение урока
// const pers = new Person('Serg', 36, 'male');
// pers.incrementAge();
// console.log(pers);
// const pers2 = new Personal('Alex', 36, 'male', 'ufa', 'programming');
// pers2.sayName();
// console.log(pers2)

//                          Попытка создания функции дз, но объект приходится создовать вручную - неподходит
// class Numbers {
//     constructor(number) {
//         this.unit = number % 10;
//         this.tens =Math.floor(number / 10) % 10;
//         this.hundreds = Math.floor(number/100)
//     }
//     set integer(number) {
//         if (!Number.isInteger(number) || number < 0 || number > 999) {
//             return {}
//         }
//     }
// }
// const number1 = new Numbers(545);
// console.log(number1);

function getObjectFromNumber(number) {
    if (!Number.isInteger(number) || number < 0 || number > 999) {
            return {}
         }
    let obj = {
        hundreds: Math.floor(number/100),
        tens: Math.floor(number / 10) % 10,
        unit: number % 10
    };
    return obj
}
console.log(getObjectFromNumber(847));
console.log(getObjectFromNumber(25));
console.log(getObjectFromNumber(2.48));









