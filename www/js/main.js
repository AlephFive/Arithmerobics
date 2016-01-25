function $(x) {return document.getElementById(x);}

function firstRunInit(){
    localStorage.setItem("lastMode", "timer")
    //initDatabase();
}

//MAINPAGE
function chooseGameMode(obj, mode){
    obj.style.backgroundColor="#1ec5e5";
        localStorage.lastMode = mode;
    refreshGameModeOptionColour();
}

function refreshGameModeOptionColour(){
    if(localStorage.lastMode == "timer"){
        //select
        $(optionTimer).style.backgroundColor="DodgerBlue";
        
        //deselect
        $(optionStrikes).style.backgroundColor="DarkGrey";
    }
    
    if(localStorage.lastMode == "strikes"){
        //select
        $(optionStrikes).style.backgroundColor="DodgerBlue";
        
        //deselect
        $(optionTimer).style.backgroundColor="DarkGrey";
    }
    
}

function initDatabase(){
    //get current date
    var d = new Date(year, month, day);
    d.setDate(d.getDate() - 1);
    
    //initialise the database using lots of zeros
    var initDataBase = [
        {"date":d, "tAdd":"0", "sAdd":"0", "tSub":"0", "sSub":"0", "tX":"0", "sX":"0", "tDiv":"0", "sDiv":"0", "tRoot":"0", "sRoot":"0", "tExp":"0", "sExp":"0", "extraPoints":"0"}
    ];
    
    for(i = 0; i < 1; i++){
        d.setDate(d.getDate() + 1);
        
        initDataBase.push({"date":d, "tAdd":"0", "sAdd":"0", "tSub":"0", "sSub":"0", "tX":"0", "sX":"0", "tDiv":"0", "sDiv":"0", "tRoot":"0", "sRoot":"0", "tExp":"0", "sExp":"0", "extraPoints":"0"});
    }
    
    localStorage.setItem("mainData", initDataBase);
}

function prepGame(gamefile){
    localStorage.setItem("gameDefinition", gamefile);
    
    if(localStorage.lastMode == "timer"){
        window.location.href="gamePageTimer.html"
    }
    
    if(localStorage.lastMode == "strikes"){
        window.location.href="gamePageStrikes.html"
    }
}



//INGAME
function win(file) {
    var reader = new FileReader();
    reader.onloadend = function(evt) {
        console.log("read success");
        console.log(evt.target.result);
    };
    reader.readAsText(file);
};

var fail = function(evt) {
    console.log(error.code);
};

entry.file(win, fail);

//CREATING CUSTOM GAME
