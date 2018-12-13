import React from 'react';

export default function NewGame(props){
    
    return(
        <li><a onClick= {props.newGame} className="new" href="#">+ New Game</a></li>
    );
}
