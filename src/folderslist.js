import React, {Component} from 'react';

import Folders from './folders'
import './folderslist.css'


class FoldersList extends Component{
    render(props){
        const folders = this
            .props
            .folders
            .map((folder, i) => <Folders folders={folder} key={i} />);
        return(
            <div className='folders-container'>
                <ul className='folders-list'>
                    {folders}
                </ul>
                <button className="add-button">Add Folder</button>
            </div>
        )
    }

}


export default FoldersList