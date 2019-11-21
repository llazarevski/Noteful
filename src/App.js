import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NotesList from './noteslist'
import Main from "./main"
import FoldersList from './folderslist'
import Store from "./store"

console.log(Store)
class App extends Component{
  state = {
    notes: Store.notes,
    folders: Store.folders,
    foldersid: Store.folders.id
};

// handleSetActiveSecion = (sectionIndex) => {
//   this.setState({ activeSectionIndex: sectionIndex })
// }
// handleFolders = (e) => {
//   console.log(e.target)
//   console.log('folder clicked!')
//   let selectedFolder =  "";
//   this.setState({ foldersid: e.target.id  }, () => { selectedFolder = this.state.foldersid})
  
//   console.log({selectedFolder})
//     const newNotes = this.props.notes.filter(note => note.folderId === e.target.id)
//     this.setState({
//       notes: newNotes
//     })
// }
   
  render(){
    return (
      <div className="App">
        <header className='header'>
          <Route exact path='/' component={Main}/>
          </header>
          <Route path='/folder' render={(props) => <FoldersList folders={this.state.folders} onFolderClick={(e)=> this.handleFolders(e)}/> } 
          />
        <main className='notes'> 
          <Route path='/note' render={(props)=> <NotesList notes={this.state.notes} />}
          />
        </main>
      </div>
    );
  }
}

export default App;
