const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    a: "<style>",
    b: "<script>",
    c: "<link>",
    d: "<css>",
    correct: "a",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    a: "<break>",
    b: "<lb>",
    c: "<br>",
    d: "<line>",
    correct: "c",
  },
  {
    question: "Which CSS property controls the text size?",
    a: "font-size",
    b: "text-size",
    c: "font-style",
    d: "text-style",
    correct: "a",
  },
  {
    question: "Which HTML attribute specifies an alternative text for an image, if the image cannot be displayed?",
    a: "alt",
    b: "src",
    c: "title",
    d: "href",
    correct: "a",
  },
  {
    question: "How do you create a list in HTML?",
    a: "<ol>",
    b: "<ul>",
    c: "<list>",
    d: "<li>",
    correct: "b",
  },
  {
    question: "What is the default value of the position property in CSS?",
    a: "static",
    b: "relative",
    c: "absolute",
    d: "fixed",
    correct: "a",
  },
  {
    question: "Which CSS property is used to change the background color?",
    a: "background-color",
    b: "color",
    c: "bgcolor",
    d: "background",
    correct: "a",
  },
  {
    question: "What does the 'id' attribute in HTML do?",
    a: "Identifies an HTML element uniquely",
    b: "Sets the style of the element",
    c: "Sets the font of the element",
    d: "Creates a hyperlink",
    correct: "a",
  },
  {
    question: "Which HTML tag is used to define a table?",
    a: "<table>",
    b: "<tab>",
    c: "<t>",
    d: "<tr>",
    correct: "a",
  },
  {
    question: "Which HTML tag is used to define a hyperlink?",
    a: "<a>",
    b: "<link>",
    c: "<href>",
    d: "<url>",
    correct: "a",
  },
  {
    question: "What is the purpose of the <meta> tag in HTML?",
    a: "Provides metadata about the HTML document",
    b: "Defines a section in the HTML document",
    c: "Links to external CSS files",
    d: "Specifies the document title",
    correct: "a",
  },
  {
    question: "How do you add a comment in CSS?",
    a: "// comment",
    b: "<!-- comment -->",
    c: "/* comment */",
    d: "' comment '",
    correct: "c",
  },
  {
    question: "Which JavaScript method is used to change the content of an HTML element?",
    a: "getElementById",
    b: "querySelector",
    c: "innerHTML",
    d: "setAttribute",
    correct: "c",
  },
  {
    question: "What does the 'display: none;' CSS property do?",
    a: "Hides the element",
    b: "Changes the element's color",
    c: "Sets the element's width to zero",
    d: "Adds padding around the element",
    correct: "a",
  },
  {
    question: "Which property is used to change the font of an element in CSS?",
    a: "font-family",
    b: "font-style",
    c: "font-weight",
    d: "font-size",
    correct: "a",
  },
  {
    question: "What does 'this' keyword refer to in JavaScript?",
    a: "The current object",
    b: "The previous object",
    c: "The global object",
    d: "The parent object",
    correct: "a",
  },
  {
    question: "How can you apply styles to all paragraphs in HTML using CSS?",
    a: "p { ... }",
    b: ".p { ... }",
    c: "#p { ... }",
    d: "paragraph { ... }",
    correct: "a",
  },
  {
    question: "Which CSS property is used to control the layout of multiple columns?",
    a: "column-count",
    b: "columns",
    c: "column-width",
    d: "column-gap",
    correct: "a",
  },
  {
    question: "Which HTML element is used to define the footer for a document or section?",
    a: "<footer>",
    b: "<bottom>",
    c: "<section>",
    d: "<end>",
    correct: "a",
  },
  {
    question: "How do you center align a block element in CSS?",
    a: "margin: auto;",
    b: "text-align: center;",
    c: "align: center;",
    d: "center: block;",
    correct: "a",
  },
  {
    question: "Which CSS property is used to control the space between the content and the border of an element?",
    a: "padding",
    b: "margin",
    c: "border-spacing",
    d: "space",
    correct: "a",
  },
  {
    question: "What is the use of the 'href' attribute in the <a> tag?",
    a: "Specifies the URL of the page the link goes to",
    b: "Defines the style of the link",
    c: "Sets the target of the link",
    d: "Specifies the link text",
    correct: "a",
  },
  {
    question: "How do you create a comment in JavaScript?",
    a: "// comment",
    b: "<!-- comment -->",
    c: "/* comment */",
    d: "' comment '",
    correct: "a",
  },
  {
    question: "Which CSS property is used to control the visibility of an element?",
    a: "visibility",
    b: "display",
    c: "opacity",
    d: "show",
    correct: "a",
  },
  {
    question: "What is the default display value of the <div> tag?",
    a: "block",
    b: "inline",
    c: "inline-block",
    d: "none",
    correct: "a",
  },
  {
    question: "Which HTML attribute specifies the URL of an image?",
    a: "src",
    b: "alt",
    c: "href",
    d: "link",
    correct: "a",
  },
  {
    question: "What is the purpose of the <title> tag in HTML?",
    a: "Defines the title of the document",
    b: "Specifies the document type",
    c: "Links to external resources",
    d: "Defines metadata about the document",
    correct: "a",
  },
  {
    question: "Which property is used to set the width of an element in CSS?",
    a: "width",
    b: "height",
    c: "max-width",
    d: "size",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `;
    }
  }
});
