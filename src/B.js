import {foo} from './A.js';

export class B {
    constructor() {
        
    }
    sayHi() {
       return "Hello 😊";
    }
    getWeapon() {
        return 'sword';
    }
    takeDamage(times) {
        return times * 9;
    }
 }


export function bar() {
    if (Math.random()) {
        foo();
    }
}

export function test() {
    console.log("test");
}

console.log("IN B");

export default B;
module.exports = B;