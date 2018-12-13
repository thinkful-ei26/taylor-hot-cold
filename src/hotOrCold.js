import React from 'react';


export default function Hint(props){
    let userFeedback = 'Make your Guess!'
    console.log(props.secretNumber); 
	if(props.secretNumber == props.Guess){
		userFeedback = 'You guessed the right number!'
	} else if(Math.abs(props.secretNumber - props.Guess) < 10){
		userFeedback = 'hot';
	} else if(Math.abs(props.secretNumber - props.Guess) < 20 && Math.abs(props.secretNumber - props.Guess) > 9){
		userFeedback = ' Kinda hot';
	} else if(Math.abs(props.secretNumber - props.Guess) < 30 && Math.abs(props.secretNumber - props.Guess) > 19){
		userFeedback = 'less than warm';
	} else {
		userFeedback = 'cold';
    }
    return (
          <h2 id="feedback">{userFeedback}</h2>
    )
}