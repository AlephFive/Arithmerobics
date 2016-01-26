function $(x) {return document.getElementById(x);}

function firstRunInit(){
    localStorage.setItem("lastMode", "timer")
    initDatabase();
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
    
    if(localStorage.lastMode == "free"){
        //select
        $(optionFree).style.backgroundColor="DodgerBlue";
        
        //deselect
        $(optionFree).style.backgroundColor="DarkGrey";
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
    
    
    //init gameFiles
    var addOnlyFile = [{"gamemode":"add", "level":"1", "run":"true"},
                       {"gamemode":"add", "level":"2", "run":"true"},
                       {"gamemode":"add", "level":"3", "run":"true"},
                       {"gamemode":"add", "level":"4", "run":"true"},
                       {"gamemode":"add", "level":"5", "run":"true"}]
    var subOnlyFile = [{"gamemode":"sub", "level":"1", "run":"true"},
                       {"gamemode":"sub", "level":"2", "run":"true"},
                       {"gamemode":"sub", "level":"3", "run":"true"},
                       {"gamemode":"sub", "level":"4", "run":"true"},
                       {"gamemode":"sub", "level":"5", "run":"true"}]
    var xOnlyFile = [{"gamemode":"x", "level":"1", "run":"true"},
                       {"gamemode":"x", "level":"2", "run":"true"},
                       {"gamemode":"x", "level":"3", "run":"true"},
                       {"gamemode":"x", "level":"4", "run":"true"},
                       {"gamemode":"x", "level":"5", "run":"true"}]
    var divOnlyFile = [{"gamemode":"div", "level":"1", "run":"true"},
                       {"gamemode":"div", "level":"2", "run":"true"},
                       {"gamemode":"div", "level":"3", "run":"true"},
                       {"gamemode":"div", "level":"4", "run":"true"},
                       {"gamemode":"div", "level":"5", "run":"true"}]
    var rootOnlyFile = [{"gamemode":"root", "level":"1", "run":"true"},
                       {"gamemode":"root", "level":"2", "run":"true"},
                       {"gamemode":"root", "level":"3", "run":"true"},
                       {"gamemode":"root", "level":"4", "run":"true"},
                       {"gamemode":"root", "level":"5", "run":"true"}]
    var expOnlyFile = [{"gamemode":"exp", "level":"1", "run":"true"},
                       {"gamemode":"exp", "level":"2", "run":"true"},
                       {"gamemode":"exp", "level":"3", "run":"true"},
                       {"gamemode":"exp", "level":"4", "run":"true"},
                       {"gamemode":"exp", "level":"5", "run":"true"}]
    
    localStorage.setItem("addOnlyFile", addOnlyFile);
    localStorage.setItem("subOnlyFile", subOnlyFile);
    localStorage.setItem("xOnlyFile", xOnlyFile);
    localStorage.setItem("divOnlyFile", divOnlyFile);
    localStorage.setItem("rootOnlyFile", rootOnlyFile);
    localStorage.setItem("expOnlyFile", expOnlyFile);
}

function prepGame(gamefile){
    localStorage.setItem("gameDefinition", gamefile);
    
    if(localStorage.lastMode == "timer"){
        window.location.href="gamePageTimer.html"
    }
    
    if(localStorage.lastMode == "strikes"){
        window.location.href="gamePageStrikes.html"
    }
    if(localStorage.lastMode == "free"){
        window.location.href="gamePageFree.html"
    }
}



//INGAME





//CREATING CUSTOM GAME
