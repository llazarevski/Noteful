import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Main from "./main"
import Store from "./store"
import NotePage from './notepage'
import WebFont from 'webfontloader';
import NotefulContext from './NotefulContext';

WebFont.load({
  google: {
    families: ['Source Sans Pro:400,400i,700', 'sans-serif']
  }
});

console.log(Store)
class App extends Component{
  state = {
    notes: [],
    folders: [],
    foldersid: Store.folders.id
};
   
  render(){
    const contextValue = {
            notes: this.state.notes,
            folders: this.state.folders,
            deleteNote: this.deleteNote
          }
    return (
      <NotefulContext.Provider value={contextValue}>
      <div className="App">    
          <Route exact path="/" component={Main} />}/>
          <Route path='/folder/:folderId' render={(props) => { 
            var notes= 
              this.state.notes.filter(note => note.folderId === props.match.params.folderId)
              console.log(notes, this.state.notes)
            return (<Main folders={this.state.folders} notes={notes}/>)
            } } 
            />
          <Route path='/note/:noteId' render={(props)=> {
            var notepage= 
              this.state.notes.filter(note => note.id === props.match.params.noteId)
              console.log(notepage, this.state.notes)
              return(<NotePage folders={this.state.folders} notes={notepage} 
          onClickGoBack={() => this.props.history.push('/')}/>)
              }
          }/>
      </div>
      </NotefulContext.Provider>
    );
  }
}

export default App;
