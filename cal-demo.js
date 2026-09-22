// app1.js

var calc = require('./calc1.js');
addresult = calc.add(4,6);
subresult = calc.sub(10,4);
mulresult = calc.mul(3,7);
divresult = calc.div(20,5);

console.log('add output: ',addresult);
console.log('sub output: ',subresult);
console.log('mul output: ',mulresult);
console.log('div output: ',divresult);

// calc1.js

function add(a,b) {
    return a+b;
}
function sub(a,b) {
    return a-b;
}   
function mul(a,b) {
    return a*b;
}
function div(a,b) {
    return a/b;
}
module.exports = {
    add: add,
    sub: sub,
    mul: mul,
    div: div
}
