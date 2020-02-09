    var input = [
        '2', // Line 1
        '3', // Line 2
    ];
    
    var print = this.print || console.log;
    var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
    
    // The solution starts from here
    
    var firstNumber = +gets(); // Also converts the input to number using the "+" operator
    var secondNumber = +gets(); // Also converts the input to number using the "+" operator
    
    var result = firstNumber + secondNumber;
    print(result);