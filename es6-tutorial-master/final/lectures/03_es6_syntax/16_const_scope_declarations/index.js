// part 1:
const a = 2;
a = 3 * 4; // error

// part 2:
const array = [1, 2, 3];
array.push(4);
console.log('array', array); // valid

array = [1]; // error

const x = 1;

{
    var x = 5; //SyntaxError: Identifier 'x' has already been declared
    const x = 2; // SyntaxError: Identifier 'x' has already been declared
}