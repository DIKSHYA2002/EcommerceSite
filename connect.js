const mongoose = require('mongoose');
exports.dbconn = async ()=>{
    try{
        const connectionString = "mongodb+srv://dikshya2002:dikshya@nodeexpressprojects.nx3r9.mongodb.net/Allproducts2?retryWrites=true&w=majority";
        await mongoose.connect(connectionString , {
            useNewUrlParser:true , useUnifiedTopology:true});
        console.log('Database Connected');
    }
    catch(err)
    {
       console.log( `database connection error  ${err.message}`);
    }
}
