import React from "react";
import { Link } from 'react-router-dom';
import "./notepage.css"

export default function NotePage(props){
        return(
            <div>
                <aside>
                <Link to={'/'}>
                    Go Back
                </Link>
                <h2>{props.folders.name}</h2>
                </aside>
                <div className= 'note-container'>
                    <h2>{props.notes.name}</h2>
                    <p>Date Modified on {props.notes.modified}</p>
                    <button>Delete Note</button>
                </div>
                <p>{props.notes.content}</p> 
            </div>
        )

}