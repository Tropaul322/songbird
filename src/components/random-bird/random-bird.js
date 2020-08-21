import React, { Component } from 'react';
import PropTypes from 'prop-types';
import birdImg from '../../assets/images/bird.jpg';
import Player from '../player/index';

import './random-bird.scss';

export default class RandomBird extends Component {
  render() {
    const { checked, bird } = this.props;

    const hiddenText = checked ? bird.name : '****';
    const hiddenImg = checked ? bird.image : birdImg;

    return (
      <div className="jumbotron jumbotron-fluid d-flex rounded">
        <img className="bird-img" src={hiddenImg} alt="bird" />
        <div className="box">
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h2>{hiddenText}</h2></li>
            <li className="list-group-item">
              <Player bird={bird} correct={checked} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

RandomBird.propTypes = {
  bird: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  checked: PropTypes.bool.isRequired,
};
