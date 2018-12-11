import React from 'react';
import Hint from './hotOrCold';
import Guess from './userGuess';
import Random from './randomNumber'
export default class InputForm extends React.Component {
    constructor(props){
        super(props); 
        this.state = {value:'', 
        secretNumber: Random(), 
        lastGuess: '', 
        guesses: []
    }
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    handleChange(e){
        this.setState({value: e.target.value}); 
    }
    handleSubmit(e){
        e.preventDefault();
        const value = this.state.value; 
        let guessesCopy = this.state.guesses.slice(); 
        guessesCopy.push(value);
        this.setState({value:'', lastGuess: value, guesses: guessesCopy});
        console.log(this.state.guesses); 
        console.log(value); 
        return {value}; 
    }

    render(){
       let guessesToRender = this.state.guesses.map(e => {
           return (<div className = 'guessDisplay'>{e}</div>)
       });
        return (
            <div className = 'parent'>
                <title>Hot || Cold</title>
        
                <meta charSet="utf-8"/>
        
                
                <header> 
        
        
                    <nav> 
                        <ul className="clearfix">
                            <li><a className="what" href="#">What ?</a></li>
                            <li><a className="new" href="#">+ New Game</a></li>
                        </ul>
                    </nav>
                    
        
                    <div className="overlay" id="modal">
                        <div className="content">
                            <h3>What do I do?</h3>
                            <div>
                                <p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
                                <ul>
                                    <li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
                                    <li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
                                    <li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
                                </ul>
                                <p>So, Are you ready?</p>
                                <a className="close" href="#">Got It!</a>
                            </div>
                        </div>
                    </div>
        
        
                    <h1>HOT or COLD</h1>
        
                </header>
        
                <section className="game"> 
                    
                    <div className = 'hint'>
                    <Hint secretNumber ={this.state.secretNumber} Guess ={this.state.lastGuess}/>
                    </div>
                    <div className= 'inputForm'>
                    <Guess handleSubmit= {this.handleSubmit} handleChange= {this.handleChange} value={this.state.value}/>
                    </div>
                      <p>Guess #<span id="count">{this.state.count}</span>!</p>
                        <div className='guessInfo'>
                        {guessesToRender}
                        </div>
                    <ul id="guessList" className="guessBox clearfix">
        
                    </ul>
        
                </section>
            
            </div>
            )
    }
}
