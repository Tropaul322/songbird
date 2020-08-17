import React, { Component } from 'react';
import Navigation from '../navigation/index';
import './header.scss';

export default class Header extends Component {

  componentDidUpdate() {
    if (this.props.checked) {
      document.querySelector('.score_number').innerText = this.props.score;
    };
  };

  render() {
    return (
      <header className="header d-flex">
        <div className="top-panel d-flex">
          <h1 className="header_title">SongBird</h1>
          <span className="score">
            Score:
            <span className="score_number">0</span>
          </span>
        </div>
        <Navigation />
      </header>
    );
  };
};
