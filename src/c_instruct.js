import React from 'react';
import './navbar.css';

export default function Instructions(){

return (

  <div>
    <p>Press the 'GUESS' button to enter a number between 1 and 100.
      You will recieve feedback on your guess in temperature, ie: hotter or colder.
      How many guesses will it take you to get the number?
      Good luck!
    </p>
    <button className = ".Gobutton">GO!</button>
  </div>

)
 
}