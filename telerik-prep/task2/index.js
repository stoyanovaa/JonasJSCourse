    var input = [
        "June",
        "24"
    ];

    var print = this.print || console.log;
    var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

    let r = "";
    switch (gets()) {
        case "January":
        case "February":
            r = "Winter";
            break;
        case "March":
            r = "Spring";
            if (gets() < 20)
                r = "Winter";
            break;
        case "April":
        case "May":
            r = "Spring";
            break;
        case "June":
            r = "Summer";
            if (gets() < 21)
                r = "Spring";
            break;
        case "July":
        case "August":
            r = "Summer";
            break;
        case "September":
            r = "Autumn";
            if (gets() < 22)
                r = "Summer";
            break;
        case "October":
        case "November":
            r = "Autumn";
            break;
        case "December":
            r = "Winter";
            if (gets() < 21)
                r = "Autumn";
    }

    print(r);