import React from "react";
import ".././App.css"


export default function ThankYou (props) {
    return(
        <div>
       
       
        <div className="thank-you-container">
        <img src={props.image} />
        <div className="thank-you-rating">
            <p className="thank-you-rating-text">You selected out {props.selectedRating} of 5</p>
        </div>
        <h1 className="main-text">Thank you!</h1>
        <p className="thank-you-message">We appreciate you taking the time to give a rating.
          If you ever need more support, don't hesitate to get in touch!
        </p>
        </div>
      </div>
    )
}