function $(x){return document.getElementById(x);}

var gameFile;
var score = 0;
var currentLevel = 1;
var isDecimal = false;
var resultSheet = [];
var numStrikes = 0;
var tempAnswer = 0;

function initStrikesGame(){
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



function input(obj, info){
    obj.style.backgroundColor = "#1ec5e5";
    if($("displayBox").innerHTML == "Correct" || $("displayBox").innerHTML == "Incorrect"){
        $("displayBox").innerHTML = "";
    }
    
    <!-- button is number -->
    if (info == "check"){
        checkAnswer();                
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
    
}

function checkAnswer(){  
    var answerString = parseFloat($("displayBox").innerHTML);
    //var questionString = $("questionBox").innerHTML;
    var answer = tempAnswer;
    //check if correct with consideration to sign of answer
    if((($("flipper").innerHTML == '+')&&(answerString == answer))||(($("flipper").innerHTML == '-')&&((0-answerString) == answer))){
        isCorrect();
    }
    else{
        isInCorrect()
    }
    
}

function isCorrect(){
    var q = $("questionBox").innerHTML;
    var a = $("displayBox").innerHTML;
    var resultSheetString = {"question":q, 'answer':a, "correct":"true"};
    //alert(JSON.stringify(resultSheetString));
    resultSheet.push(resultSheetString);
    $("displayBox").innerHTML = "Correct";
    newQuestion();
    incrementScore(1);
}

function isInCorrect(){
    var q = $("questionBox").innerHTML;
    var a = $("displayBox").innerHTML;
    var resultSheetString = {"question":q, 'answer':a, "correct":"false"};
    //alert(JSON.stringify(resultSheetString));
    resultSheet.push(resultSheetString);
    $("displayBox").innerHTML = "Incorrect";
    newQuestion();
    incrementStrikeCounter(1);
    
}

function incrementScore(number){
    score += number;
    $("scoreBox").innerHTML = score;
}

function incrementStrikeCounter(num){
    
    if ($("strikeCounter").innerHTML == 3){
        endGame();
    }
    else{
        numStrikes++;
    }
    
    $("strikeCounter").innerHTML = numStrikes;
}

function endGame(){
    //save score info to local storage to be displayed in results page.
    localStorage.setItem("results", JSON.stringify(resultSheet));
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
    tempAnswer = num1+num2;
    return ansString;
}

function genSub(difficulty){
    switch(difficulty) {
        case 1:
            num1 = Math.floor((Math.random() * 10)+5);
            num2 = Math.floor(Math.random() * 5);
        break;
                    
        case 2:
            num1 = Math.floor(Math.random() * 10);
            num2 = Math.floor(Math.random() * 10);
        break;
                        
        case 3:
            num1 = Math.floor(5+Math.random() * 20);
            num2 = Math.floor(5+Math.random() * 20);
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
            alert("error generating sub question");
    }
    var ansString = num1 + "-" + num2;
    tempAnswer = num1+num2;
    return ansString;
}

function genX(difficulty){
    switch(difficulty) {
        case 1:
            num1 = Math.floor(Math.random() * 5);
            num2 = Math.floor(Math.random() * 5);
        break;
                    
        case 2:
            num1 = Math.floor(Math.random() * 10);
            num2 = Math.floor(Math.random() * 10);
        break;
                        
        case 3:
            num1 = Math.floor((5+Math.random() * 15));
            num2 = Math.floor((5+Math.random() * 15));
        break;
                    
        case 4:
            num1 = Math.floor((5+Math.random() * 20));
            num2 = Math.floor((5+Math.random() * 20));
        break;
                        
        case 5:
            num1 = Math.floor((5+Math.random() * 25));
            num2 = Math.floor((5+Math.random() * 25));
        break;
                        
        default:
            alert("error generating multiplication question");
    }
    var ansString = num1 + "*" + num2;
    tempAnswer = num1+num2;
    return ansString;
}

function genDiv(difficulty){
    switch(difficulty) {
        case 1:
            num1 = Math.floor(Math.random() * 10);
            num2 = Math.floor((Math.random() * 2)+1);
        break;
                    
        case 2:
            num2 = Math.floor(Math.random() * 10);
            num1 = Math.floor((Math.random() * 2)+1);
        break;
                        
        case 3:
            num2 = Math.floor(Math.random() * 10);
            num1 = Math.floor((Math.random() * 5)+1);
        break;
                    
        case 4:
            num2 = Math.floor(Math.random() * 10);
            num1 = Math.floor((Math.random() * 5)+1)/2;
        break;
                        
        case 5:
            num2 = Math.floor(Math.random() * 20);
            num1 = Math.floor((Math.random() * 5)+1)/2;
        break;
                        
        default:
            alert("error generating div question");
    }
    var ansString = num1 + "/" + num2;
    tempAnswer = num1+num2;
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
    var ansString = "feature unavailable";
    tempAnswer = num1+num2;
    return ansString;
}

function genExp(difficulty){
    switch(difficulty) {
        case 1:
            num1 = Math.floor(Math.random() * 2);
            num2 = Math.floor(Math.random() * 2);
        break;
                    
        case 2:
            num1 = 2
            num2 = Math.floor(Math.random() * 4);
        break;
                        
        case 3:
            num1 = 2
            num2 = Math.floor(Math.random() * 10);
        break;
                    
        case 4:
            num1 = 3
            num2 = Math.floor(Math.random() * 4);
        break;
                        
        case 5:
            num1 = 3
            num2 = Math.floor(Math.random() * 8);
        break;
                        
        default:
            alert("error generating exp question");
    }
    var ansString = num1 + "^" + num2;
    tempAnswer = num1+num2;
    return ansString;
}