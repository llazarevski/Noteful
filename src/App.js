import React, {Component} from 'react';
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

handleFolders = (e) => {
  console.log(e.target.id)
  console.log('folder clicked!')
  var selectedFolder = this.setState({
    foldersid: ''
  })
  console.log({selectedFolder})
    const newNotes = this.props.notes.filter(selectedFolder)
    this.setState({
      notes: newNotes
    })
}
   
  render(){
    return (
      <div className="App">
        <header className='header'>
          <Main />
          </header>
        <nav className='folders'>
          <FoldersList folders ={this.state.folders} onFolderClick = {(e) => this.handleFolders(e)}/>
        </nav>
        <main className='notes'> 
          <NotesList notes={this.state.notes} />
        </main>
      </div>
    );
  }
}

export default App;
