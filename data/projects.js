import mimikyuImg from "../src/assets/projects/mimikyu.png"
import bytesImg from "../src/assets/projects/bytes.png";
import jungleImg from "../src/assets/projects/jungle.png";
import schedulerImg from "../src/assets/projects/scheduler.png";
import shortlyImg from "../src/assets/projects/shortly.png";
import portfolioImg from "../src/assets/projects/portfolio.png"

const projectTemplate = {
  title: "",
  image: "",
  description: "",
  live: null,
  repo: "",
  stack: []
}

const portfolio = {
  title: "Portfolio Website",
  image: portfolioImg,
  description: "This website!",
  live: null,
  repo: "https://github.com/penguinboots/penguin-portfolio",
  stack: ["react", "sass", "vite"]
}

const mimikyu = {
  title: "Mimikyu's Day Off",
  image: mimikyuImg,
  description: "Capstone Project: A pokemon-themed roguelite game.",
  live: "https://mimikyus-day-off.vercel.app",
  repo: "https://github.com/penguinboots/poke-rogue",
  stack: ["react", "next", "node", "sass", "prisma"]
}

const shortly = {
  title: "Shortly",
  image: shortlyImg,
  description: "Frontend Mentor Challenge: URL Shortener.",
  live: "https://shortly-url-shortener-five.vercel.app",
  repo: "https://github.com/penguinboots/url-shortener",
  stack: ["react", "sass", "vite"]
}

const jungle = {
  title: "Jungle",
  image: jungleImg,
  description: "A mini e-commerce app.",
  live: "",
  repo: "https://github.com/penguinboots/jungle-rails",
  stack: ["ruby", "rails", "bootstrap", "rspec"]
}

const scheduler = {
  title: "Interview Scheduler",
  image: schedulerImg,
  description: "Single-page React application to schedule interviews.",
  live: null,
  repo: "https://github.com/penguinboots/scheduler",
  stack: ["react", "storybook", "jest", "cypress"]
}

const bytes = {
  title: "Bytes Restaurant",
  image: bytesImg,
  description: "Midterm Group Project: A full-stack food-pickup app.",
  live: null,
  repo: "https://github.com/penguinboots/bytes-restaurant",
  stack: ["ejs", "express", "node", "sass", "postgresql"]
}

const tweeter = {
  title: "Tweeter",
  image: "",
  description: "A simple, single-page Twitter clone.",
  live: null,
  repo: "https://github.com/penguinboots/tweeter",
  stack: ["jquery", "ajax", "express"]
}

export { portfolio, mimikyu, shortly, jungle, scheduler, bytes, tweeter }