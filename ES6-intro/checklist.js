

const name = 'Ananna';
const age = 24;

// console.log(`This is ${name}. Her age is ${age}`);

const bottle = {
    color: 'yellow',
    price: 150
}
// console.log(`This is my ${bottle.color} bottle,
// its price is ${bottle.price}`);

const dividingNumber = number => number % 5;
// console.log(dividingNumber(10));

const calculateNumber = (num1, num2) => (num1 + 2) * (num2 + 2);

// console.log(calculateNumber(2, 1));

const multiplyNumber = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiplyNumber(1, 2, 3));

const calcNum = (a, b) => {
    let num1 = a + 2;
    let num2 = b + 2;
    let num3 = num1 * num2;
    return num3;
}
// console.log(calcNum(2, 3));

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map(number => number * 5);
//  console.log(...newNumbers);

const oddNumbers = numbers.filter(number => number % 2 != 1);
// console.log(oddNumbers);


const products = [
    { name: 'Walton phone', color: 'black', price: 3000 },
    { name: 'Nokia phone', color: 'dark blue', price: 5000 },
    { name: 'sound box', color: 'blue', price: 4000 },
    { name: 'micro oven', color: 'blue', price: 5000 },
    { name: 'digital clock', color: 'blue', price: 6000 },
];
const newPro = products.find(product => product.price == 5000);
// console.log(newPro.name, newPro.color);

const mySmartPhone = {
    phoneName: 'Samsung galaxy M32',
    color: 'Dark blue',
    price: 23000
}
let { phoneName } = mySmartPhone;
// console.log(phoneName);

const flowers = ['rose', 'tulip', 'gardenia', 'lily', 'sun-flower'];
const [, , third] = flowers;
// console.log(third);

function add(a, b, c = 7) {
    return a + b + c;
}
console.log(add(3, 4));

