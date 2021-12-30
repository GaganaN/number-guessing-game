import React, {useEffect, useState} from 'react';
import App from './App';
import Cards from "./Cards";
import "./Game.css"

const Game = () => {
    return (
        <div className="Game">
            <h1>Number Game</h1>
            <Cards />
            <button className = "Retry">Retry</button>
            <button classname = "Exit">Exit</button>
        </div>
    );
}
export default Game;