console.log('Module 2');

function getName() {
    return process.argv[2];
}

module.exports = {
    getName
}