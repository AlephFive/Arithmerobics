function Init(){
    clearQuestionBanks();
    var score = 0;
    var iQuestion = '';
    var iAnswer = '';
    var iCorrect = '';

    localStorage.setItem("IQuestion", iQuestion);
    localStorage.setItem("IAnswer", iAnswer);  
    localStorage.setItem("ICorrect", iCorrect);
    localStorage.setItem("Score", 0);
}

function InitStrikes(){
    clearQuestionBanks();
    var score = 0;
    var strikes = 0;
    var iQuestion = '';
    var iAnswer = '';
    var iCorrect = '';

    localStorage.setItem("IQuestion", iQuestion);
    localStorage.setItem("IAnswer", iAnswer);  
    localStorage.setItem("ICorrect", iCorrect);
    localStorage.setItem("Score", 0);
}

function StartCounter() {

    var myCounter = new Countdown({  
        seconds: 10,  // number of seconds to count down
        onUpdateStatus: function(sec){
            console.log(sec);
            document.getElementById("timer").innerHTML = sec;
        }, // callback for each second
        onCounterEnd: function(){window.location.href = 'results.html';} // final action
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
    if(document.getElementById("displayBox").innerHTML == "Correct"){
        document.getElementById("displayBox").innerHTML = "";
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
        if(document.getElementById("displayBox").innerHTML.substring(document.getElementById("displayBox").innerHTML.length -1, document.getElementById("displayBox").innerHTML.length) == '.'){
            isDecimal = false;
        }
        document.getElementById("displayBox").innerHTML = document.getElementById("displayBox").innerHTML.slice(0, -1);
    }
    
    else if (info == 'enter'){}
                
    <!-- button is number -->
                        
    else if ((isDecimal == true && document.getElementById("displayBox").innerHTML.length < 5)||(isDecimal == false && document.getElementById("displayBox").innerHTML.length < 4)){
        if (info == 1 || info == 2 ||info == 3 ||info == 4 ||info == 5 ||info == 6 ||info == 7 ||info == 8 ||info == 9 ||info==0){
            document.getElementById("displayBox").innerHTML = document.getElementById("displayBox").innerHTML+info;
        }
        else if (info == '.' && isDecimal == false && document.getElementById("displayBox").innerHTML.length != 0){
            isDecimal = true;
            document.getElementById("displayBox").innerHTML = document.getElementById("displayBox").innerHTML+info;
        }
                    
    }
                
}      

function mDown(obj){
                obj.style.backgroundColor="#D94A38";
                checkAnswer();
            }

//fix
function checkAnswer(){
    <!--addition-->
        if((parseFloat(document.getElementById("firstNumber").innerHTML)+parseFloat(document.getElementById("secondNumber").innerHTML))== document.getElementById("displayBox").innerHTML){
            var temp = parseFloat(document.getElementById("firstNumber").innerHTML) +  parseFloat(document.getElementById("secondNumber").innerHTML);
            updateICorrect (' ');
            updateIAnswer(temp);
                    
            document.getElementById("displayBox").innerHTML = "Correct";
            IncrementScore(1);
            
            var score = localStorage.getItem("Score")
                    
            <!--difficulty increaser-->
                        
                if (score <= 5){
                    updateAdd(1); 
                }
                else if (score <= 10){
                    updateAdd(2); 
                }
                else if (score <= 15){
                    updateAdd(3); 
                }
                else if (score <= 20){
                    updateAdd(4); 
                }
                else{
                    updateAdd(5); 
                }
                    
        }
    
    
    
        
    
}
function checkSubAnswer(){
    <!--subtraction-->
        var tempFirst = parseFloat(document.getElementById("firstNumber").innerHTML);
        var tempSecond = parseFloat(document.getElementById("secondNumber").innerHTML);
        var Qanswer = parseFloat(document.getElementById("displayBox").innerHTML);
        var sign =  document.getElementById("displayBox").innerHTML;
        
        if((document.getElementById("operator").innerHTML == '-')&&(abs(tempFirst - tempSecond)==Qanswer)&&((tempFirst > tempSecond && sign == '+')||(tempFirst < tempSecond && sign == '-')||tempFirst== tempSecond)){
                    
            var temp = parseFloat(document.getElementById("firstNumber").innerHTML) -parseFloat(document.getElementById("secondNumber").innerHTML);
            
            updateIAnswer(temp);
            updateICorrect (' ');
            document.getElementById("displayBox").innerHTML = "Correct";
            IncrementScore(1);
            var score = localStorage.getItem("Score")
                    
            <!--difficulty increaser-->
                        
            if (score <= 5){
                updateSub(1); 
            }
            else if (score <= 10){
                updateSub(2); 
            }
            else if (score <= 15){
                updateSub(3); 
            }
            else if (score <= 20){
                updateSub(4); 
            }
            else{
                updateSub(5); 
            }
        }
}

function updateSub(difficulty){
                
                var num1 = 0;
                var num2 = 0;
    
                <!--Generate-->
                switch(difficulty) {
                
                    case 1:
                        while(true){
                            num1 = Math.floor(Math.random() * 10);
                            num2 = Math.floor(Math.random() * 10);
                            if (num1 > num2){
                                break;
                            }
                        }
                    break;
                        
                    case 2:
                        while(true){
                            num1 = Math.floor(5+Math.random() * 20);
                            num2 = Math.floor(5+Math.random() * 20);
                        if (num1 > num2){
                                break;
                            }
                        }
                    break;
                        
                    case 3:
                        while(true){
                            num1 = Math.floor(10+Math.random() * 50);
                            num2 = Math.floor(10+Math.random() * 50);
                        if (num1 > num2){
                                break;
                            }
                        }
                    break;
                    
                    case 4:
                        while(true){
                            num1 = Math.floor(20+Math.random() * 100);
                            num2 = Math.floor(20+Math.random() * 100);
                        if (num1 > num2){
                                break;
                            }
                        }
                    break;
                        
                    case 5:
                        while(true){
                            num1 = Math.floor(1000+Math.random() * 4000);
                            num2 = Math.floor(1000+Math.random() * 4000);
                        if (num1 > num2){
                                break;
                            }
                        }
                    break;
                        
                    default:
                        num1 = difficulty;
                        num2 = difficulty;
                }
                
                
                <!--Update-->
                document.getElementById("operator").innerHTML = '-';
                document.getElementById("firstNumber").innerHTML = num1;
                document.getElementById("secondNumber").innerHTML = num2;
                updateIQuestion(num1, '-', num2);
            }


function updateAdd(difficulty){ 
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
                        num1 = difficulty;
                        num2 = difficulty;
                }  
                <!--Update-->
                document.getElementById("operator").innerHTML = '+';
                document.getElementById("firstNumber").innerHTML = num1;
                document.getElementById("secondNumber").innerHTML = num2;
                updateIQuestion(num1, '+', num2);
            }

/**
//needs answer update
function updateRoot(difficulty){
                
                var num1 = 0;
                var num2 = 0;
    
                <!--Generate-->
                switch(difficulty) {
                
                    case 1:
                        num1 = 2;
                        num2 = Math.floor(Math.random() * 10);
                    break;
                        
                    case 2:
                        num1 = 3;
                        num2 = Math.floor(5+Math.random() * 20);
                    break;
                        
                    case 3:
                        num1 = 2;
                        num2 = Math.floor(10+Math.random() * 50);
                    break;
                    
                    case 4:
                        num1 = 2;
                        num2 = Math.floor(20+Math.random() * 100);
                    break;
                        
                    case 5:
                        num1 = 3;
                        num2 = Math.floor(1000+Math.random() * 4000);
                    break;
                        
                    default:
                        num1 = difficulty;
                        num2 = difficulty;
                }
                
                
                <!--Update-->
                document.getElementById("operator").innerHTML = 'th root of';
                document.getElementById("firstNumber").innerHTML = num1;
                document.getElementById("secondNumber").innerHTML = num2;
                
            }


**/
function IncrementScore(number){
    var score = parseInt(localStorage.getItem("Score"));
    score += number;
    localStorage.setItem("Score", score);
}

function updateIQuestion(firstNumber, operator, secondNumber){
    var thing = firstNumber + " " + operator + " " + secondNumber + '<br>';
    iQuestion += thing;
    localStorage.setItem("IQuestion", iQuestion);
}

function updateIAnswer(answer){
    var thing = answer + '<br>';
    iAnswer += thing;
    localStorage.setItem("IAnswer", iAnswer);
}

function updateICorrect(correct){
    var thing = correct + '<br>'
    iCorrect += thing;
    localStorage.setItem("ICorrect", iCorrect);
    
}

function clearQuestionBanks(){
    iQuestion = '';
    iAnswer = '';
    iCorrect = '';
    localStorage.setItem("IQuestion", iQuestion);
    localStorage.setItem("IAnswer", iAnswer);
    localStorage.setItem("ICorrect", iCorrect);
}

function saveScore(){
    var d = new Date();
    var aggregateScoreTemp = localStorage.getItem("Aggregate") + d + "," + localStorage.getItem("Score")+ ",";
    localStorage.setItem("Aggregate", aggregateScoreTemp);
}

function updateDatabase(){
    
}