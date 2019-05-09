import {foo} from './A.js';

export class C {
    constructor() {
        
    }
    sayHi() {
        return "sfa";
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
    console.log("test cc");
}

console.log("IN C");

export default C;
module.exports = C;