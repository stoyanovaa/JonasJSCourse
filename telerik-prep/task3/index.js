    var input = [
        1
    ];

    var print = this.print || console.log;
    var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
    
    let n = gets();
    let r = '1 ';
    for (let i = 2; i <= n; i++) {
        r += i + ' ';
    }

   print(r);