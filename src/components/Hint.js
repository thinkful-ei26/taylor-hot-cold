import React from 'react';


export default function Hint(props){
	let userFeedback = 'Make your Guess!'
	let guess = parseInt(props.Guess);
	console.log(typeof props.secretNumber); 
	console.log(typeof props.Guess); 
	if(props.secretNumber === guess){
		userFeedback = 'You guessed the right number!'
	} else if(Math.abs(props.secretNumber - guess) < 10){
		userFeedback = 'hot';
	} else if(Math.abs(props.secretNumber - guess) < 20 && Math.abs(props.secretNumber - guess) > 9){
		userFeedback = ' Kinda hot';
	} else if(Math.abs(props.secretNumber - guess) < 30 && Math.abs(props.secretNumber - guess) > 19){
		userFeedback = 'less than warm';
	} else {
		userFeedback = 'cold';
    }
    return (
          <h2 id="feedback">{userFeedback}</h2>
    )
}