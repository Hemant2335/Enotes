

// this is simply  a middle ware which is being used the validate the token and to retrive the id from the token
//we have send auth token as the header (or the input in the req) then using JWT we have decoded the token
//and then saved that inside the user and run the next function wich is in the auth file 
// now move to auth file


var  jwt = require('jsonwebtoken');
const JWT = "NishantanothernameisD@one";

const fetchuser = (req , res , next )=>{

    // Gett the user Id from the authtoken and add id to the object
    const token = req.header('auth-token');
    if(!token)
    {
        res.status(401).send({error:"Please Authenticate using a valid token"})
    }
    try {
        const data  = jwt.verify(token,JWT);
        req.user = data.user ;
        next(); 
    } catch (error) {
        res.send(401).send("Internal Error Occured")        
    }

    
}


module.exports =  fetchuser ;
