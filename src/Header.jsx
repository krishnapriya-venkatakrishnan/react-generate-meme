import React from "react";
import logo from "./assets/trollLogo.png"

export default function Header(){
    return (
        <header>
            <div className="header-left">
                    <img src={logo} alt="logo" />
                    <p>Meme generator</p>
                
            </div>
            <div className="header-right">
                <p>React Course - Project 3</p>
            </div>
        </header>
    )
}