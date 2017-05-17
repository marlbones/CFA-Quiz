import React, { Component } from 'react';
import PropTypes from 'prop-types';


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

Results.defaultProps = {
  endMessage: 'CONGRATULATIONS!!!'
}

Results.propTypes = {
  endMessage: PropTypes.string,
  score: PropTypes.number.isRequired,
  handleRestart: PropTypes.func.isRequired
};

export default Results;
