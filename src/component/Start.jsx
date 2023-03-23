import React from 'react'
import Styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
export function Start() {


  const navigate=useNavigate()
  const Startbtn=Styled.div`
    margin-top:200px;
    margin-boottom:200px;


  @media (max-width:400px) {
    margin-top:150px;
    margin-boottom:150px;
    } `
  return (
    <>
      <Startbtn className='container d-flex justify-content-center '>
        <button className='btn btn-outline-primary' onClick={()=>{navigate("/quiz")}}>Strattt Quize</button>
      </Startbtn>
    </>
  )
}


