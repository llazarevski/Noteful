import React from 'react';
import { Link } from 'react-router-dom';
import FoldersList from './folderslist'
import NotesList from './noteslist'
import './main.css'

export default function Main(props){
return(
    <div className='app'>
        <header className="header">
        <Link to='/'>
            <h1>Noteful</h1>
        </Link>
        </header>
        <nav>
        <FoldersList className='sidebar' folders={props.folders} /> 
        </nav>
        <main>
        <NotesList className='main' notes={props.notes} />
        </main>
     </div>
)
}