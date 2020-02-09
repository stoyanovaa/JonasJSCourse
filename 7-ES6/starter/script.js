var Person = function(name, age){
    this.name = name;
    this.age = age;;
}

Person.prototype.sleep = function(){
    console.log('Zzzz');
}

var Student = function(name, age, yearsOfStudy){
    // new Student will create empty {}
    // Person.call will add { this.name: name, this.age: age } to the object
    Person.call(this, name, age);
    this.yearsOfStudy = yearsOfStudy;
}

// just so we can take the methods from Person but not the properties. 
Student.prototype = Object.create(Person.prototype);
// So now Student prototype.constructor is becoming Person's constructor. To fix this
Student.prototype.constructor = Student;

Student.prototype.study = function(){
    console.log('Study');
}

var s1 = new Student();
s1.study();

var p1 = new Person();
/* Person should not be able to study. Child should not be able to change the behavior of the parent.
*/
p1.study(); //study is not a function as expected.

//-------- 2 ------------//
Student.prototype = Person.prototype;

Student.prototype.party = function(){
    console.log('party!');
}

var s2 = new Student();
s2.party();

var p2 = new Person();
 /* Person should not be able to party. Child should not be able to change the behavior of the parent.
party function is defined and this isn't correct. Student.prototype = Person.prototype; will make Student.prototype reference
 be the same as Person.prototype reference so changes from Student.prototype update Person.prototype as well.
*/
p2.party();


/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings,
 default parameters, maps, arrow functions, destructuring, etc.

*/
class TownEntity  {
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }

}

class Park extends TownEntity{
    constructor(name, buildYear, trees, area){
        super(name, buildYear);
        this.trees = trees;
        this.area = area;
    }

    density(){
        return this.trees/this.area;
    }
    //Tree density of each park in the town (forumla: number of trees/park area)
}

class Street extends TownEntity{
    constructor(name, buildYear, length){
        super(name, buildYear);
        this.length = length;
    }

    classification(){
        //Size classification of all streets: tiny/small/normal/big/huge
    }
}


/**
 * 
 * 1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

 */
var parks = [new Park('p1',1900,12,12), new Park('p1',1910,12,12),new Park('p1',1920,120,56)];
var streets = [];

let map = new Map();
map.set