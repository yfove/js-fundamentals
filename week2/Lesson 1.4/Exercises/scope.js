let dog = "Aspen";

const sayHi = () => {
    dog = "Rocky"
    console.log(dog);
}

console.log(dog); // aspen

sayHi(); //rocky

console.log(dog); //this is where it changes back to rocky

// for (let i = 0; i < 10; i++) {
// block scoped let i
// }
// console.log(i); //output will be undefined

for (var i = 0; i < 10; i++) {

}

console.log(i); //output 10