const module1 = require('./module-1');
const module2 = require('./module-2');

console.log('Main Module');

module1.sayHello(module1.getEncapsulatedVar());
module1.sayHello(module2.getName());
