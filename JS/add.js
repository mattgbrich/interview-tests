import adder from './adder.js';

const add3 = adder(3);
const add5 = adder(5);

const firstVal = add3(4);
const secondVal = add3(8);
const thirdVal = add5(3);
const fourthVal = add5(2);
const finalVal = adder(4)(6);


console.log(firstVal);  // 7
console.log(secondVal); // 11
console.log(thirdVal);  // 8
console.log(fourthVal); // 7
console.log(finalVal);  // 10
