import React from 'react';
import Hint from './hotOrCold';
import Guess from './userGuess';
import Random from './randomNumber'
import NewGame from './newGame';
import WhatLink from './whatLink'; 
import What from './what'; 

export default class InputForm extends React.Component {
    constructor(props){
        super(props); 
        this.state = {value:'', 
        secretNumber: Random(), 
        lastGuess: '', 
        guesses: [], 
        formVisible: false
    }
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.newGame = this.newGame.bind(this); 
        this.whatLink = this.whatLink.bind(this); 
        this.toggleForm = this.toggleForm.bind(this); 
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
    newGame(){
        console.log('new game has been pressed!');
        this.setState({
            value:'', 
            secretNumber: Random(),
            lastGuess: '', 
            guesses:[]
        })
    }
    toggleForm(){
        console.log('Toggle Activated!')
        this.state.formVisible = !this.state.formVisible; 
        this.setState({formVisible:this.state.formVisible})
    }
    whatLink(){
        console.log('WhatLink has been pressed!');
        this.toggleForm();
        console.log(this.state.formVisible);
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
                            <WhatLink whatLink= {this.whatLink} />
                            <NewGame newGame= {this.newGame} />
                        </ul>
                    </nav> 
                    <div>
                    <What formVisible={this.state.formVisible} toggle={this.toggleForm} />
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
