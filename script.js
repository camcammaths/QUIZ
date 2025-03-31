const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        answers: ["Paris", "Londres", "Rome", "Madrid"],
        correct: 0
    },
    {
        question: "Quel langage est utilisé pour styliser une page web ?",
        answers: ["HTML", "CSS", "JavaScript", "Python"],
        correct: 1
    },
    {
        question: "Combien de planètes y a-t-il dans le système solaire ?",
        answers: ["7", "8", "9", "10"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

function showQuestion() {
    let q = questions[currentQuestionIndex];
    questionElement.innerText = q.question;
    answersElement.innerHTML = "";
    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => checkAnswer(index);
        answersElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].correct) {
        alert("Bonne réponse !");
    } else {
        alert("Mauvaise réponse !");
    }
    nextButton.style.display = "block";
}

nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        alert("Quiz terminé !");
    }
};

showQuestion();
