import React from 'react';

class TweetsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helloString: 'hello!'
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.helloString}</h2>
        <button onClick={() => this.setState({helloString: this.state.helloString + '!'})}>append !</button>
      </div>
    )
  }
}

export default TweetsView;
