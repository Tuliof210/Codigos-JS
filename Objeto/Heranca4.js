//new obj e declaração literal de obj tem como __proto__ apontando para Object.prototype
//obj criado por function tem __proto__ apontando para a function.prototype

function MyObj() {}

const ob1 = new MyObj;
const ob2 = new MyObj;

console.log(ob1.__proto__ === Object.prototype);
console.log(ob1.__proto__ === MyObj.prototype);

MyObj.prototype.nome = 'Julia'
MyObj.prototype.falar = function() {
    console.log(`Buenos dias, yo soy ${this.nome}`)
}

ob1.nome = 'Tulio';

ob1.falar();
ob2.falar();

console.log('----------------------------------------')
console.log((new MyObj).__proto__ === MyObj.prototype)
console.log(MyObj.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)