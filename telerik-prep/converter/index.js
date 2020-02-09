var input = [
    '4', // Line 1
    '3', // Line 2
    '11',
    '40'
];

var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// The solution starts from here

/*
First line - d - days
Second line - h - hours
Third line - m - minutes
Fourth line - s - seconds */

var day = +gets();
var hours = +gets();
var minutes = +gets();
var seconds = +gets();


var result = (day * 24 * 60 *60) + (hours * 60 * 60) + (minutes * 60) + seconds;
print(result);