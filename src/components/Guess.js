import React from 'react'; 

export default function Guess(props) {

    return (
    <form onSubmit = {props.handleSubmit}>
    <input type="text" value= {props.value} onChange= {props.handleChange} name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required/>
    <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
    </form>
    );
}