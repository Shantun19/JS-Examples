const quizData = [
    {
        "id": 1,
        "question": "What is the capital of France?",
        "options": ["Paris", "Rome", "Berlin", "Madrid"],
        "answer": "Paris"
    },
    {
        "id": 2,
        "question": "Which planet is known as the Red Planet?",
        "options": ["Mars", "Venus", "Earth", "Jupiter"],
        "answer": "Mars"
    },
    {
        "id": 3,
        "question": "What is the largest mammal in the world?",
        "options": ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        "answer": "Blue Whale"
    },
    {
        "id": 4,
        "question": "Who wrote 'Romeo and Juliet'?",
        "options": ["William Shakespeare", "Mark Twain", "J.K. Rowling", "George Orwell"],
        "answer": "William Shakespeare"
    },
    {
        "id": 5,
        "question": "What is the hardest natural substance on Earth?",
        "options": ["Gold", "Iron", "Diamond", "Silver"],
        "answer": "Diamond"
    }
];

// Track current question and score
let currentQuestionIndex = 0;
let score = 0;
let correctAnswer = 0;
let wrongAnswer = 0;

// DOM elements
const questionElement = document.querySelector('.question');
const answerButtons = document.querySelectorAll('.answer__button__container button');
const totalQuestionsElement = document.querySelector('h4 span');
const resultModal = document.getElementById('resultModal');
const totalQuestionsElementModal = document.getElementById('totalQuestions');
const correctAnswersElement = document.getElementById('correctAnswers');
const wrongAnswersElement = document.getElementById('wrongAnswers');
const finalScoreElement = document.getElementById('finalScore');
const closeModalButton = document.getElementById('closeModal');

totalQuestionsElement.textContent = quizData.length;

// Function to load a question and its options
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = `${currentQuestion.id}. ${currentQuestion.question}`;
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.disabled = false;
    });
}

// Check if the answer is correct or not
function checkAnswer(selectedAnswer, button) {
    const currentQuestion = quizData[currentQuestionIndex];
    selectedAnswer === currentQuestion.answer ? correctAnswer++ : wrongAnswer++;
    answerButtons.forEach(btn => btn.disabled = true);
    currentQuestionIndex++;
    currentQuestionIndex < quizData.length ? setTimeout(loadQuestion, 1000) : setTimeout(showResults, 1000);
}

// Function to show the final result in the modal
function showResults() {
    totalQuestionsElementModal.textContent = quizData.length;
    correctAnswersElement.textContent = correctAnswer;
    wrongAnswersElement.textContent = wrongAnswer;
    finalScoreElement.textContent = correctAnswer;
    resultModal.style.display = "block";
}

closeModalButton.addEventListener('click', () => {
    resultModal.style.display = "none";
    resetQuiz();
});

// Reset quiz data
function resetQuiz() {
    currentQuestionIndex = 0;
    correctAnswer = 0;
    wrongAnswer = 0;
    score = 0;
    loadQuestion();
}

// Attach event listeners to buttons
answerButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const selectedAnswer = e.target.textContent;
        checkAnswer(selectedAnswer, button);
    });
});

loadQuestion();
