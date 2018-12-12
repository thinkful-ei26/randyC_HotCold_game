import React from 'react';
import Instructions from './c_instruct.js';
import NewGame from './c_newgame.js';
import List from './c_list.js';
import Iquit from './c_iquit.js';

export default function Content(){
 
const contentSelector = 4;
const currentContent = ['nothing to see here...', < Instructions />, < NewGame /> ,< List />, < Iquit />];

    console.log(currentContent[contentSelector]);

    return(

      currentContent[contentSelector] 
      
    )
    
 
 
}