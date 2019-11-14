import React, {Component} from 'react';
import Note from './note'

class NotesList extends Component{
    render(){
        const notes = this
            .props
            .notes
            .map((note, i) => <Note notes={note} key={i}/>);
        return(
            <div className='noteslist'>
                {notes}
                <button>Add Note</button>
            </div>
        )
    }

}

export default NotesList