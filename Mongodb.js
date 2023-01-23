const mongoose=require("mongoose");


const dbconnection = () => {
    mongoose.connect("mongodb://localhost:27017/calculator", { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("mongodb connection successfull");

        })
        .catch(() => {
            console.log("sum error ");
        });
};

export default dbconnection;