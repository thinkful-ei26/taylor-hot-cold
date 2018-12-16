import Random from '../components/Random'

const initialState = {
        value:'', 
        secretNumber: Random(), 
        lastGuess: '', 
        guesses: [], 
        formVisible: false
} 

const WHAT_LINK = 'WHAT_LINK'; 
const NEW_GAME = 'NEW_GAME'; 
const HANDLE_SUBMIT = 'HANDLE_SUBMIT';
const HANDLE_GUESS = 'HANDLE_GUESS'; 
const HANDLE_INPUT = 'HANDLE_INPUT'; 


export default function Reducer(state= initialState, action){

    switch(action.type){

        case WHAT_LINK: 
            return {...state, formVisible: !state.formVisible }
        case NEW_GAME: 
            return{ 
                value:'', 
                secretNumber: Random(), 
                lastGuess: '', 
                guesses: [], 
                formVisible: false
                }
        case HANDLE_SUBMIT:
            return {
                ...state,
                value: '',
                guesses: [...state.guesses, action.payload], 
                lastGuess: action.payload
            }
        case HANDLE_GUESS: 
            return{
                lastGuess: action.payload,
                ...state
            }
        case HANDLE_INPUT:
            return{
                ...state,
                value: action.payload
               
            }
        default: 
            return state; 
    }
}

export function WhatThe(){
    return { 
        type: WHAT_LINK
    }
}

export function NewGameToggle(){
    return {
        type: NEW_GAME
    }
}

export function HandleSubmitRedux(guess){
    return {
        type: HANDLE_SUBMIT, 
        payload: guess
    }
}

export function HintRedux(guess){
    return{
        type: HANDLE_GUESS, 
        payload: guess
    }
}

export function GuessRedux(e){
    return{
        type: HANDLE_INPUT, 
        payload: e.target.value
    }
}