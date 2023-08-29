import { Component } from "react";

import { FeedbackOptions } from "./FeedbackList/FeedbackList";
import { Statistics } from "./Statistics/Statistics";
import { Section } from './Section/Section';
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClickCount = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
        };
    });
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  countTotalFeedback = () => {
    this.setState((prevState) => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad
      }
    }
    )
  }

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positive: Math.round((prevState.good / (1 + prevState.neutral + prevState.bad)) * 100)
      }
    })
  }


  render() {
    if (this.state.total > 0) {
    return (<>
      <Section title ='Please leave feedback'>
      <FeedbackOptions options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClickCount} />
      </Section>

      <Section title='Statistics'>
      <Statistics good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.state.total}
          positivePercentage={this.state.positive} />
      </Section>
      </>
      )
    }
    return (<>
      <Section title ='Please leave feedback'>
      <FeedbackOptions options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClickCount} />
      </Section>

      <Section title='Statistics'>
      <Notification message="There is no feedback"/>
      </Section>
      </>
    )
  };
};
