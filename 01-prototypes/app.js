//String.prototype is a "template object" for every single string.

// String.prototype.yell = function() {
//     console.log(this);
//     return `OMG!!!! ${this.toUpperCase()}!!!!!!!`
// }

// const guruguru = 'i got diarrhea'.yell();

String.prototype.toUpperCase = function() {
    return this
}
console.log('i got Diarrhea'.toUpperCase())

Array.prototype.pop = function(){
    return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP OFF!';
}

const nums = [6,7,8,9];
console.log(nums.pop())