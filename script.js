/*show id of the span*/
var answerMap ={
    "question1": "option2",
    "question2": "option2",
    "question3": "option4",
    "question4": "option2",
    "question5": "option2",
    "question6": "option3",
    "question7": "option2",
    "question8": "option1",
    "question9": "option3",
    "question10": "option1"
}

var score = {}

function reply_click(e) {
    console.log(e.id);
    let option_clicked=e.id;
    let tempvar=option_clicked.split('_');
    let question=tempvar[0];
    let option=tempvar[1];
    // console.log(question);
    // console.log(option);
    correct_option = answerMap[question];
    if(option == correct_option){
        console.log("correct answer");
        if(question in score){
            alert("question already answered");
        }
        else{
            document.getElementById(option_clicked).style.backgroundColor = "#00ff00";
            score[question] = true;
        }
    }
    else{
        console.log("wrong");
        if(question in score){
            alert("question already answered");
        }
        else{
            document.getElementById(option_clicked).style.backgroundColor = "#ff0000";
            score[question] = false;
        }
        
    }
}

function calculateScore() {
    //console.log(score);
    total_questions = 10
    score_count = 0
    answered_questions = Object.keys(score);
    attended_questions = answered_questions.length;
    answered_questions.forEach((question, index) => {
        if(score[question] === true){
            score_count++;
        }
    });
    //console.log("Total Questions : "+total_questions);
    //console.log("Attended Questions : "+attended_questions);
    //console.log("Correct Answered Questions : "+score_count);
    //console.log("Wrong Answered Questions : "+ (attended_questions - score_count));
    //console.log("Missed Questions : "+ (total_questions - attended_questions));

alert('You scored' +score_count+ 'out of' +total_questions);
//display results
var results=document.getElementById('results');
results.innerHTML='<h3>You Scored <span>'+score_count+'</span> out of <span>'+total_questions+'</span></h3>';
return false;
}

