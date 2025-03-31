const questions = [
    { question: "Quel est le plus grand multiple de 5 inférieur à 50 ?", answers: ["40", "45", "50", "55"], correct: 2 },
    { question: "Combien y a-t-il de multiples de 3 entre 1 et 20 ?", answers: ["5", "6", "7", "8"], correct: 1 },
    { question: "Quel est le plus petit multiple commun de 4 et 6 ?", answers: ["8", "12", "16", "24"], correct: 1 },
    { question: "Quel est le plus grand multiple de 7 inférieur à 100 ?", answers: ["91", "93", "98", "105"], correct: 2 },
    { question: "Combien de multiples de 2 y a-t-il entre 1 et 10 ?", answers: ["4", "5", "6", "7"], correct: 1 }
];

let currentQuestionIndex = 0;
let score = 0;
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const quizElement = document.getElementById("quiz");

function showQuestion() {
    let q = questions[currentQuestionIndex];
    questionElement.innerText = q.question;
    answersElement.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => checkAnswer(index, button);
        answersElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex, button) {
    let correctIndex = questions[currentQuestionIndex].correct;
    
    if (selectedIndex === correctIndex) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    document.querySelectorAll("#answers button").forEach(btn => btn.disabled = true);
    nextButton.style.display = "block";
}

nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        showResult();
    }
};

function showResult() {
    quizElement.classList.add("hidden");
    resultElement.classList.remove("hidden");
    scoreElement.innerText = `⭐ Votre score : ${score} / ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizElement.classList.remove("hidden");
    resultElement.classList.add("hidden");
    showQuestion();
}

showQuestion();
