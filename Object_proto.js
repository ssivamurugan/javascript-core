let human = {
    canEat: true,
    canSleep: true
}

let person = {
    name: 'siva',
    age: 22,

    toString() {
        return `Name is : ${this.name}`;
    },

    valueOf() {
        return this.age;
    }
}

// __proto__: property

person.__proto__ = human;

console.log('Property\'s in person inherited form human Object', person.canEat);

// toString and valueOf methods

console.log('From toString method ', String(person));
console.log('From valueOf method', 1 + person);

