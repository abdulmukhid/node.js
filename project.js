const expess = require("express");
const bodyParser = require("body-parser");
// const request= require("request");
app = expess();
app.use(expess.static("public"));
 app.use(bodyParser.urlencoded({ extended: true }));

app.get("/hello", function (req, res) {
    res.sendfile(__dirname + "/project.html");

})
app.post("/", function (req, res) {
    var firstNmae = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
    var result=( firstNmae + ""  + lastName  + email);
    console.log(firstNmae, lastName, email);
    res.send(result);

})
app.listen(3000, () => {
    console.log("server started at port number 3000");

})



