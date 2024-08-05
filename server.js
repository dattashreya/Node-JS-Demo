console.log('Hello');
console.log(global);

const os = require('os');
console.log(os.type())
console.log(os.version())
console.log(os.homedir())
console.log(__dirname)
console.log(__filename)


const os = require('os');
const {add, subtract} = require('./math');

console.log(add(2,3));
console.log(subtract(2,3));

or ,

const os = require('os');
const math = require('./math');

console.log(math.add(2,3));
console.log(math.subtract(2,3));


// ......... output..............

// Hello
// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 33.20039367675781,
//       nodeStart: 0.1717090606689453,
//       v8Start: 1.1057071685791016,
//       bootstrapComplete: 24.702377319335938,
//       environment: 13.058012962341309,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1722707715527.769
//   },
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   }
// }
// Linux
// #68~20.04.1-Ubuntu SMP Wed May 1 14:35:27 UTC 2024
// /root

// /server.js