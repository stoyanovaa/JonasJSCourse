    var input = [
        1975
    ];

    var print = this.print || console.log;
    var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


    /*
    2000 - 1988 	Dragon		2006 - 1994	    Dog
    2001 - 1989	    Snake		2007 - 1995	    Pig
    2002 - 1990	    Horse		2008 - 1996	    Rat
    2003 - 1991	    Sheep		2009 - 1997	    Ox
    2004 - 1992	    Monkey		2010 - 1998	    Tiger
    2005 - 1993	    Rooster		2011 - 1999	    Hare

    */

    const zodiac = new Map();
    zodiac.set(2000, 'Dragon');
    zodiac.set(2001, 'Snake');
    zodiac.set(2002, 'Horse');
    zodiac.set(2003, 'Sheep');
    zodiac.set(2004, 'Monkey');
    zodiac.set(2005, 'Rooster');
    zodiac.set(2006, 'Dog');
    zodiac.set(2007, 'Pig');
    zodiac.set(2008, 'Rat');
    zodiac.set(2009, 'Ox');
    zodiac.set(2010, 'Tiger');
    zodiac.set(2011, 'Hare');

    let year = +gets();

    if (year >= 2000 && year <= 2011) {} 
    else if (year < 2000) {
        do {
            year += 12;
        } while (year < 2000);
    } else if (year > 2011) {
        do {
            year -= 12;
        } while (year > 2011);
    }

    print(zodiac.get(year));
