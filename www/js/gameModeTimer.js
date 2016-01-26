function $(x) {return document.getElementById(x);}

function initTimerGame(){
    var gameFileName = localStorage.getItem("gameDefinition");
    if(gameFileName == "addOnly"){
        
        var gameFile = JSON.parse(localStorage.getItem("addOnlyFile"));
        
    }
    if(gameFileName == "subOnly"){
        var gameFile = JSON.parse(localStorage.getItem("addOnlyFile"));
    }
    if(gameFileName == "xOnly"){
        var gameFile = JSON.parse(localStorage.getItem("xOnlyFile"));
    }
    if(gameFileName == "divOnly"){
        var gameFile = JSON.parse(localStorage.getItem("divOnlyFile"));
    }
    if(gameFileName == "rootOnly"){
        var gameFile = JSON.parse(localStorage.getItem("rootOnlyFile"));
    }
    if(gameFileName == "expOnly"){
        var gameFile = JSON.parse(localStorage.getItem("expOnlyFile"));
    }
    else{
        alert("error loading gamefile");
        var gameFile = JSON.parse(localStorage.getItem("addOnlyFile"));
    }
    
}

function StartCounter() {

    var myCounter = new Countdown({  
        seconds: 10,  // number of seconds to count down
        onUpdateStatus: function(sec){
            console.log(sec);
            $("timer").innerHTML = sec;
        }, // callback for each second
        onCounterEnd: function(){window.location.href = 'screens/results.html';} // final action
    });

    myCounter.start();
}

function Countdown(options){
    var timer,
    instance = this,
    seconds = options.seconds || 10,
    updateStatus = options.onUpdateStatus || function () {},
    counterEnd = options.onCounterEnd || function () {};

    function decrementCounter() {
        updateStatus(seconds);
        if (seconds === 0) {
            counterEnd();
            instance.stop();
        }
        seconds--;
    }

    this.start = function () {
        clearInterval(timer);
        timer = 0;
        seconds = options.seconds;
        timer = setInterval(decrementCounter, 1000);
    };

    this.stop = function () {
        clearInterval(timer);
    };
}

function questionDisplayer(){
    
}
