import React from 'react';
import Hint from './components/Hint';
import Guess from './components/Guess';
import Random from './components/Random'
import NewGame from './components/newGame';
import WhatLink from './components/whatLink'; 
import What from './components/what'; 

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
        this.setState({value:'', lastGuess: value, guesses: guessesCopy, count:guessesCopy.length});
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
            guesses:[], 
            count:0
        })
    }
    toggleForm(){
        console.log('Toggle Activated!')
        let value = this.state.formVisible;
            value = !value 
        this.setState({formVisible:value})
    }
    whatLink(){
        console.log('WhatLink has been pressed!');
        this.toggleForm();
        console.log(this.state.formVisible);
    }


    render(){

       let guessesToRender = this.state.guesses.map(e => {
           return (<li className = 'guessDisplay'>{e}</li>)
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
                    <h1 className='title'>HOT or COLD</h1>
                </header>
        
                <section className="game"> 
                    <div className = 'hint'>
                    <Hint secretNumber ={this.state.secretNumber} Guess ={this.state.lastGuess}/>
                    </div>
                    <div className= 'inputForm'>
                    <Guess handleSubmit= {this.handleSubmit} handleChange= {this.handleChange} value={this.state.value}/>
                    </div>
                      <p id="count">Guess #<span >{this.state.guesses.length}</span>!</p>
                    <ul id="guessList" className="guessInfo">  
                    {guessesToRender} 
                    </ul>
                </section>            
            </div>
            );
    }
}
