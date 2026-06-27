const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const userAuth = function(req, res , next){
    const token = req.headers.authrization ; 
    if(!token){
        return res.status(401).json({
            message : "No token provided"
        })
    }else{
       try{const decoded =  jwt.verify(token , process.env.JWT_SECRET); 
       req.user = decoded ;
       next(); 
    }catch(err){
        return res.status(401).json({
            message: "Invalid token",
        });
    }

    }
}
module.exports = userAuth;