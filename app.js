const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
let students = ["Desire","Ibukun","Adebola"]

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/students", (req, res) => {
    res.render("students", {students});
})

app.post("/addStudent", (req, res) => {
    students.push(req.body.studentName)
    res.redirect("/students")
})


app.listen(3000, () => console.log('app running on port 3000'))