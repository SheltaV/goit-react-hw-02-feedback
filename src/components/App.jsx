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
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (1 + neutral + bad)) * 100)
  }


  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <>
      <Section title='Please leave feedback'>
      <FeedbackOptions options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClickCount} />
      </Section>
      <Section title='Statistics'>
        {total > 0 ? <Statistics good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positive} /> : <Notification message="There is no feedback"></Notification>}
      </Section>
      </>
      )
    }
  };
