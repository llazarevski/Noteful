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


handleFolders = () => {
  console.log('folder clicked!')
}
   
  render(){
    return (
      <div className="App">
        <header className='header'>
          <Main />
          </header>
        <nav className='folders'>
          <FoldersList folders ={this.state.folders} onFolderClick={this.handleFolders}/>
        </nav>
        <main className='notes'> 
          <NotesList notes={this.state.notes} />
        </main>
      </div>
    );
  }
}

export default App;
