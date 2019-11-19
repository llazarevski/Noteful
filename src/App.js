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
  console.log(e.target)
  console.log('folder clicked!')
  const selectedFolder = this.setState({
    foldersid: ''
  })

  changeNotes(selectedFolder) {
    const notesPage = this.props.notes.filter(selectedFolder)
    console.log(notesPage)
      return(
        {notesPage}
      )
    }
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
