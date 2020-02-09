    var input = [
        0.76,
        1
    ];

    var print = this.print || console.log;
    var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

    const price = gets();
    const paid = gets();
    var change = (paid - price) * 100;

    let takeBiggestCoinTillYouCan = function (coinValue, endOfTxt) {
        var count = 0;
        while (change >= coinValue) {
            change -= coinValue;
            count++;
        }

        if (count != 0) {
            print(count + endOfTxt);
        }
    }

     takeBiggestCoinTillYouCan( 100, ' x 1 lev');
     takeBiggestCoinTillYouCan( 50, ' x 50 stotinki');
     takeBiggestCoinTillYouCan( 20, ' x 20 stotinki');
     takeBiggestCoinTillYouCan( 10, ' x 10 stotinki');
     takeBiggestCoinTillYouCan( 5, ' x 5 stotinki');
     takeBiggestCoinTillYouCan( 2, ' x 2 stotinki');
     takeBiggestCoinTillYouCan( 1, ' x 1 stotinka');