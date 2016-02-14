function retry(){
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

function gohome(){
    window.location.href='main.html';
}

