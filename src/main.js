import React from 'react';
import { Link } from 'react-router-dom';
import FoldersList from './folderslist'
import NotesList from './noteslist'

export default function Main(props){
return(
    <div>
        <header className="header">
        <Link to='/'>
            <h1>Noteful</h1>
        </Link>
        </header>
        <nav>
        <FoldersList folders={props.folders} /> 
        </nav>
        <main>
        <NotesList notes={props.notes} />
        </main>
     </div>
)
}