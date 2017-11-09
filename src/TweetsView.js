import React from 'react';
import TweetsList from './TweetsList';
import TweetsForm from './TweetsForm';
import axios from 'axios';

class TweetsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetsList: []
    }
  }

  componentDidMount() {
    this.fetchTweets();
  }

  fetchTweets = () => {
    fetch('http://localhost:3001/tweets?user=test').then(response => {
        response.json().then(d => {
          this.setState({
            tweetsList: d.tweets,
          })
      });
    })
  }

  addTweet = newTweet => {
      axios.post('http://localhost:3001/createTweet?user=test', { tweet: { title: newTweet } }
    ).then(() => {
      this.fetchTweets();
    });
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
