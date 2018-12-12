import React from 'react';
import Temp from './c_temp.js';
import Input from './c_guess_input.js';
import History from './c_guess_history.js';
import './list.css';


export default function List(props){

  return (

    <div>
      <ul className = "mainList">

        <li className = 'listItem'> Temperature of your current guess:</li>
        <Temp />
        <Input />
        <History />
 
      </ul>
 
    </div>
 
  )
 
}

Temp.defaultProps = { temp: 'Ok, Make a Guess'};