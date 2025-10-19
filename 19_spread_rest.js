const hobbies = ['sports', 'cooking'];

const hobbiesCopied = hobbies.slice();

const copiedArray = [hobbies]; //this is not a copy, creates nested array

const actualCopy = [...hobbiesCopied];

// console.log(hobbiesCopied);
// console.log(copiedArray);
// console.log(actualCopy);

const person = {
    name : 'Mohan',
    age : 34,
    hobbies : ['Sports', 'Cooking'],
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

const copiedPerson = {
    ...person,
}

console.log(copiedPerson);


//////rest operator

const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4, 5));