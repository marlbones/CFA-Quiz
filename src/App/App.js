import React, { Component } from 'react';
import './App.css';
import Question from '../Question/Question';
import ProgressBar from '../ProgressBar/ProgressBar';
import MultiChoice from '../MultiChoice/MultiChoice';
import Results from '../Results/Results';
import ProgCircle from '../ProgCircle/ProgCricle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'Nothing',
      score: 0
    };
    this.updateSelected = this.updateSelected.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.progressRestart = this.progressRestart.bind(this);
    this.quiz_data = [
      {
        question: 'What is the meaning of life?',
        correct_answer: '42',
        possible_answers: ['Love', 'Money', 'Javascript', '42']
      },
      {
        question: 'Who is the best coding Youtuber?',
        correct_answer: 'Young Lamb',
        possible_answers: ['funfunfunction', 'Young Lamb', 'Wes Bos', 'Coding Train']
      },
      {
        question: 'What is under the rainbow?',
        correct_answer: 'Young Lamb',
        possible_answers: ['Gold', 'Young Lamb', 'Happiness', 'Chicken Nuggets']
      }
    ]
  }

  submitAnswer() {
    if (this.state.selected === this.quiz_data[this.state.progress].correct_answer) {
      this.setState({
        score: this.state.score + 1,
        progress: this.state.progress + 1,
        selected: 'Nothing'
      })
    } else {
      this.setState({
        progress: this.state.progress + 1,
        selected: 'Nothing'
      })
    }
  }

  updateSelected(answer) {
    this.setState({
      selected: answer
    })
  }

  progressRestart() {
    this.setState({
      progress: 0,
      score: 0
    })
  }

  render() {
      return (
        <div>
          <h2>Quiz App</h2>

          {this.state.progress < this.quiz_data.length ? (
            <div>
              <Question current_question={this.quiz_data[this.state.progress].question} />
              <MultiChoice
                answers={this.quiz_data[this.state.progress].possible_answers}
                updateSelected={this.updateSelected}
                handleSubmit={this.submitAnswer}
                selectedAnswer={this.state.selected} />
                <div className="ProgCircle">
                  <ProgressBar current_step={this.state.progress + 1} question_length={this.quiz_data.length} />
                  <ProgCircle percent={this.state.progress/this.quiz_data.length*100} />
                </div>
                <br />
            </div>
          )
          : (
          <Results score={this.state.score} handleRestart={this.progressRestart} end_message="Congratulations, you have finished!" />
           )}
        </div>
      );
    }
}

export default App;
