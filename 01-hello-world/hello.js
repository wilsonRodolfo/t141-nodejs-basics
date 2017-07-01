const args = process.argv.slice(2);

/*args.forEach((abelha, pedra) => {
    console.log('%s: %s', pedra, abelha);
})*/ 

function getName () {
    return process.argv[2];
}

function sayHello(name = '') {
    console.log(`Hello ${getName()}`);
}

args.forEach(sayHello); 
