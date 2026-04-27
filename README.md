# Quiz Game

A simple, responsive quiz application built with HTML, CSS and vanilla JavaScript. Use it to test basic web-development knowledge or as a starting point for your own quiz projects.


![Quiz Game Screenshot](./Screenshot%202024-05-01%20200651.png)

## Features

- 30+ ready-to-use multiple-choice questions about HTML, CSS and JavaScript
- Responsive layout that works on desktop and mobile
- Shows final score and a "Play Again" button
- Easy to customize questions and styling

## Demo / Running locally

1. Clone the repository or download the ZIP:

   git clone https://github.com/BinaryVortex/Quiz-Game.git

2. Open `index.html` in your browser (no server required).

## How to play

1. Select the answer for the current question.
2. Click the "Submit" button to move to the next question.
3. At the end you'll see your score and can click "Play Again" to restart.

## Customization

- Questions: edit `script.js` — the `quizData` array contains all questions and answers. Add, remove or modify objects to change the quiz content.
- Styling: edit `style.css` to change fonts, colors and layout.
- Behavior: update `script.js` to add timers, progress bars, high scores, or persist results.

Example question object in `script.js`:

```js
{
  question: "Which language runs in a web browser?",
  a: "Java",
  b: "C",
  c: "Python",
  d: "JavaScript",
  correct: "d",
}
```

## File structure

- `index.html` — markup for the quiz app
- `style.css` — styles and layout
- `script.js` — quiz data and application logic
- `Screenshot 2024-05-01 200651.png` — example screenshot shown above

## Contributing

Contributions are welcome — feel free to open issues or pull requests with improvements, additional questions, or new features.

## License

No license specified. If you want to add a license, create a `LICENSE` file in the repository (for example, MIT or Apache-2.0).
