import React from 'react'

export default function WhatLink(props){
    return(
        <li><a onClick={props.whatLink} className="what" href="#">What ?</a></li>
    );
}