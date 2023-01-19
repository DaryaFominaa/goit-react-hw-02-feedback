import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistic } from './Statistic/Statistic';
import { Section } from './Title/Title';

export class App extends Component {
  // static propTypes =

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Number(
      Math.round(
        (this.state.good /
          (this.state.good + this.state.neutral + this.state.bad)) *
          100
      )
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="PLease leave your feedback:">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          ></FeedbackOptions>
        </Section>
        {total === 0 ? (
          <p>There is no feedback</p>
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistic>
        )}
      </>
    );
  }
}
