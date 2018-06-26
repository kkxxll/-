// var arr = [1, 2, 3];
// var {0 : first, [arr.length - 1] : last} = arr;
// console.log(first);
// console.log(last);


// const pipeline = (...funcs) => {
//     return val => {
//         return funcs.reduce((a, b) => b(a), val)
//     };
// }

// const plus1 = a => a + 2;
// const mult2 = a => a * 2;
// const addThenMult = pipeline(plus1, mult2);
// console.log(addThenMult(5))

var fun1 = function(val) {
    return val + 1;
}
var fun2 = function(val) {
    return val * 2;
}
var arr = [fun1, fun2]

var re = function(a,b) {
    return b(a)
}
console.log(arr.reduce(re,3))