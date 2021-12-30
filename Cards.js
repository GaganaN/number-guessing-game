import {useState} from 'react';
import App from './App'
import Card from "./Card"
import ".Game.css"

function Cards(){
    const [items, setItem] = useState([
        {id= 1, placeholder = 1, stat = ""},
        {id=2, placeholder = 2, stat = ""},
        {id=3, placeholder = 3, stat = ""},
        {id=4, placeholder = 4, stat = ""},
        {id=5, placeholder = 5, stat = ""},
        {id=6, placeholder = 6, stat = ""},
        {id=7, placeholder = 7, stat = ""},
        {id=8, placeholder = 8, stat = ""},
        {id=9, placeholder = 9, stat = ""},
    ].sort(() => Math.floor(Math.random() * 9) + 1));
    const guesses = document.querySelector('.guesses');

    let guessCount = 1;
    let resetButton;
    let exitButton;

    function handleClick(id){
        items[id].stat = "active";
        setItems([...items]);
        Retey.disabled = true;
        Exit.disabled = true;
    }
    
    return (
        <div className = "container">
            {items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick}  />
            ))} 
         </div>
    );
}
export default Cards;