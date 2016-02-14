
function $(x){return document.getElementById(x);}

var gameFile;
var score = 0;
var currentLevel = 1;
var isDecimal = false;
//var resultSheet = [];

function initTimerGame(){
    //load gameFile
    var gameFileName = localStorage.getItem("gameDefinition");
    
    if(gameFileName == "addOnly"){
        gameFile = JSON.parse(localStorage.getItem("addOnlyFile"));
    }
    else if(gameFileName == "subOnly"){
        gameFile = JSON.parse(localStorage.getItem("subOnlyFile"));
    }
    else if(gameFileName == "xOnly"){
        gameFile = JSON.parse(localStorage.getItem("xOnlyFile"));
    }
    else if(gameFileName == "divOnly"){
        gameFile = JSON.parse(localStorage.getItem("divOnlyFile"));
    }
    else if(gameFileName == "rootOnly"){
        gameFile = JSON.parse(localStorage.getItem("rootOnlyFile"));
    }
    else if(gameFileName == "expOnly"){
        gameFile = JSON.parse(localStorage.getItem("expOnlyFile"));
    }
    else{
        alert("error loading gamefile");
        gameFile = JSON.parse(localStorage.getItem("addOnlyFile"));
    }
    //initialise variables
    
}

function StartCounter(){

    var myCounter = new Countdown({  
        seconds: 50,  // number of seconds to count down
        onUpdateStatus: function(sec){
            console.log(sec);
            $("timer").innerHTML = sec;
        }, // callback for each second
        onCounterEnd: function(){endGame();} // final action
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

function input(obj, info){
    obj.style.backgroundColor = "#1ec5e5";
    if($("displayBox").innerHTML == "Correct"){
        $("displayBox").innerHTML = "";
    }

    <!-- button is sign flipper -->
                
    if (info == "flip"){
        if (obj.innerHTML == "+"){
            obj.innerHTML="-";
        }
        else{
            obj.innerHTML="+";
        }                
    }
                
    <!-- button is del -->
                
    else if (info == 'backspace'){
        if($("displayBox").innerHTML.substring($("displayBox").innerHTML.length -1, $("displayBox").innerHTML.length) == '.'){
            isDecimal = false;
        }
        $("displayBox").innerHTML = $("displayBox").innerHTML.slice(0, -1);
    }
    
                
    <!-- button is number -->
                        
    else if ((isDecimal == true && $("displayBox").innerHTML.length < 5)||(isDecimal == false && $("displayBox").innerHTML.length < 4)){
        if (info == 1 || info == 2 ||info == 3 ||info == 4 ||info == 5 ||info == 6 ||info == 7 ||info == 8 ||info == 9 ||info==0){
            $("displayBox").innerHTML = $("displayBox").innerHTML+info;
        }
        else if (info == '.' && isDecimal == false && $("displayBox").innerHTML.length != 0){
            isDecimal = true;
            $("displayBox").innerHTML = $("displayBox").innerHTML+info;
        }
                    
    }    
    
}

function mDown(obj){
    obj.style.backgroundColor="#D94A38";
    checkAnswer();
}

function checkAnswer(){  
    var answerString = parseFloat($("displayBox").innerHTML);
    var questionString = $("questionBox").innerHTML;
    var answer = eval(questionString);
    //check if correct with consideration to sign of answer
    if(($("flipper").innerHTML == '+')&&(answerString == answer)){
        isCorrect();
    }
    if(($("flipper").innerHTML == '-')&&((0-answerString) == answer)){
        isCorrect()
    }
    
}

function isCorrect(){
    //resultSheet.push({"question":$("questionBox").innerHTML, "answer":$("displayBox").innerHTML},);
    $("displayBox").innerHTML = "Correct";
    newQuestion();
    incrementScore(1);
}

function incrementScore(number){
    score += number;
    alert(score);
}

function endGame(){
    //save score info to local storage to be displayed in results page.
    //localStorage.setItem("results", JSON.stringify(resultSheet));
    localStorage.setItem("resultScore", score);
    window.location.href = 'results.html';
}

function newQuestion(){
    updateLevel();
    var qString = "";
    //get gamefile
    var randInt = getRandomInt(0, gameFile.length-1);
    var toGenerate = gameFile[randInt].gamemode;
    
    if(toGenerate == "add"){
        qString = genAdd(currentLevel);
    }
    else if(toGenerate == "sub"){
        qString = genSub(currentLevel);
    }
    else if(toGenerate == "x"){
        qString = genX(currentLevel);
    }
    else if(toGenerate == "div"){
        qString = genDiv(currentLevel);
    }
    else if(toGenerate == "root"){
        qString = genRoot(currentLevel);
    }
    else if(toGenerate == "exp"){
        qString = genExp(currentLevel);
    }
    else{
        alert("error in getting q type from JSON")
    }
    
    $("questionBox").innerHTML = qString;
    
}

function updateLevel(){
    if(score < 1000){
        currentLevel = 5;
    }
    if(score < 40){
        currentLevel = 4;
    }
    if(score < 30){
        currentLevel = 3;
    }
    if(score < 20){
        currentLevel = 2;
    }
    if(score < 10){
        currentLevel = 1;
    }
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//question generators
    
function genAdd(difficulty){
    var num1 = 0;
    var num2 = 0;
    <!--Generate-->
    switch(difficulty) {
        case 1:
            num1 = Math.floor(Math.random() * 10);
            num2 = Math.floor(Math.random() * 10);
        break;
                    
        case 2:
            num1 = Math.floor(5+Math.random() * 20);
            num2 = Math.floor(5+Math.random() * 20);
        break;
                        
        case 3:
            num1 = Math.floor(10+Math.random() * 50);
            num2 = Math.floor(10+Math.random() * 50);
        break;
                    
        case 4:
            num1 = Math.floor(20+Math.random() * 100);
            num2 = Math.floor(20+Math.random() * 100);
        break;
                        
        case 5:
            num1 = Math.floor(1000+Math.random() * 4000);
            num2 = Math.floor(1000+Math.random() * 4000);
        break;
                        
        default:
            alert("error generating addition question");
    }
    var ansString = num1 + "+" + num2;
    return ansString;
}

function genSub(difficulty){
    switch(difficulty) {
        case 1:
            
        break;
                    
        case 2:
            
        break;
                        
        case 3:
            
        break;
                    
        case 4:
            
        break;
                        
        case 5:
            
        break;
                        
        default:
            alert("error generating sub question");
    }
    
    return ansString;
}

function genX(difficulty){
    switch(difficulty) {
        case 1:
            
        break;
                    
        case 2:
            
        break;
                        
        case 3:
            
        break;
                    
        case 4:
            
        break;
                        
        case 5:
            
        break;
                        
        default:
            alert("error generating multiplication question");
    }
    
    return ansString;
}

function genDiv(difficulty){
    switch(difficulty) {
        case 1:
            
        break;
                    
        case 2:
            
        break;
                        
        case 3:
            
        break;
                    
        case 4:
            
        break;
                        
        case 5:
            
        break;
                        
        default:
            alert("error generating div question");
    }
    
    return ansString;
}

function genRoot(difficulty){
    switch(difficulty) {
        case 1:
            
        break;
                    
        case 2:
            
        break;
                        
        case 3:
            
        break;
                    
        case 4:
            
        break;
                        
        case 5:
            
        break;
                        
        default:
            alert("error generating root question");
    }
    
    return ansString;
}

function genExp(difficulty){
    switch(difficulty) {
        case 1:
            
        break;
                    
        case 2:
            
        break;
                        
        case 3:
            
        break;
                    
        case 4:
            
        break;
                        
        case 5:
            
        break;
                        
        default:
            alert("error generating exp question");
    }
    
    return ansString;
}



