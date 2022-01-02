import React from "react"; 
import FeedbackOptions  from './components/Feedback/FeedbackOptioconst';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from "./components/Notification/Notification";
class App extends React.Component   {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }



  updateIncrement = feedbackOptionst => {
    this.setState(prevState => ({
      [feedbackOptionst]: prevState[feedbackOptionst] + 1,
    }));
  };
//  

 countTotalFeedback=()=>{
  const total = this.state.good+this.state.neutral+this.state.bad
   return total};

 
  countPositiveFeedbackPercentag=total=>{
    const positivePercentage = (this.state.good/total)*100
     return positivePercentage};
  
 

   render(){
    const totalValue = this.countTotalFeedback()
    const positivePercentageCount = this.countPositiveFeedbackPercentag(totalValue)
  return (
<>
 <Section title="Please leave feedback">
    <FeedbackOptions 
    options={['good', 'neutral', 'bad']}
    onLeaveFeedback={this.updateIncrement} 
    />
  </Section>

  <Section title="Statistics"> 
  {!totalValue ? (
            <Notification message="There is no feedback" />
          ) : (
    <Statistics 
      good ={this.state.good}
      neutral ={this.state.neutral}
      bad ={this.state.bad}
      total={totalValue} 
      positivePercentage={positivePercentageCount}
      />)}
  </Section>
</>
 


   
  );
}
};

export default App;
