import React, { useState } from 'react'

const LearningHooks = () => {

//   let naam = 'Rishabh';  
  const [naam , setNaam] = useState('Rishabh');
  console.log(naam);

  function handleClick(){
    // naam = 'Rishi'
    setNaam('Rishi');
    console.log(naam);
  }

  return (

    <div onClick={handleClick} style={{border:'2px solid black'}}>{naam}</div>
  )
}

export default LearningHooks