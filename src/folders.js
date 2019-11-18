import React from "react";
import "./folders.css"

export default function Folders(props){
    console.log(props)
        return(
            <li className="single-folder" onClick={props.onFolderClick}>
                <h2>{props.folders.name}</h2>
            </li>
                
              

        )

}