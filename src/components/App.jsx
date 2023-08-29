import { Component } from "react";

import { FeedbackList } from "./FeedbackList/FeedbackList";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () => {
    this.setState({ total: 0 })
    this.setState(prevState => {
      return {
        total: prevState.total + 1
      }
    })
  }

  countPositiveFeedbackPercentage = () => {
    this.setState({ positive: 0 })
    this.setState(prevState => {
      return {
        positive: (prevState.positive / (this.neutral + this.bad)) * 100
      }
    })
  }

  handleClickGood = () => {
    this.setState(prevState => {
      return {
      good: prevState.good + 1
    }
    })
  }

  handleClickNeutral = () => {
    this.setState(prevState => {
      return {
      neutral: prevState.neutral + 1
    }
    })
  }

  handleClickBad = () => {
    this.setState(prevState => {
      return {
      bad: prevState.bad + 1
    }
    })
  }
  
  render() {
    return ( <>
      <FeedbackList onChangeGood={this.handleClickGood}
        onChangeNeutral={this.handleClickNeutral}
        onChangeBad={this.handleClickBad}
        onChangeTotal={this.countTotalFeedback}
        onChangePositive={this.countPositiveFeedbackPercentage} />
      
      <Statistics good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.state.total} />
      </>
)
  };
};
