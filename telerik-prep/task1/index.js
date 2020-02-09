    var input = [
        '10',
        '10'
    ];

    var print = this.print || console.log;
    var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

    // The solution starts from here

    /* 1 gallon = 4.54 litres and 1 mile = 1.6 km*/
    const GALLON_LITTER = 4.54;
    const MILE_KM = 1.6;

    var miles = +gets();
    var km = miles * MILE_KM; //75
    var kmPerLitter = km / GALLON_LITTER; //11.4
    var result = Math.floor(100 / kmPerLitter);

    print(result + " litres per 100 km");