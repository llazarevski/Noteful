import React, {Component} from 'react';
import Folders from './folders'

class FoldersList extends Component{
    render(props){
        const folders = this
            .props
            .folders
            .map((folder, i) => <Folders folders={folder} key={i} onFolderClick={this.props.onFolderClick}/>);
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