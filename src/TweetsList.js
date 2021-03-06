import React from 'react';
import PropTypes from 'prop-types';

class TweetsList extends React.Component {
  componentWillUpdate(nextProps, nextState) {
      console.log(nextProps);
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>{this.props.tweetsList.map(t => <li key={t.uuid}>{t.title}</li>)}</ul>
      </div>
    )
  }
}

TweetsList.propTypes = {
    title: PropTypes.string.isRequired,
}

TweetsList.defaultProps = {
  tweetsList: [],
  title: '',
}

export default TweetsList;
