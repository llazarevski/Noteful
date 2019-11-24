import React from "react";
import "./folders.css"
import { Link } from 'react-router-dom';

export default function Folders(props){
        return(
            
            <li className="single-folder">
                <Link to = {"/folder/"+ props.folders.id}>
                <h2 id={props.folders.id}>{props.folders.name}</h2>
                </Link>
            </li>
                
              

        )

}