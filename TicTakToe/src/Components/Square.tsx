
import React, { useState } from 'react'
import Board from './Board'



interface SquareProps{
    value: string | null;
    onSquareClick: () => void;
}

const Square = ({value, onSquareClick}: SquareProps) => {

  const [valuestate, setValueState] = useState(null)

//   function handleClick(){
//     console.log('clicked')
//     setValueState('X');
//   }

function getImage(){
  if(value === 'Donkey'){
    return <img className='donkey' src="/Images/donkey.png" alt="Donkey" />;
  }
  else if(value ==='Shrek'){
    return <img className='shrek' src="/Images/shrek.png" alt="Shrek" />;
  }
  else{
    return null
  }


}


  return (
 
     <>
     <button className="square" onClick={onSquareClick}>{getImage()}</button>
     </> 
    
      

  )
}

export default Square



