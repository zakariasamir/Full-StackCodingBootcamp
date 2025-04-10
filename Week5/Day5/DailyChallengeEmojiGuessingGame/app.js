import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import session from "express-session";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🐱", name: "Cat" },
  { emoji: "⚽", name: "Soccer Ball" },
  { emoji: "😀", name: "Grinning Face" },
  { emoji: "😂", name: "Face with Tears of Joy" },
  { emoji: "😍", name: "Smiling Face with Heart-Eyes" },
  { emoji: "🤔", name: "Thinking Face" },
  { emoji: "😎", name: "Smiling Face with Sunglasses" },
  { emoji: "😭", name: "Loudly Crying Face" },
  { emoji: "🥳", name: "Partying Face" },
  { emoji: "👍", name: "Thumbs Up" },
  { emoji: "🔥", name: "Fire" },
  { emoji: "❤️", name: "Red Heart" },
  { emoji: "🎉", name: "Party Popper" },
  { emoji: "💯", name: "Hundred Points" },
  { emoji: "👀", name: "Eyes" },
  { emoji: "🙏", name: "Folded Hands" },
  { emoji: "😴", name: "Sleeping Face" },
];

let leaderboard = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(
  session({ secret: "emojiSecret", resave: false, saveUninitialized: true })
);

function getRandomQuestion() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const options = [correct.name];

  while (options.length < 4) {
    const randomOption = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!options.includes(randomOption)) options.push(randomOption);
  }

  return {
    emoji: correct.emoji,
    correctAnswer: correct.name,
    options: options.sort(() => Math.random() - 0.5),
  };
}

app.get("/", (req, res) => {
  if (!req.session.username) return res.redirect("/login");

  if (!req.session.score) req.session.score = 0;
  if (!req.session.currentQuestion)
    req.session.currentQuestion = getRandomQuestion();

  res.render("index", {
    username: req.session.username,
    question: req.session.currentQuestion,
    score: req.session.score,
    feedback: null,
    leaderboard,
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { username } = req.body;
  req.session.username = username;
  req.session.score = 0;
  req.session.currentQuestion = getRandomQuestion();
  res.redirect("/");
});

app.post("/guess", (req, res) => {
  if (!req.session.username) return res.redirect("/login");

  const guess = req.body.guess;
  const correct = req.session.currentQuestion.correctAnswer;
  const isCorrect = guess === correct;

  if (isCorrect) req.session.score++;

  const userIndex = leaderboard.findIndex(
    (p) => p.name === req.session.username
  );
  if (userIndex === -1) {
    leaderboard.push({ name: req.session.username, score: req.session.score });
  } else {
    leaderboard[userIndex].score = req.session.score;
  }

  req.session.currentQuestion = getRandomQuestion();

  res.render("index", {
    username: req.session.username,
    question: req.session.currentQuestion,
    score: req.session.score,
    feedback: isCorrect ? "✅ Correct!" : `❌ Wrong! It was "${correct}".`,
    leaderboard: leaderboard.sort((a, b) => b.score - a.score),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});