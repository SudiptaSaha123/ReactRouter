import React from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {
    const navigate = useNavigate();
    function clickHandler(){
        navigate("/support");
    }
    function backHandler(){
        navigate(-1);
    }
  return (
    <div>
        This is About Page
        <button onClick={clickHandler}>Move to Support Page</button>
        <button onClick={backHandler}>Go Back</button>
    </div>
  )
}
