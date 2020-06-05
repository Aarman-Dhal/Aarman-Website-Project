//Aarman Website Project
'use strict'

//Event Listeners
document.getElementById('mark-quiz').addEventListener('click', quizResult);


//Event Function
function quizResult() {

    //Inputs
    let mark1 = document.getElementById('first-question').value;
    let mark2 = document.getElementById('second-question').value;
    let mark3 = document.getElementById('third-question').value;
    let mark4 = document.getElementById('fourth-question').value;
    let mark5 = document.getElementById('fifth-question').value;
    let result = 0

    //Mark Answers
    if(mark1 == 1996){
        document.getElementById('result1').innerHTML = 'Correct';
        document.getElementById('result1').style.color = 'green';
        result = result + 1;
        
    }else {
        document.getElementById('result1').innerHTML = 'incorrect';
        document.getElementById('result1').style.color = 'red';
    }

    if(mark2 == 50){
        document.getElementById('result2').innerHTML = 'Correct';
        document.getElementById('result2').style.color = 'green';
        result = result + 1;

    }else {
        document.getElementById('result2').innerHTML = 'incorrect';
        document.getElementById('result2').style.color = 'red';
    }

    if(mark3 == 5){
        document.getElementById('result3').innerHTML = 'Correct';
        document.getElementById('result3').style.color = 'green';
        result = result + 1;

    }else {
        document.getElementById('result3').innerHTML = 'incorrect';
        document.getElementById('result3').style.color = 'red';
    }

    if(mark4 == 2017){
        document.getElementById('result4').innerHTML = 'Correct';
        document.getElementById('result4').style.color = 'green';
        result = result + 1;

    }else {
        document.getElementById('result4').innerHTML = 'incorrect';
        document.getElementById('result4').style.color = 'red';
    }

    if(mark5 == 'Manny Pacquiao'){
        document.getElementById('result5').innerHTML = 'Correct';
        document.getElementById('result5').style.color = 'green';
        result = result + 1; 

    }else {
        document.getElementById('result5').innerHTML = 'incorrect';
        document.getElementById('result5').style.color = 'red';
    }

    //Output Results
    if (result == 0) {
        document.getElementById('total').innerHTML = 'Your Score is 0/5'
    } else if(result == 1) {
        document.getElementById('total').innerHTML = 'Your Score is 1/5'
    } else if(result == 2) {
        document.getElementById('total').innerHTML = 'Your Score is 2/5'
    } else if(result == 3) {
        document.getElementById('total').innerHTML = 'Your Score is 3/5'
    } else if(result == 4){
        document.getElementById('total').innerHTML = 'Your Score is 4/5'
    } else{
        document.getElementById('total').innerHTML = 'Your Score is 5/5'
    }    

} 

