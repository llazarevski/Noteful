import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NotesList from './noteslist'
import Main from "./main"
import FoldersList from './folderslist'
import Store from "./store"
import NotePage from './notepage'

console.log(Store)
class App extends Component{
  state = {
    notes: Store.notes,
    folders: Store.folders,
    foldersid: Store.folders.id
};
   
  render(){
    return (
      <div className="App">    
          <Route exact path="/" render= {(props) => <Main folders={this.state.folders} notes={this.state.notes} />}/>
          <Route path='/folder/:folderId' render={(props) => { 
            var notes= 
              this.state.notes.filter(note => note.folderId == props.match.params.folderId)
              console.log(notes, this.state.notes)
            return (<Main folders={this.state.folders} notes={notes}/>)
            } } 
            />
          <Route path='/note/:noteId' component={<NotePage folders={this.state.folders} notes={this.state.notes}/>}/>
      </div>
    );
  }
}

export default App;
