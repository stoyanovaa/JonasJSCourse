/*
3. Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.

4. Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects. 
The first row of the string is used as the title row. 

5. Write a JavaScript program to convert an array of objects to a comma-separated values (CSV) 
string that contains only the columns specified.

6. Write a JavaScript program to target a given value in a nested JSON object, based on the given key. 

7. Write a JavaScript program to converts a specified number to an array of digits.

8. Write a JavaScript program to filter out the specified values from a specified array. 
Return the original array without the filtered values. 

9. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.

10. Write a JavaScript program to extract out the values at the specified indexes from a specified array.
*/

/**
 * 1. Write a JavaScript program to compare two objects to determine if the first one contains equivalent
 property values to the second one.
 */

const compareObjects = (objA, objB) => {
    if (objA === undefined || objB === undefined) {
        return objA === objB;
    }

    if (objA === null || objB === null) {
        return objA === objB;
    }

    if (typeof objA === "boolean" || typeof objB === "boolean") {
        return objA === objB;
    }

    for (const key in objA) {
        if (!objB[key] || (objB[key] !== objA[key])) {
            return false;
        }
    }

    for (const key in objB) {
        if (!objA[key] || (objA[key] !== objB[key])) {
            return false;
        }
    }

    return true;
}

class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Artist extends Person {
    constructor(name, album) {
        super(name);
        this.album = album;
    }

    getAlbum() {
        return `First album name is : ${this.album}`;
    }
}

var a1 = new Artist('Jan', 'album1');
var a2 = new Artist('Kris', 'album2');
var p1 = new Person('Jan');

//undefined, null, string, number, bool
console.log(`a1 == a1 - ${compareObjects(a1, a1)}`);
console.log(`a1 == a2 - ${compareObjects(a1, a2)}`);
console.log(`a1 == p1 - ${compareObjects(a1, p1)}`);
console.log(`undefined == p1 - ${compareObjects(undefined, p1)}`);
console.log(`null == p1 - ${compareObjects(null, p1)}`);
console.log(`null == null - ${compareObjects(null, null)}`);
console.log(`string == p1 - ${compareObjects('str', p1)}`);
console.log(`a1 == { name: '' , album :'' } - ${compareObjects(a1, { name: '' , album :'' })}`);
console.log(`a1 == { name: 'Jan' , album :'album1' } - ${compareObjects(a1, { name: 'Jan' , album :'album1' })}`);
console.log(`true == true - ${compareObjects(true, true )}`);
console.log(`true == false - ${compareObjects(true, false )}`);
console.log(`str == str - ${compareObjects('str', 'str' )}`);
console.log(`dif == str - ${compareObjects('dif', 'str' )}`);

/**
 * 2. Write a JavaScript program to copy a string to the clipboard. 
 */

document.querySelector('#copy-btn').addEventListener('click', () => {
    const inputcopy = document.querySelector('#to-copy');

    /* Select the text field */
    inputcopy.select();
    inputcopy.setSelectionRange(0, 99999);

    document.execCommand("copy");
})