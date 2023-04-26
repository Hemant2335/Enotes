import notecontext from "./Notecontext";
import { useState } from "react";

const Notestate = (props)=>{
    
    const note = [
        {
          "_id": "6446885e404fe892c35663ad",
          "user": "64413bfcd53ba0dc1d5fb0a9",
          "Title": "Todayisday",
          "Task": "Will do Everything",
          "Tag": "Coding",
          "Date": "2023-04-24T13:47:10.233Z",
          "__v": 0
        },
        {
          "_id": "6446885e404fe892c35663ad",
          "user": "64413bfcd53ba0dc1d5fb0a9",
          "Title": "Todayisday",
          "Task": "Will do Everything",
          "Tag": "Coding",
          "Date": "2023-04-24T13:47:10.233Z",
          "__v": 0
        },
        {
          "_id": "6446885e404fe892c35663ad",
          "user": "64413bfcd53ba0dc1d5fb0a9",
          "Title": "Todayisday",
          "Task": "Will do Everything",
          "Tag": "Coding",
          "Date": "2023-04-24T13:47:10.233Z",
          "__v": 0
        },
        {
          "_id": "6446885e404fe892c35663ad",
          "user": "64413bfcd53ba0dc1d5fb0a9",
          "Title": "Todayisday",
          "Task": "Will do Everything",
          "Tag": "Coding",
          "Date": "2023-04-24T13:47:10.233Z",
          "__v": 0
        },
      ]

    const [notes, setnotes] = useState(note)

    return (
        <notecontext.Provider value  = {{notes,setnotes}}>
            {props.children}
        </notecontext.Provider>

    )
}

export default Notestate ;