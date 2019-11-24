import React from "react";
import "./note.css"

export default function Note(props){
        return(
            <div className= 'note-container'>
                {/* <a href={} target="_blank"> */}
                <h2>{props.notes.name}</h2>
                    {/* </a> */}
                <p>Date Modified on {props.notes.modified}</p>
                <button>Delete Note</button>
            </div>   

        )

}