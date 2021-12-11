import React from "react";

class Feedback extends React.Component   {
  handleClickGood = ()=>{
     console.log('Good');
  }

  handleClickNeutral = ()=>{
   console.log('Neutral');
}
handleClickBad = ()=>{
   console.log('Bad');
}
   render(){
  return (
    <div className ='feedback'>
      <h1>Please leave feedback</h1>
      <div>
          <button type ='button' onClick = {this.handleClickGood}>Good</button>
          
          <button type ='button' onClick = {this.handleClickNeutral} >Neutral</button>
            
          <button type ='button' onClick = {this.handleClickBad}>Bad</button>
      </div>
      
      <h1>Statistics</h1>
      <ul>
        <li><span>Good</span></li>
        <li><span>Neutral</span></li>
        <li><span>Bad</span></li>
        <li><span>Total</span></li>
        <li><span>Positive feedback</span></li>
      </ul>
    </div>
  );
}
};
export default Feedback;
