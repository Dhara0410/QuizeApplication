import React, { useEffect, useState } from 'react'
import { Quizdata } from './Quizdata'
import Styled from 'styled-components'
// import { useNavigate } from 'react-router-dom';
import { Result } from './Result';


const Option_btn=Styled.button`
&:hover{
  background-color: #8696b0;
  }
`
const Next_btn=Styled.button`
&:hover{
  background-color: #9aaeb2;
  }
`
 export function Quiz() {

// const navigate=useNavigate()
 
 const [curquestion,setcurquestion]=useState(0)
 const [slectans,setselectans]=useState(0)
 const [score,setscore]=useState(0)
 const [exit,setexit]=useState(false)
 const [timer,settimer]=useState(10)
 const [stop,setstop]=useState(false)
 const updatescore = () =>{
  if(slectans===Quizdata[curquestion].answer){
    setscore(score+1)
  }
}
 const nexthandler = () => {
  updatescore()
  if(curquestion<Quizdata.length-1){
    setcurquestion(curquestion+1)
    setselectans(0)
  }
  else{
    setexit(true)
  }
  
 }

 
  const playagain = () =>{
    setexit(false)
    setcurquestion(0);
    setselectans(0)
    setscore(0);
    setstop(false);
    settimer(10)
  }

  useEffect(()=>{
    
  
    const interval=setInterval(() => {
       
      settimer(pre=>pre-1)
  }, 1000); 

     if(timer===0&&curquestion===Quizdata.length-1){
        setcurquestion(curquestion)
        setstop(true)
        // settimer(0)
        clearInterval(interval)
      }
    else if(timer===0){
      setcurquestion(curquestion+1)
    }
   

      return ()=> clearInterval(interval);
       
  },[timer])
 
useEffect(()=>{
  
    settimer(10)
  

},[curquestion])
   return (
    <div>
      <div className='container d-flex justify-content-center'> 
     
      {
        !exit?(<div className='card border-primary pe-4 ps-4 pt-4 m-3'>
           <div className='pb-2 d-flex justify-content-between align-items-center'>
            <div>
            {curquestion+1}/{Quizdata.length}
            </div>
            <div>
              {timer}
            </div>
           
      </div>
        <div className='card d-inline p-3 question'><span>{curquestion+1}.</span>
         { Quizdata[curquestion].question}
        </div>
        <div className=' option-container d-grid gap-2 mt-3 p-4 me-5 ms-5'>
          {
            Quizdata[curquestion].options.map((option,i)=>{
              return(
                <Option_btn className={`btn option btn-outline-primary me-5 ms-5 ${slectans===i+1?"clicked":null}`}  key={i}   onClick={()=>{
                  if(stop){
                    setselectans(0)
                  }
                  else{
                    setselectans(i+1)
                  }
                }}>{option}</Option_btn>
              )
              
            })
          }
          {
            curquestion===Quizdata.length-1?<Next_btn className='btn option  btn-outline-success me-3 ms-3 mt-4 ' onClick={()=>nexthandler()}>Submitt quiz</Next_btn>:<Next_btn className='btn option btn-outline-warning me-5 ms-5 mt-4 ' onClick={()=>nexthandler()}>Next</Next_btn>
          }
      
        </div>
  
        <div>
        
        </div>
  
        </div>):(
          <Result score={score} total={Quizdata.length} playagain={playagain} />
        )
      }
      </div>
    </div>
  )
}

