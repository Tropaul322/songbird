import React, { Component } from 'react';
import birdImg from '../../assets/images/bird.jpg';
import Player from '../player/index';

import './random-bird.scss';

export default class RandomBird extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bird: props.bird,
    };
  };

  render() {
    const { image, name } = this.props.bird;

    const hiddenText = this.props.checked ? name : '****';
    const hiddenImg = this.props.checked ? image : birdImg;

    return (
      <div className="jumbotron jumbotron-fluid d-flex rounded">
        <img className="bird-img" src={hiddenImg} />
        <div className="box">
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h2>{hiddenText}</h2></li>
            <li className="list-group-item">
              <Player bird={this.props.bird} />
            </li>
          </ul>
        </div>
      </div>
    );
  };
};
