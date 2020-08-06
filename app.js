const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/students", (req, res) => {
    let students = ["Desire","Ibukun","Adebola"]
    res.render("students", {students});
})

app.post("/addStudent", (req, res) => {
    res.send("Post Route Reached")
})


app.listen(3000, () => console.log('app running on port 3000'))