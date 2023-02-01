const mongoose=require("mongoose")
const loginSchema=new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }

})
const Ragister=new mongoose.model("Ragister",loginSchema);

module.exports=Ragister;