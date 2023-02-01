const express = require("express");
const bodyParser = require("body-parser");
const path=require("path")
const hbs=require("hbs");
app=express();

const port=process.env.PORT ||3000
// const request= require("request");
const static_path=path.join(__dirname,"../public");
const templete_path=path.join(__dirname,"../templets/views")
const partials_path=path.join(__dirname,"../templets/partials")
app.use(express.json());

require("../src/db/Mongodb")
app.use(express.static(static_path ));
 app.use(bodyParser.urlencoded({ extended: true }));
 app.set("view engine","hbs");
 app.set("views",templete_path);
 hbs.registerPartials(partials_path);

app.get("/", function (req, res) {
    res.render("index");

})
// app.post("/", function (req, res) {
//     var firstNmae = req.body.fName;
//     var lastName = req.body.lName;
//     var email = req.body.email;
//     var result=( firstNmae + ""  + lastName  + email);
//     console.log(firstNmae, lastName, email);
//     res.send(result);

// })
app.listen(port, () => {
    console.log(`the server started at port number ${port}`);

})



