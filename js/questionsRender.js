const quizData = [
  {
    question: "How is a forEach statement different from a for statement?",
    a: "A. Only a for statement uses a callback function.",
    b: "B. A for statement is generic, but a forEach statement can be used only with an array.",
    c: "C. Only a forEach statement lets you specify your own iterator.",
    d: "D. A forEach statement is generic, but a for statement can be used only with an array.",
    correct: "b",
  },
  {
    question:
      "Which statement is the correct way to create a variable called rate and assign it the value 100?",
    a: "A. let rate = 100;",
    b: "B. let 100 = rate",
    c: "C. 100 = let rate",
    d: "D. rate = 100",
    correct: "a",
  },
  {
    question:
      "Which statement creates a new object using the Person constructor? Which statement creates a new Person object called `student`?",
    a: "A. var student = new Person();",
    b: "B. var student = construct Person;",
    c: "C. var student = Person();",
    d: "D. var student = construct Person();",
    correct: "a",
  },
  {
    question: "How does a function create a closure?",
    a: "A. It reloads the document whenever the value changes.",
    b: "B. It returns a reference to a variable in its parent scope.",
    c: "C. It completes execution without returning.",
    d: "D. It copies a local variable to the global scope.",
    correct: "b",
  },
  {
    question:
      "How would you reference the text 'avenue' in the code shown? let roadTypes = ['street', 'road', 'avenue', 'circle'];",
    a: "A. roadTypes.2",
    b: "B. roadTypes[3]",
    c: "C. roadTypes.3",
    d: "D. roadTypes[2]",
    correct: "d",
  },
  {
    question:
      "Which property references the DOM object that dispatched an event?",
    a: "A. self",
    b: "B. object",
    c: "C. target",
    d: "D. source",
    correct: "c",
  },
  {
    question: "Which method converts JSON data to a JavaScript object?",
    a: "A. JSON.fromString()",
    b: "B. JSON.parse()",
    c: "C. JSON.toObject()",
    d: "D. JSON.stringify()",
    correct: "b",
  },
  {
    question: "When would you use a conditional statement?",
    a: "A. When you want to reuse a set of statements multiple times.",
    b: "B. When you want your code to choose between multiple options.",
    c: "C. When you want to group data together.",
    d: "D. When you want to loop through a group of statement.",
    correct: "b",
  },
  {
    question:
      "Which Object method returns an iterable that can be used to iterate over the properties of an object?",
    a: "A. Object.get()",
    b: "B. Object.loop()",
    c: "C. Object.each()",
    d: "D. Object.keys()",
    correct: "d",
  },
  {
    question:
      "What is one difference between collections created with Map and collections created with Object?",
    a: "A. You can iterate over values in a Map in their insertion order.",
    b: "B. You can count the records in a Map with a single method call.",
    c: "C. Keys in Maps can be strings.",
    d: "D. You can access values in a Map without iterating over the whole collection.",
    correct: "b",
  },
  {
    question: "Which of the following is not a keyword in JavaScript?",
    a: "A. this",
    b: "B. catch",
    c: "C. function",
    d: "D. array",
    correct: "d",
  },
  {
    question:
      "Which of the following operators can be used to do a short-circuit evaluation?",
    a: "A. ++",
    b: "B. --",
    c: "C. ==",
    d: "D. ||",
  },
  {
    question:
      "Which statement sets the Person constructor as the parent of the Student constructor in the prototype chain?",
    a: "A. Student.parent = Person;",
    b: "B. Student.prototype = new Person();",
    c: "C. Student.prototype = Person;",
    d: "D. Student.prototype = Person();",
    correct: "b",
  },
  {
    question:
      "Why would you include a `use strict` statement in a JavaScript file?",
    a: "A. to tell parsers to interpret your JavaScript syntax loosely",
    b: "B. to tell parsers to enforce all JavaScript syntax rules when processing your code",
    c: "C. to instruct the browser to automatically fix any errors it finds in the code",
    d: "D. to enable ES6 features in your code",
    correct: "b",
  },
  {
    question:
      "Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?",
    a: "A. all of them",
    b: "B.const",
    c: "C. var",
    d: "D.let",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
let progressText = document.querySelector("#progressText");
progressText.innerText = `${1} of ${quizData.length}`;
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  console.log(questionEl.innerText);
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    let progressText = document.querySelector("#progressText");

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      progressText.innerText = `${currentQuiz + 1} of ${quizData.length}`;
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2 class="total-score">You answered ${score}/${quizData.length} questions correctly.</h2>
        <button onclick="location.reload()" id="reload">Reload</button>
        `;
    }
  }
});
