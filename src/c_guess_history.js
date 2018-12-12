import React from 'react';

export default function History(){
  
  //logic for determing inout value response....

  
  const prevGuesses = [4,5,7,1,9];
  const countGuesses = prevGuesses.length;

  return( 
     
     
     <li className = 'specialListItem'>
     Number of Guesses so Far = { countGuesses } 
     <br></br><br></br>
     Previous Guesses = { prevGuesses.join() } 
     </li>
     

  )
    

}


//<li className = 'listItem'> Temperature of your guess = { ...prevGuesses } </li>
