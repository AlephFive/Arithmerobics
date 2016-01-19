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
