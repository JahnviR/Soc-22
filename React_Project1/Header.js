import React from "react"
import ReactDOM from "react-dom"

export default function Header(props){
    return(
        <nav>
            <img src="./images/globe.png" width="25px" height="25px" className="nav--logo" />
            <p> my travel journal </p>
        </nav>   
    )
}