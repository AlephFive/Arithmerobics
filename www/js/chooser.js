function $(x){return document.getElementById(x);}

var customGameFile = localStorage.getItem("customGame");
    

function initCustomGame(){
    if(customGameFile == null){
        customGameFile = [
            {"gamemode":"add", "run":"false"},
            {"gamemode":"sub", "run":"false"},
            {"gamemode":"x", "run":"false"},
            {"gamemode":"div", "run":"false"}  
        ];
    }
    else{
        customGameFile = JSON.parse(localStorage.getItem("customGame"));
    }
}

function tap(obj, gameType){
    if(obj.innerHTML == "Select"){
        obj.style.backgroundColor="#1ec5e5";
        
        if(gameType == 'add'){
            customGameFile[0].run = "true";
        }
        if(gameType == 'sub'){
            customGameFile[1].run = "true";
        }
        if(gameType == 'x'){
            customGameFile[2].run = "true";
        }
        if(gameType == 'div'){
            customGameFile[3].run = "true";
        }
        
        
        obj.innerHTML = "Selected"
        
    }
    else if(obj.innerHTML == "Selected"){
        obj.style.backgroundColor="#D94A38";
        customGameFile[0].run = false;
        
        if(gameType == 'add'){
            customGameFile[0].run = "false";
        }
        if(gameType == 'sub'){
            customGameFile[1].run = "false";
        }
        if(gameType == 'x'){
            customGameFile[2].run = "false";
        }
        if(gameType == 'div'){
            customGameFile[3].run = "false";
        }
        
        obj.innerHTML = "Select"
    }
    
    
}

function resetColors(){
    var run = true;
    var i = 0;
    
    while(run){
        if(customGameFile[i].gamemode == null){
            run = false;
        }
        else{
            if(i==0 && customGameFile[i].run=="true"){
                $('add').innerHTML = "Selected";
                $('add').style.backgroundColor="#D94A38";
            }
            else if(i==0 && customGameFile[i].run=="false"){
                $('add').innerHTML = "Selected";
                $('add').style.backgroundColor="#D94A38";
            }
            
            if(i==1 && customGameFile[i].run=="true"){
                $('sub').innerHTML = "Selected";
                $('sub').style.backgroundColor="#D94A38";
            }
            else if(i==1 && customGameFile[i].run=="false"){
                $('sub').innerHTML = "Selected";
                $('sub').style.backgroundColor="#D94A38";
            }
            
            if(i==2 && customGameFile[i].run=="true"){
                $('x').innerHTML = "Selected";
                $('x').style.backgroundColor="#D94A38";
            }
            else if(i==2 && customGameFile[i].run=="false"){
                $('x').innerHTML = "Selected";
                $('x').style.backgroundColor="#D94A38";
            }
            
            if(i==3 && customGameFile[i].run=="true"){
                $('div').innerHTML = "Selected";
                $('div').style.backgroundColor="#D94A38";
            }
            else if(i==3 && customGameFile[i].run=="false"){
                $('div').innerHTML = "Selected";
                $('div').style.backgroundColor="#D94A38";
            }
            
        }
        i++;
        
    }
}

function goHome(){
    localStorage.setItem("customGame") = JSON.stringify(customGameFile);
    
    window.location.href='main.html';
}

function play(){
    localStorage.setItem("customGame") = JSON.stringify(customGameFile);
    
    localStorage.setItem("gameDefinition", customGameFile);
    
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