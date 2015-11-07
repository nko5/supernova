import React, { Component, PropTypes } from 'react';


export default class HomePage extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  onClickStartGame() {
    this.context.history.pushState(null, '/game');
  }

  render() {
    return (
      <div>
        <h1>Guess the movie</h1>
        <p>Prove you know the soundtrack of any movie. I dare you!</p>
        <button onClick={::this.onClickStartGame}>Start</button>
      </div>
    );
  }
}


export default HomePage;