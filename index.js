// The date/time we want to countdown to
let countDownDate = new Date("Feb 17, 2021 00:00:00").getTime();

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

    //Result is outputted to the specific element --full card value and half card value
    //days
    if (days > 9) {
        document.getElementById('value__full--d').innerHTML = days;

        document.getElementById('value__half--d').innerHTML = days;
    } else {
        document.getElementById('value__full--d').innerHTML = "0" + days;

        document.getElementById('value__half--d').innerHTML = "0" + days;
    }
    
    //hours
    if (hours > 9) {
        document.getElementById('value__full--h').innerHTML = hours;

        document.getElementById('value__half--h').innerHTML = hours;
    } else {
        document.getElementById('value__full--h').innerHTML = "0" + hours; 
        
        document.getElementById('value__half--h').innerHTML = "0" + hours;
    };
    
    //minutes
    if (minutes > 9) {
        document.getElementById('value__full--m').innerHTML = minutes;

        document.getElementById('value__half--m').innerHTML = minutes;
    } else {
        document.getElementById('value__full--m').innerHTML = "0" + minutes 

        document.getElementById('value__half--m').innerHTML = "0" + minutes
    };
    
    //seconds
    if (seconds > 9) {
        document.getElementById('value__full--s').innerHTML = seconds;

        document.getElementById('value__half--s').innerHTML = seconds;
    } else {
        document.getElementById('value__full--s').innerHTML = "0" + seconds ;
        
        document.getElementById('value__half--s').innerHTML = "0" + seconds };

    
       ///////////////// //////Animation effects////////////////////////////
    if (seconds >= 0) {
        document.getElementById('card__half--s').classList.add("animateSeconds")
    }
    
    //causes minute to flip
    //the set timeout function will remove the animateSeconds class as soon as 1seconds
    if (seconds === 0) {
        document.getElementById('card__half--m').classList.add("animateSeconds");
        setTimeout(function () {
            document.getElementById('card__half--m').classList.remove("animateSeconds");
        }, 1000)
    }
    //causes hours to flip
    if (minutes === 0) {
        document.getElementById('card__half--h').classList.add("animateSeconds");
        setTimeout(function () {
            document.getElementById('card__half--h').classList.remove("animateSeconds");
        }, 1000)
    }
    //causes days to flips
    if (hours === 0) {
        document.getElementById('card__half--d').classList.add("animateSeconds");
        setTimeout(function () {
            document.getElementById('card__half--d').classList.remove("animateSeconds");
        }, 1000)
    }
    //stops seconds from flipping
    if (days === 0) {
        document.getElementById('card__half--s').classList.remove("animateSeconds")
    }

    //Stops countdown interval
    if(timeLeft === 0){
        clearInterval(myFunc);
    }
}, 1000);
