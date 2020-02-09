    var input = [
        18, 44
    ];

    var print = this.print || console.log;
    var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

    const messages = gets();
    const minutes = gets();
    const additionalMessages = messages > 20 ? messages - 20 : 0;
    const additionalMin = minutes > 60 ? minutes - 60 : 0;
    const additionalMessagesPrice = additionalMessages * 0.06;
    const additionalMinPrice = additionalMin * 0.1;
    const additionalPaid = additionalMessagesPrice + additionalMinPrice;
    const tax = additionalPaid * 0.2;
    const total = additionalPaid + tax + 12;

    print(additionalMessages + ' additional messages for '+additionalMessagesPrice.toFixed(2)+' levas');
    print(additionalMin + ' additional minutes for '+additionalMinPrice.toFixed(2)+' levas');
    print(tax.toFixed(2) + ' additional taxes');
    print(total.toFixed(2) + ' total bill');