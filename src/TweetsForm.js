import React from 'react';

class TweetsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetName: '',
    }
  }

  addTweet = () => {
    this.setState({
      tweetName: ''
    })
    this.props.addTweet(this.state.tweetName);
  }

  updateTweetName = (e) => {
    this.setState({ tweetName: e.target.value })
  }

  render() {
    return (
      <div>
        <input value={this.state.tweetName} onChange={this.updateTweetName} />
        <button onClick={this.addTweet}>add Tweet</button>
      </div>
    )
  }
}

export default TweetsList;
