// reverse string
let str = "javascript"
let len = str.length;
let rev = '';

for (var i=len-1; i>=0; i--) {
    rev += str[i]
}
console.log(rev);
// -- decrement, ++ increment

let arr = [1,2,3,4,5,6]
let len1 = arr.length
let sum = 0;

for (var i=0; i<len1; i++) {
    sum += arr[i]
}

console.log(sum);
