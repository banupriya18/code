var express = require("express");
var fs = require("fs");
let path = require("path");

var app = express();
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
let users = [
  {
    name: "Abhi"
  },
  {
    name: "Vijay"
  },
  {
    name: "Suhas"
  },
  {
    name: "Arun"
  },
  {
    name: "Ankur"
  }
];
app.get("/", function(req, res) {
  res.render("index", {
    message: req.query.message || "Hey!!!",
    foo: req.query.foo,
    bar: `Hi, ${users[2].name}`
  });
  //res.send("Hello world");
  //let indexFile = fs.readFileSync("./index.html");
  //res.sendFile(__dirname + "/index.html")
});

// app.get("/", function(req, res) {
//     //res.send(__dirname);
//     let pathString = path.join(__dirname, "index.pug");
//     //res.sendFile(pathString);
//     res.render(pathString,{
//         message: req.query.message || "Hey!!!",
//         foo: req.query.foo,
//         bar: `Hi, ${users[2].name}`
//     });
//   //res.send("Hello world");
//   //let indexFile = fs.readFileSync("./index.html");
//   //res.sendFile(__dirname + "/index.html")
// });

app.get("/users", function(req, res) {
  res.json(users);
});

app.post("/users", function(req, res) {
  //res.send(req.body);
  users.push({
    name: req.body.name
  });
  res.json(users);
});

app.listen(3000);
