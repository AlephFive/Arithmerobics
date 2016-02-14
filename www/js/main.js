function $(x) {return document.getElementById(x);}

function firstRunInit(){
    localStorage.setItem("lastMode", "timer");
    initDatabase();
    alert("firstrun");
}


//MAINPAGE
function chooseGameMode(obj, mode){
    obj.style.backgroundColor="#1ec5e5";
        localStorage.lastMode = mode;
    refreshGameModeOptionColour();
}

function refreshGameModeOptionColour(){
    //alert("in refreshGameModeOptionColour");
    if(localStorage.getItem("lastMode") == "timer"){
        //select
        $("optionTimer").style.backgroundColor="#52A8FF";
        
        //deselect
        $("optionStrikes").style.backgroundColor="#D94A38";
        $("optionFree").style.backgroundColor="#D94A38";
    }
    
    if(localStorage.getItem("lastMode") == "strikes"){
        //select
        $("optionStrikes").style.backgroundColor="#52A8FF";
        
        //deselect
        $("optionTimer").style.backgroundColor="#D94A38";
        $("optionFree").style.backgroundColor="#D94A38";
    }
    
    if(localStorage.getItem("lastMode") == "free"){
        //select
        $("optionFree").style.backgroundColor="#52A8FF";
        
        //deselect
        $("optionTimer").style.backgroundColor="#D94A38";
        $("optionStrikes").style.backgroundColor="#D94A38";
    }
    //alert("refreshGameModeOptionColour sucess");

}

function initDatabase(){
    //alert("initDatabase");
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
    
    //alert("initDatabase sucess");
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
