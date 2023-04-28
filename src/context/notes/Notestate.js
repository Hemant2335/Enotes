import notecontext from "./Notecontext";
import { useState } from "react";

const Notestate = (props)=>{

    const host = "http://localhost:5000"
    
    let note = [ ]

    const [notes, setnotes] = useState(note)

    //Get All Notes
    const getnote=async()=>{
      //Todo Api call
      //Api Call
    const response = await fetch(`${host}/api/v1/auth/fetchallnotes`, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const json =  await response.json()
    setnotes(json)
  }

    //Add a note
    const addnote=async(Title , Task , Tag )=>{


        //Todo Api call
        //Api Call
      const response = await fetch(`${host}/api/v1/auth/addnote`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({Title , Task , Tag}),
      });

      const note  = response.json()
      setnotes(notes.concat(note))

        
    }

    //Delete a Note
    const deletenote = async(id)=>{

      //Api Call
      const response = await fetch(`${host}/api/v1/auth/deletenote/${id}`, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
      });
      //Logic to delete note frontend
        console.log("Deleting the Note of " + id);        
        const newnote = notes.filter((note)=>{return note._id!==id})
        setnotes(newnote)
    }

    return (
        <notecontext.Provider value  = {{notes,addnote , deletenote , getnote}}>
            {props.children}
        </notecontext.Provider>

    )
}

export default Notestate ;