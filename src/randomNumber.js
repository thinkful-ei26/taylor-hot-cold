import React from 'react'; 

export default function Random(){
        const secretNumber = Math.floor(Math.random()*100)+1;
        console.log(secretNumber); 
        return secretNumber;
};