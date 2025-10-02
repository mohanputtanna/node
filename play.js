var name = 'Mohan'
var age = 34
var hashHobbies = true;

function summarizeUser(userName, userAge, userHasHobbies) {
    return ('Name is ' + userName + ' Age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies);
}


const person = {
    name : 'Mohan',
    age : 34,
    hobbies : ['Sports', 'Cooking'],
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

const summarizeUserFunc = (userName, userAge, userHasHobbies) => ('Name is ' + userName + ' Age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies);

// console.log(summarizeUser(name, age, hashHobbies));
// console.log(summarizeUserFunc(name, age, hashHobbies));

person.greet()