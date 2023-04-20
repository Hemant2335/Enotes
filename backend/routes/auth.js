const express  = require('express');
const router =  express.Router();
const { body, validationResult } = require('express-validator');
const User  = require('../models/User');
const bcrypt = require('bcrypt');
var  jwt = require('jsonwebtoken');


const JWT = "NishantanothernameisD@one";


//Create a User using PORT: "/api/auth/createuser" . Doesn't Req the Auth and can create a new user.

router.post('/createuser',[
  body('Name','Enter a Valid Name').isLength({ min: 3 }),
  body('Email','Enter a Valid Email').isEmail(),
  body('Password','Enter a Valid Password').isLength({ min: 5 }),
],async(req , res)=>{  

  // IF THERE ARE ERRORS THEN IT WILL PRINT THE ARRAY OF ERRORS 
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

  // IF THERE WILL BE NO ERRORS THEN THE USER WILL BE CREATED USING USER SCHEMA
  let user = await User.findOne({Email: req.body.Email});
  if (user){
    return res.status(400).json({error: "Sorry a User with this email already exits or try to login"})
  }

  //THis is the way to create a new user and this is connected to the mongo db in the index file like we are using the THe User.create 
  //THen it will create a User using the User Schema format .. 

  const salt = await bcrypt.genSalt(10);
  const secpass  = await bcrypt.hash(req.body.Password , salt) ;

  user  = await User.create({
      Name: req.body.Name,
      Email: req.body.Email,
      Password: secpass,
    }).then(user=>{
      const data = {
        user :{
          id: user.id
        }
      }
  
      const authtoken = jwt.sign(data , JWT);
      res.json({authtoken});
      }).catch((err)=>{console.log("Error Has Recieved"); res.status(500).send("Some Error HAs Occured");
    })

    
})

module.exports = router ; 