import React, { Component } from 'react';

class Results extends Component {
  render() {
    return (
      <div>
        <p>{this.props.endMessage} </p>
        <p>Your score was: {this.props.score} </p>
        <button onClick={this.props.handleRestart}>Retry</button>
    </div>
    )
  }
}

export default Results;
