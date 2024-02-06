const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const {analyzingText} = require("../analyzing_text.js");
let kanji;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
})

app.post("/convert", async (req, res) => {
    const text = await analyzingText(req.body.text);
    kanji = text;
    res.sendStatus(200);
});

app.get("/convert", (req, res) => {
    res.render("index", { kanji })
});

app.listen(3000, err => {
    if(err) console.error(err);
    console.log("Server on port 3000")
});