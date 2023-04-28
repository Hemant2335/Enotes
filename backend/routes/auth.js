const express  = require('express');
const router =  express.Router();
const { body, validationResult } = require('express-validator');
const User  = require('../models/User');
const bcrypt = require('bcrypt');
var  jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser')

const JWT = "NishantanothernameisD@one";


//Route1:  Create a User using PORT: "/api/auth/createuser" . Doesn't Req the Auth and can create a new user.

router.post('/createuser',[
  body('Name','Enter a Valid Name').isLength({ min: 3 }),
  body('Email','Enter a Valid Email').isEmail(),
  body('Password','Enter a Valid Password').isLength({ min: 5 }),
],async(req , res)=>{  
  let success = false;
  // IF THERE ARE ERRORS THEN IT WILL PRINT THE ARRAY OF ERRORS 
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success , errors: errors.array() });
    }

  // IF THERE WILL BE NO ERRORS THEN THE USER WILL BE CREATED USING USER SCHEMA
  let user = await User.findOne({Email: req.body.Email});
  if (user){
    return res.status(400).json({success ,  error: "Sorry a User with this email already exits or try to login"})
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
      success = true
      const authtoken = jwt.sign(data , JWT);
      res.json({success , authtoken});
      }).catch((err)=>{console.log("Error Has Recieved"); res.status(500).send("Some Error HAs Occured");
    })

    
})

//Route 2  :  Authenticate a user using : Post "/api/auth/login" . NO login required

router.post('/login',[
  body('Email','Enter a Valid Email').isEmail(),
  body('Password','Password Cannot be Blank').exists(),
], async(req , res)=>{
  let success = false ; 
  // IF THERE ARE ERRORS THEN IT WILL PRINT THE ARRAY OF ERRORS 
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success , errors: errors.array() });
    }

    const {Email , Password} = req.body;
    try{

      let user = await User.findOne({Email});
      if (!user){
        return res.status(400).json({success ,  error : "Please Check Wheather the Email and the Password are Correct"});
      }

      const passcomp  = await bcrypt.compare(Password , user.Password);
      if (!passcomp)
      {
        return res.status(400).json({success ,  error : "Please Check Wheather the Email and the Password are Correct"});
      }

      const data = {
        user :{
          id: user.id
        }
      }
      success = true;
      const authtoken = jwt.sign(data , JWT);
      res.json({success , authtoken});

    } catch (error){
      console.log(error.message);
      res.status(500).send("Internal  error Occured");
    }

 })

 //Route 3  :  To get the user details using : Post "/api/auth/getuser" .  login required

 router.post('/getuser', fetchuser ,async(req , res)=>{

// So this is the next function 
// where by using the user we send we have accesed the the user details by the id 
// and sended them using the response (res)
 
 try {
  userID = req.user.id;
  const user = await User.findById(userID).select("-Password")
  res.send(user)
  
 } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal  error Occured");
 }
})

const Note = require('../models/Notes');


//<---------------------------------------------------------notes-------------------------------------------------------------->

// I am doing the Notes parts Also in the auth file because i don't know why it is not running 
//in the notes but running in auth

// ROUTE 1: Get All the Notes using: GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: To Add a new  Note : Post "/api/notes/addnote". Login required
router.post('/addnote', fetchuser,[
  body('Title','Enter a Valid Title').isLength({ min: 2 }),
  body('Task','Enter a Valid Task').isLength({ min: 2 }),
]  , async (req, res) => {
  try {
    const {Title ,Task, Tag }  = req.body;
  // IF THERE ARE ERRORS THEN IT WILL PRINT THE ARRAY OF ERRORS 
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // In this Part e have taken the notes as the argument from the user  and passed it to the note.save to save it 
    // then we have showed in the console using savednote variable 

    const note = new Note ({
      Title , Task , Tag , user : req.user.id 
    })
    const savednote = await note.save()

    res.json(savednote)
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");  
  }
})


  // ROUTE 3: To Update  a existing Note : put "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {

  const {Title , Task , Tag}  =  req.body ;
  try {
  // Create a new note Object
  const newNote = {};
  if(Title){newNote.Title = Title }
  if (Task){newNote.Task = Task }
  if (Tag) {newNote.Tag = Tag }

  //Find The Note to be updated and update
  let note = await Note.findById(req.params.id);
  if (!note)
  {
    return res.status(404).send("Not Found ")
  }

  if (note.user.toString() !== req.user.id)
  {
    return res.status(401).send("Acess Denied");
  }

  note = await Note.findByIdAndUpdate(req.params.id,{$set : newNote} ,{new :true} )
  res.json(note);
}
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error"); 
    
  }
    
})


// ROUTE 4: To Delete a existing Note : Delete "/api/notes/deletenote". Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
  //Find The Note to be Deleted and Delete
  try {
    
  
  let note = await Note.findById(req.params.id);
  if (!note)
  {
    return res.status(404).send("Not Found ")
  }

  //Allow Only if the User is correct

  if (note.user.toString() !== req.user.id)
  {
    return res.status(401).send("Acess Denied");
  }

  note = await Note.findByIdAndDelete(req.params.id)
  res.json({"Sucess": "the note has been deleted", note : note});
} catch (error) {
  console.error(error.message);
    res.status(500).send("Internal Server Error");
    
}
    
})

module.exports = router ; 