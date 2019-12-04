const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__); //acessa o prototipo desse obj
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === ferrari.__proto__);
console.log(Object.prototype.__proto__);