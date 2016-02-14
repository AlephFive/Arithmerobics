function test(){
    alert("sucess");
}


function initTimerGame(){
    //load gameFile
    alert("initialising");
    var gameFileName = localStorage.getItem("gameDefinition");
    var gameFile;
    alert(gameFileName);
    if(gameFileName == "addOnly"){
        gameFile = JSON.parse(localStorage.getItem("addOnlyFile"));
    }
    if(gameFileName == "subOnly"){
        gameFile = JSON.parse(localStorage.getItem("addOnlyFile"));
    }
    if(gameFileName == "xOnly"){
        gameFile = JSON.parse(localStorage.getItem("xOnlyFile"));
    }
    if(gameFileName == "divOnly"){
        gameFile = JSON.parse(localStorage.getItem("divOnlyFile"));
    }
    if(gameFileName == "rootOnly"){
        gameFile = JSON.parse(localStorage.getItem("rootOnlyFile"));
    }
    if(gameFileName == "expOnly"){
        gameFile = JSON.parse(localStorage.getItem("expOnlyFile"));
    }
    else{
        alert("error loading gamefile");
        gameFile = JSON.parse(localStorage.getItem("addOnlyFile"));
    }
    
    alert(JSON.stringify(gameFile));
    //initialise variables
    var score = 0;
    var currentLevel = 1;
    var isDecimal = false;
    
}