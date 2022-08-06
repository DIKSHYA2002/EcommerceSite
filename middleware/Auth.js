const jwt = require('jsonwebtoken');


const Auth = async (req,res,next)=>{
    try {
        const token = req.headers['x-auth-token'];
        if(!token)
        {
            return res.status(401).json({
                message:"missing Auth token"
            })
        }
        if( jwt.verify(token,'websitesilicon'))
        {
            next();
        }
        else{
           return res.status(401).json({
                message:"something went wrong"
            })
        }
    } catch (error) {
       return res.status(500).json({
            message:"unauthorised"
        })
    }
}


module.exports = Auth;

