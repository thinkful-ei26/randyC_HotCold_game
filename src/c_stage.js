import React from 'react';
import Content from './c_content.js';
//import Instructions from './c_instruct.js';
import './navbar.css';

//Instructions button

//New game button

//BASE:

  //Current temp

  //Input w/Button
 
  //# of guesses

  //Previous guesses



export default function Stage(props){
  //console.log('>>>', List);

  return(

    <main className = 'mainScreen'> 
      <nav className = 'navBar'>
      <button className = 'button'>Instructions</button> 
      <button className = 'button'>New Game</button> 
      <button className = 'button'>I Give Up!</button> 
      </nav>
        <div >
           
          < Content />
 
        </div>
  
    </main>



  )


  



}