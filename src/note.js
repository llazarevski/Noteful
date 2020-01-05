import React from "react";
import "./note.css"
import { Link } from 'react-router-dom';

export default function Note(props){
        return(
            <div className= 'note-container'>
                <Link to ={"/note/"+ props.notes.id}>
                <h2>{props.notes.name}</h2>
                    </Link>
                <p>Date Modified on {props.notes.modified}</p>
                <button>Delete Note</button>
            </div>   

        )

}