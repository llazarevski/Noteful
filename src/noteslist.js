import React, {Component} from 'react';
import Note from './note'

class NotesList extends Component{
    render(){
        const notes = this
            .props
            .notes
            .map((note, i) => <Note { ...note } key={i}/>);
            console.log(notes);
        return(
            <div className='noteslist'>
                {notes}
            </div>
        )
    }

}

export default NotesList