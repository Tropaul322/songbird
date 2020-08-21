import React, { Component } from 'react';
import './endGame.scss';
import PropTypes from 'prop-types';
import like from '../../assets/images/tenor.gif';
import dicaprio from '../../assets/images/giphy.gif';

export default class EndGame extends Component {
  componentDidMount(){
    document.querySelector('.end_audio').volume=0.1
  }

  render() {
    const { score, restartGame } = this.props;
    const title = score === 30 ? (
      <span>
        Это просто
        <span className="blue"> Безумие</span>
        . Ты настоящий
        <span className="blue"> Король</span>
        {' '}
        Птиц
      </span>
    ) : 'Отличная работа! Хочешь попробовать снова?';
    const gif = score === 30 ? dicaprio : like;
    const button = score === 30 ? null : <div className="btn restart_btn" onClick={() => restartGame()}>Restart game</div>;
    return (
      <div className="wrapper">
        <audio autoPlay="autoplay" className='end_audio' src="https://www.myinstants.com/media/sounds/victoryff.swf.mp3"/>
        <div className="info">
          <img className="gif" src={gif} alt="gif" />
          <span>{title}</span>
          <span>
            Твой окончательный балл:
            {' '}
            {score}
            {' '}
            / 30
          </span>
          {button}
        </div>
      </div>
    );
  };
};

EndGame.propTypes = {
  score: PropTypes.number.isRequired,
  restartGame: PropTypes.func.isRequired,
};
