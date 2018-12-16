import React, { Component } from 'react';
import Hint from './components/Hint';
import Guess from './components/Guess';
import NewGame from './components/newGame';
import WhatLink from './components/whatLink'; 
import What from './components/what'; 
import { connect } from 'react-redux'; 
import { WhatThe, HandleSubmitRedux } from './redux/reducer'; 

class InputForm extends Component {
    constructor(props){
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(e){
        e.preventDefault();
        const value = this.props.value;
        this.props.HandleSubmitRedux(value); 

    } 

    render(){
       const guessesList = this.props.guesses.map((guess, i) => {
           return <li className = 'guessesList' key= {i}>{guess}</li>
        })
        return (
            <div className = 'parent'>
                <title>Hot || Cold</title>
                <meta charSet="utf-8"/>
                <header> 
                    <nav> 
                        <ul className="clearfix">
                            <WhatLink />
                            <NewGame />
                        </ul>
                    </nav> 
                    <div>
                    <What />
                    </div>
                    <h1 className='title'>HOT or COLD</h1>
                </header>
        
                <section className="game"> 
                    <div className = 'hint'>
                    <Hint />
                    </div>
                    <div className= 'inputForm'>
                    <Guess handleSubmit={this.handleSubmit} />
                    </div>
                      <p id="count">Guess #<span >{this.props.guesses.length}</span>!</p>
                    <ul id="guessList" className="guessInfo">  
                    {guessesList} 
                    </ul>
                </section>            
            </div>
            );
    }
}
    function mapStateToProps(state){
        return {
            formVisible: state.formVisible, 
            guesses: state.guesses, 
            value: state.value
        }
    }
    export default connect(mapStateToProps, {WhatThe, HandleSubmitRedux})(InputForm)