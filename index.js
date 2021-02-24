// The date/time we want to countdown to
let countDownDate = new Date("March 08, 2021 14:55:00").getTime();  //Adjust this to change count date

// Update the count down every second
let myFunc = setInterval(() => {
    //Get today's date and time
    let now = new Date().getTime();

    //Find the distance between now and the count down date
    let timeLeft = countDownDate - now;

    //Calculating the days, hours, minutes, seconds left
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    //Result is outputted to the specific element -- DAYS, HOURS, MINUTES, SECONDS
    //days
    if (days > 9) {
        document.getElementById('value-fcfDay').innerHTML = days;
        document.getElementById('value-fcbDay').innerHTML = days;
        document.getElementById('value-sctDay').innerHTML = days;
        document.getElementById('value-scbDay').innerHTML = days;
    } else {
        document.getElementById('value-fcfDay').innerHTML = "0" + days;
        document.getElementById('value-fcbDay').innerHTML = "0" + days;
        document.getElementById('value-sctDay').innerHTML = "0" + days;
        document.getElementById('value-scbDay').innerHTML = "0" + days;
    }
    
    //hours
    if (hours > 9) {
        document.getElementById('value-fcfHour').innerHTML = hours;
        document.getElementById('value-fcbHour').innerHTML = hours;
        document.getElementById('value-sctHour').innerHTML = hours;
        document.getElementById('value-scbHour').innerHTML = hours;
    } else {
        document.getElementById('value-fcfHour').innerHTML = "0" + hours; 
        document.getElementById('value-fcbHour').innerHTML = "0" + hours;
        document.getElementById('value-sctHour').innerHTML = "0" + hours;
        document.getElementById('value-scbHour').innerHTML = "0" + hours;
    };
    
    //minutes
    if (minutes > 9) {
        document.getElementById('value-fcfMinute').innerHTML = minutes;
        document.getElementById('value-fcbMinute').innerHTML = minutes;
        document.getElementById('value-sctMinute').innerHTML = minutes;
        document.getElementById('value-scbMinute').innerHTML = minutes;
    } else {
        document.getElementById('value-fcfMinute').innerHTML = "0" + minutes 
        document.getElementById('value-fcbMinute').innerHTML = "0" + minutes 
        document.getElementById('value-sctMinute').innerHTML = "0" + minutes 
        document.getElementById('value-scbMinute').innerHTML = "0" + minutes
    };
    
    //seconds
    if (seconds > 9) {
        document.getElementById('value-fcfSecond').innerHTML = seconds;
        document.getElementById('value-fcbSecond').innerHTML = seconds;
        document.getElementById('value-sctSecond').innerHTML = seconds;
        document.getElementById('value-scbSecond').innerHTML = seconds;
    } else {
        document.getElementById('value-fcfSecond').innerHTML = "0" + seconds ;
        document.getElementById('value-fcbSecond').innerHTML = "0" + seconds ;
        document.getElementById('value-sctSecond').innerHTML = "0" + seconds ;
        document.getElementById('value-scbSecond').innerHTML = "0" + seconds
    };
    

 //////////////////////////////////FLIP START///////////////////////////////////////////////////
    
    ///SECONDS FLIP///
    document.getElementById("flip--second").classList.add("animate");
    document.getElementById("value-sctSecond").classList.add("animateSA");
    document.getElementById("value-scbSecond").classList.add("animateSB");

    ///MINUTE, HOUR, DAY FLIP///
    if (seconds === 0) { //minute flip
        document.getElementById('flip--minute').classList.add("animate");
        document.getElementById("value-sctMinute").classList.add("animateSA");
        document.getElementById("value-scbMinute").classList.add("animateSB");

        setTimeout(() => { //end minute flip after one second 
            document.getElementById('flip--minute').classList.remove("animate");
            document.getElementById("value-sctMinute").classList.remove("animateSA");
            document.getElementById("value-scbMinute").classList.remove("animateSB");
        }, 1000);
    }
    if (seconds === 0 && minutes === 0) { //hour flip
        document.getElementById('flip--hour').classList.add("animate");
        document.getElementById("value-sctHour").classList.add("animateSA");
        document.getElementById("value-scbHour").classList.add("animateSB");

        setTimeout(() => { //end hour flip after one second
            document.getElementById('flip--hour').classList.remove("animate");
            document.getElementById("value-sctHour").classList.remove("animateSA");
            document.getElementById("value-scbHour").classList.remove("animateSB");
        }, 1000);   
    }
    if (seconds === 0 && minutes === 0 && hours === 0) { //day flip
        document.getElementById('flip--day').classList.add("animate");
        document.getElementById("value-sctDay").classList.add("animateSA");
        document.getElementById("value-scbDay").classList.add("animateSB");

        setTimeout(() => { //end day flip after one second
            document.getElementById('flip--day').classList.remove("animate");
            document.getElementById("value-sctDay").classList.remove("animateSA");
            document.getElementById("value-scbDay").classList.remove("animateSB");
        }, 1000);
    }

   /////////////////////FLIP END///////////////////////////

    ////////Stops Countdown Interval
    if(timeLeft < 0){
        clearInterval(myFunc); //stops the screen from changing every 1second according to the myFunc

        //stop seconds flip
        document.getElementById("flip--second").classList.remove("animate");
        document.getElementById("value-sctSecond").classList.remove("animateSA");
        document.getElementById("value-scbSecond").classList.remove("animateSB");

        let end = "00";

        ///////////////////IF THIS PART ISN'T ADDED THEN NEGATIVE VALUES BEGIN TO SHOW
        //days end
        document.getElementById('value-fcfDay').innerHTML = end;
        document.getElementById('value-fcbDay').innerHTML = end;
        document.getElementById('value-sctDay').innerHTML = end;
        document.getElementById('value-scbDay').innerHTML = end;

        //hours end
        document.getElementById('value-fcfHour').innerHTML = end;
        document.getElementById('value-fcbHour').innerHTML = end;
        document.getElementById('value-sctHour').innerHTML = end;
        document.getElementById('value-scbHour').innerHTML = end;

        //minute end
        document.getElementById('value-fcfMinute').innerHTML = end;
        document.getElementById('value-fcbMinute').innerHTML = end;
        document.getElementById('value-sctMinute').innerHTML = end;
        document.getElementById('value-scbMinute').innerHTML = end;

        //seconds end
        document.getElementById('value-fcfSecond').innerHTML = end;
        document.getElementById('value-fcbSecond').innerHTML = end;
        document.getElementById('value-sctSecond').innerHTML = end;
        document.getElementById('value-scbSecond').innerHTML = end;
    }
}, 1000);

//Kindly note that the setInterval function calls a function at specific intervals repeatedly in the set milliseconds.
//The setInterval method will continue calling the functuon until the clearInterval method is used or the window is closed.
//Without the myFunc being a setInterval the values would change without showing on the screen.
//Meaning that only a reload would show the value.

//The setTimeout calls a function only once after a specific number of milliseconds
//clearTimeout is used to prevent the setTimeout function from running. But it must be used before the set time.