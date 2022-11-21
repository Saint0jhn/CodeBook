const quizDB = [
    {
        question : "Q1: What is the full form of the HTML?",
        a : "Hello to my Land",
        b : "Hey Text mark Language",
        c : "Hyper Text markup Language",
        d : "Hy Text Makuna Language",
        ans : "ans3"
    },
    {
        question : "Q2: What is the full form of the CSS?",
        a : "Cascading Style sheets",
        b : "Hey Text mark Language",
        c : "Hyper Text markup Language",
        d : "Hy Text Makuna Language",
        ans : "ans1"
    },
    {
        question : "Q3: What is the full form of the HTTP?",
        a : "Hello to my Land",
        b : "Hey Text mark Language",
        c : "Hyper Text markup Language",
        d : "Hypertext Transfer Protocol",
        ans : "ans4"
    },
    {
        question : "Q4: What is the full form of the JS?",
        a : "Java Script",
        b : "Hey Text mark Language",
        c : "Hyper Text markup Language",
        d : "Hy Text Makuna Language",
        ans : "ans1"
    }
];
var timertime;
const questionM = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScoree = document.querySelector('#showScore');
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    

    startTimer();
    
    const questionList = quizDB[questionCount];
    
    questionM.innerText = questionList.question ;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    
}

//loadQuestion();

const getCheckedAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {

    clearInterval(counter);
   
    const checkedAnswer = getCheckedAnswer();

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScoree.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} </h3>
        <button class="btn" onClick="location.reload()">Play Again</button>
        `

        showScoree.classList.remove('scoreArea');
    }

    
});

function startTimer()
    {
        timertime=15;
        counter = setInterval(function()
        {
            if(timertime <= 0)
                {
                    clearInterval(counter);
                    timeText.textContent = 'Time Off';
                }
            
                timeCount.textContent = timertime;
                timertime-=1;
        },1000);
    }
       