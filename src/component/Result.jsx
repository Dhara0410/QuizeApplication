import React from 'react'

export function Result({score,total,playagain}) {

  
  return (
    <>
      <div className='container d-flex justify-content-center'> 
      
        <div className='card border-primary p-5 m-5'>
        <h2 className='card p-3 m-3 score'>
          Your Score:{score}
        </h2>
        <h2 className='card p-3 m-3 score'>
          Total Score:{total}
        </h2>
        
        <button className='btn  btn-outline-success me-3 ms-3 mt-4 option ' onClick={()=>{playagain()}}>Playy Again</button>
        </div>
        </div>
    </>
      
  
  )
}


