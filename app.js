const express = require("express");
const cors = require("cors");

const OverwatchHeroControllers = require("./Controllers/OverwatchHeroControllers.js");

//configuration
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("Welcome to the OverWatch Collector's App");
});

app.use("/OverwatchHero", OverwatchHeroControllers);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;