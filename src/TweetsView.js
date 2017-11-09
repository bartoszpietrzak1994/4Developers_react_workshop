import React from 'react';
import TweetsList from './TweetsList';
import TweetsForm from './TweetsForm';

class TweetsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetsList: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.addTweet('first tweet');
    }, 1000)
  }

  addTweet = newTweet => {
    this.setState({
      tweetsList: [...this.state.tweetsList, newTweet]
    })
  }

  render() {
    return (
      <div>
        <h1>Tweets View</h1>
        <TweetsForm addTweet={this.addTweet} />
        <TweetsList tweetsList={this.state.tweetsList} />
      </div>
    )
  }
}

export default TweetsView;
