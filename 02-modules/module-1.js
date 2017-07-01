console.log('Module 1');

let encapsulatedVariable = "xurupitas";

function sayHello(name = '') {
    console.log(`Hi ${name}`);
}

function getEncapsulatedVar() {
    return encapsulatedVariable;
}

//Expose method sayHello
module.exports = {
    sayHello,
    getEncapsulatedVar
}