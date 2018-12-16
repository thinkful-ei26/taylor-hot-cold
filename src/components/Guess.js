import React from 'react'; 
import { connect } from 'react-redux'; 
import { GuessRedux } from '../redux/reducer'; 

function Guess(props) {

    return (
    <form onSubmit = {props.handleSubmit}>
    <input type="text" value= {props.value} onChange= { props.GuessRedux } name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required/>
    <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
    </form>
    );
}

function mapStateToProps(state){
    return{
        value: state.value
    }
}

export default connect(mapStateToProps, { GuessRedux })(Guess);