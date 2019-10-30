import React, {Component} from 'react';
import './App.css';
import NotesList from './noteslist'
import Main from "./main"
import Store from "./store"

class App extends Component{
  state = {
    notes: [],
    folders: []
};
   
  render(){
    return (
      <main className="App">
        <Main />
        <div className='notes'>
          <NotesList notes={this.state.notes} />
          </div>
      </main>
    );
  }
}

export default App;
