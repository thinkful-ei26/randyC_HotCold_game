import React from 'react';

export default function Input(props){

  return(
    <li className = 'listItem'> 
    <form>
    <label>
    GUESS A NUMBER BETWEEN 1 and 100:
    <input type="number" name="name" />
    </label>
    <input type="submit" value="Submit" />
    </form>
    </li>

  )
   
}