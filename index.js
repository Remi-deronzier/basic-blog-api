const express = require("express");
const { nanoid } = require("nanoid");
const cors = require("cors");
require("dotenv").config();

const app = express();

const listOfArticles = [
  {
    id: nanoid(),
    slug: "pre-rendering",
    date: "January 2, 2020",
    title: "Two forms of Pre-rendering",
  },
  {
    id: nanoid(),
    slug: "ssr-ssg",
    date: "January 2, 2020",
    title: "When to Use Static Generation v.s Server-side Rendering",
  },
];

app.use(cors());

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("GET /");
  res.json(listOfArticles);
});

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port: ${process.env.PORT}`)
);
