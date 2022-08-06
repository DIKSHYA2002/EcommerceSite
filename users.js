const {userSchema1} = require('./models/user');
const  { dbconn} = require('./connect');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { user} = require('./models/user');
const  jwt = require('jsonwebtoken');

router.post('/add' ,async(req,res)=>{
    try{
    let {email , password} = await  req.body;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password,salt);

    const user1 = new user({email , password});
    await user1.save();
    return res.status(200).json({
        message:"user saved ",
        user1
    })
}
catch(err)
{
    return res.status(500).json({
        message:"something went wrong ",
        error: err.message
    })
}
})

router.post('/login' , async(req,res)=>{
    try {
        const {email,password}= req.body;
        const user1 = await user.findOne({email:email});
        if(user1)
        {
            const verifyuser = await bcrypt.compare(password, user1.password);
            if(verifyuser)
            {
                const payload= {
                    user1:{
                        id:user1._id
                    }
                }
                const token = jwt.sign(payload,'websitesilicon', {expiresIn:3600});
                
                res.status(200).json(
                {
                    message:"logged in",
                    user:{user_id:user1._id,email:user1.email},
                    token
                })
                
            }
            else{
                res.status(401).json({
                    message:"wrong username password"
                })
            }
            
        }
        else{
            res.status(401).json({
                message:"wrong username password"
            })

        }
    } catch (error) {
        res.status(500).json({
            message:"something went wrong"
        })
    }
    

})
module.exports = router;