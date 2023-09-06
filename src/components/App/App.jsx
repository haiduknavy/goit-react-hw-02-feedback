// import Feedback from "./Feedback/Feedback";
import React, { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";
import { Wrapper } from "./App.styled";

class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
    }

 handleClick = (key) => {
  this.setState((prevState) => {
      return {
          [key]: prevState[key] + 1,
      };
    });
 };
 
 countTotalFeedback = () => {
  return Object.values(this.state).reduce((firstVal, secondVal) => {
      return firstVal + secondVal;
    }, 0);
 };

 countPositiveFeedbackPercentage = () => {
  return Math.round((this.state.good / this.countTotalFeedback()) * 100);
 };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage()
      const options = Object.keys(this.state)
      const {good,neutral,bad} = this.state

    return (  
    <Wrapper>
    <Section title="Please leave feedback">
    <FeedbackOptions options={options} onLeaveFeedback={this.handleClick} />
    </Section>
    {total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message={"There is no feedback"} />
        )}
    </Wrapper>
    )
  }
}

export default App;
