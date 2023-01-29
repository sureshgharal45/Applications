const quizDB = [
    {
        question: "Q1: What is the full form HTML?",
        a: "Hello to my Land",
        b: "Hey Text Mark-Up Language",
        c: "HyperText Mark-Up Languages",
        d: "HyperText Mark-Up Language",
        ans:"ans4"
    },

    {
        question: "Q2: What is the full form CSS?",
        a: "Cascading Style Sheet",
        b: "Cascading Style Sheets",
        c: "Cascading Style marrk-up Sheet",
        d: "CSS",
        ans:"ans1"
    },

    {
        question: "Q3: What is the full form JS?",
        a: "Hello to my Land",
        b: "Hey Text Mark-Up Language",
        c: "HyperText Mark-Up Language",
        d: "JavaScript",
        ans:"ans4"
    },

    {
        question: "Q4: What is the full form DNS?",
        a: "Domain name System",
        b: "Hey Text Mark-Up Language",
        c: "HyperText Mark-Up Language",
        d: "HyperText Mark-Up Language",
        ans:"ans1"
    }

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#show-score');

let questionsCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList =  quizDB[questionsCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;


}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((currAnsElement) => {
        if(currAnsElement.checked){
            answer = currAnsElement.id;
        }
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((currAnsElement) => currAnsElement.checked = false);
}

submit.addEventListener('click' ,() => {
        const checkedAnswer = getCheckAnswer();
        console.log(checkedAnswer);

        if(checkedAnswer === quizDB[questionsCount].ans){
            score++;
        };

        questionsCount++;

        deselectAll();

        if(questionsCount < quizDB.length){
            loadQuestion();
        }else{
            showScore.innerHTML = `
            <h3> You Scored ${score}/${quizDB.length} </h3>
            <button class = "btn" onclick="location.reload()">Play Again</button> 
            `;
            showScore.classList.remove('scoreArea');
        }
});