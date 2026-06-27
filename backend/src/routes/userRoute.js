const express = require('express');
const prisma = require('../lib/prisma');
const router = express.Router(); 
const jwt = require('jsonwebtoken');
const userAuth = require('../middleware/userAuth');

router.get('/',userAuth,  (req , res)=>{
    res.send('Hello from user route'); 
})
router.post('/signup', async (req, res) => {
    try {
        const { email, password, firstName , lastName } = req.body;

        const user = await prisma.user.create({
            data: {
                email,
                password,
                firstName, 
                lastName
            },
        });

        const  token = jwt.sign({email: user.email}, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({
            message: "User created successfully",
            user,
            token
        });
   
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Something went wrong",
        });
    }
    
});
router.post('/login',userAuth,  async(req,res)=>{
    const{email , password} = req.body; 
    const user = await prisma.user.findUnique({
        where :{
            email ,
        }
    })
    if(!user){
        return res.status(404).json({
            message : "User not found"
        })
    }else 
    try{
        if(user.password != password){
            res.status(401).json({
                message : "Invalid password",
            })
        }else{
            const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({
                message : "Login successful",
                user,
                token
            })
        }
       
    }catch(err){
        res.status(500).json({
            message : "Something went wrong",
        })
    }
   
})
module.exports = router;