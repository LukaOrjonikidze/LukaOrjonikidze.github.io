const quizData = [{
    question: "In which year was Tea Invenvted?",
    a: "123",
    b: "2737 BC",
    c: "500 BC",
    d: "0",
    correct: "b",
}, {
    question: "In which country was Tea Invented?",
    a: "Japan",
    b: "India",
    c: "China",
    d: "England",
    correct: "c",
}, {
    question: "What matters most when steeping a cup or pot of tea?",
    a: "Time",
    b: "Temperature",
    c: "Both Time and Temperature",
    d: "Neither Time nor Temperature",
    correct: "c",
}, {
    question: "If you're enjoying a pot of afternoon tea accompanied by scones, sweets and finger sandwiches, what's that called?",
    a: "High tea",
    b: "Low tea",
    c: "Proper tea",
    d: "Modern tea",
    correct: "b",
}, {
    question: "Tea was originally used for what purpose",
    a: "Medicinal",
    b: "Cooking",
    c: "Cleaning",
    d: "Art",
    correct: "a",
}];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');;
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `;
        }
    }
})