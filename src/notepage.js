import React from "react";
import { Link } from 'react-router-dom';
import "./notepage.css"

export default function NotePage(props){
    console.log('props.notes is ', props.notes )
    console.log('props.folders is', props.folders)
        return(
            <div>
                <header className="header">
                    <Link to='/'>
                        <h1>Noteful</h1>
                    </Link>
                </header>
                <aside>
                <Link to={'/'}>
                    Go Back
                </Link>
                <h2>{props.folders[0].name}</h2>
                </aside>
                <div className='content-container'>
                    <div className= 'note-container'>
                        <h2>{props.notes[0].name}</h2>
                        <p>Date Modified on {props.notes[0].modified}</p>
                        <button>Delete Note</button> 
                    </div> 
                    <p>{props.notes[0].content}</p>
                </div>
            </div>
        )

}