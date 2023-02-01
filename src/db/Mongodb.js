const mongoose=require("mongoose");
mongoose.set('strictQuery', false);

    mongoose.connect("mongodb://localhost:27017/loginform", { 
    useNewUrlParser: true,
     useUnifiedTopology: true
     })
        .then(() => {
            console.log("mongodb connection successfull");

        })
        .catch(() => {
            console.log("sum error ");
        });
