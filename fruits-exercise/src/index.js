import fruits from './foods';
import { choice, remove } from './helpers';

//Randomly draw a fruit from the array
let fruit = choice(fruits);
console.log(`I'd like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}`);

let remaining = remove(fruits, fruit);

console.log(`I'm sorry, we're all out. We have ${remaining.length} other fruits left.`)