import React, {Component} from 'react';
import Folders from './folders'

class FoldersList extends Component{
    render(){
        const folders = this
            .props
            .folders
            .map((folder, i) => <Folders folders={folder} key={i}/>);
        return(
            <div className='folders-container'>
                <ul className='folders-list'>
                    {folders}
                </ul>
                <button>Add Folder</button>
            </div>
        )
    }

}

export default FoldersList