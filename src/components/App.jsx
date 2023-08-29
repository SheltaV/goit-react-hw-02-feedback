import { Component } from "react";

import { FeedbackOptions } from "./FeedbackList/FeedbackList";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClickCount = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[Object.values(option)] + 1,
        };
      });
  }

  countTotalFeedback = () => {
    this.setState({ total: 0 })
    this.setState(prevState => {
      return {
        total: prevState.total + 1
      }
    })
  }

  // countPositiveFeedbackPercentage = () => {
  //   this.setState({ positive: 0 })
  //   this.setState(prevState => {
  //     return {
  //       positive: (prevState.positive / (this.neutral + this.bad)) * 100
  //     }
  //   })
  // }


  render() {
    return ( <>
      <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClickCount}/>
      
      <Statistics good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.state.total}
        positivePercentage={this.state.positive} />
      </>
)
  };
};
