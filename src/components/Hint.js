import React from 'react';
import { connect } from 'react-redux'; 

function Hint(props){
	console.log(props); 
	let secretNumber = 0; 
	if(props.secretNumber){
		secretNumber = props.secretNumber;
	}
	let userFeedback = 'Make your Guess!'
	const guess = parseInt(props.lastGuess); 
	console.log(secretNumber); 
	console.log(typeof parseInt(props.lastGuess)); 
	if(secretNumber === guess){
		userFeedback = 'You Guessed the right number!'
	} else if(Math.abs(secretNumber - guess) < 10){
		userFeedback = 'hot';
	} else if(Math.abs(secretNumber - guess) < 20 && Math.abs(secretNumber - guess) > 9){
		userFeedback = ' Kinda hot';
	} else if(Math.abs(secretNumber - guess) < 30 && Math.abs(secretNumber - guess) > 19){
		userFeedback = 'less than warm';
	} else if(props.lastGuess === ''){
		userFeedback = 'Make your Guess!'
	}
	else {
		userFeedback = 'cold';
    }
    return (
          <h2 id="feedback">{userFeedback}</h2>
    )
} 
function mapStateToProps(state){
	return {
		lastGuess: state.lastGuess, 
		secretNumber: state.secretNumber
	}
}
export default connect(mapStateToProps)(Hint);