import React from 'react';
import { NewGameToggle } from '../redux/reducer'; 
import { connect } from 'react-redux'; 

function NewGame(props){
    console.log(props); 
    return(
        <li><a onClick= {props.NewGameToggle} className="new" href="#">+ New Game</a></li>
    );
}

export default connect(null, { NewGameToggle })(NewGame); 
