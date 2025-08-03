// Quiz Questions (10 questions for longer app)
const quizData = [
  {
    question: "1. What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "None of the above"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "2. What is the correct syntax to link an external JavaScript file?",
    options: [
      "<script src='script.js'>",
      "<script link='script.js'>",
      "<js src='script.js'>",
      "<javascript href='script.js'>"
    ],
    answer: "<script src='script.js'>"
  },
  {
    question: "3. Which tag is used to define a paragraph in HTML?",
    options: [
      "<p>",
      "<para>",
      "<paragraph>",
      "<text>"
    ],
    answer: "<p>"
  },
  {
    question: "4. What does CSS stand for?",
    options: [
      "Creative Style Sheet",
      "Cascading Style Sheets",
      "Colorful Style Syntax",
      "Computer Style Sheet"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "5. Which one is a JavaScript framework?",
    options: [
      "React",
      "Laravel",
      "Django",
      "Bootstrap"
    ],
    answer: "React"
  },
  {
    question: "6. How do you declare a JavaScript variable?",
    options: [
      "v myName = 'John';",
      "let myName = 'John';",
      "const: myName = 'John';",
      "dim myName = 'John';"
    ],
    answer: "let myName = 'John';"
  },
  {
    question: "7. What is the correct way to write a comment in JavaScript?",
    options: [
      "// This is a comment",
      "# This is a comment",
      "<!-- This is a comment -->",
      "** This is a comment"
    ],
    answer: "// This is a comment"
  },
  {
    question: "8. What does DOM stand for?",
    options: [
      "Document Object Model",
      "Display Object Management",
      "Digital Ordinance Model",
      "Data Object Method"
    ],
    answer: "Document Object Model"
  },
  {
    question: "9. Which keyword is used to define a constant in JavaScript?",
    options: [
      "let",
      "var",
      "const",
      "constant"
    ],
    answer: "const"
  },
  {
    question: "10. Which method is used to write something to the console in JS?",
    options: [
      "console.write()",
      "document.console()",
      "console.log()",
      "log.console()"
    ],
    answer: "console.log()"
  }
];

let currentQuestion = 0;
let score = 0;

// Load first question
window.onload = loadQuestion;

// Load current question
function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const optionsBox = document.getElementById("options");
  optionsBox.innerHTML = "";

  // Add all options
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "block w-full bg-gray-100 hover:bg-blue-100 text-left px-6 py-3 rounded-lg border text-lg";
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsBox.appendChild(btn);
  });
}

// Check the answer and highlight
function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  const allOptions = document.querySelectorAll("#options button");

  allOptions.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.classList.add("bg-green-200", "font-bold");
    } else if (btn.textContent === selected) {
      btn.classList.add("bg-red-200");
    }
  });

  if (selected === correct) score++;
}

// Move to next question or show result
function nextQuestion() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");
    document.getElementById("score").textContent = `Your Score: ${score} out of ${quizData.length}`;
  }
}

// Restart quiz
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result-box").classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  loadQuestion();
}
