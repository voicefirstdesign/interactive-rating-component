import React from "react";
import "./App.css"
import MainText from "./Components/MainText";
import Button from "./Components/Button";
import { AiFillStar } from 'react-icons/ai'
import thankYouImage from './Images/illustration-thank-you.svg'
import ThankYou from "./Components/ThankYou";

export default function App() {

  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [isActive, setIsActive] = React.useState({
    active: null,
    ratingNumber: [{rating: 1}, {rating: 2}, {rating: 3}, {rating: 4}, {rating: 5}]
  });
    const handleClick = (index) => {
        setIsActive({...isActive, active: isActive.ratingNumber[index]})
        console.log(isActive)
        
      }

      function toggleStyle(index) {
        if(isActive.active === isActive.ratingNumber[index]){
          return "btn btn-selected"
         
        }else {
          return "btn btn-inactive"
        }
      }

      const ratingEl = isActive.ratingNumber.map((element, index) => (
       <Button 
        className={toggleStyle(index)}
        key ={index}
        rating={element.rating}
        click={() => handleClick(index)}
       />
      ))

 function submit(){
  setIsSubmitted(true)
  
 }

      

 

  return(
    <div className="app-container">
      <div className="rating-container">
      
        
        {isSubmitted ? 
        <ThankYou 
        image={thankYouImage}
        selectedRating ={Object.values(isActive.active)}
        
        />
        
        : 
        <>
        <AiFillStar className="star-icon" />
            <MainText />
            <div className="button-container">
              {ratingEl}
            
            </div>
             <button onClick = {submit} className="btn-submit" disabled={isActive.active ? false : true}>Submit</button>
        </>
        
        }
            
          
      </div>
    </div>
  )
}