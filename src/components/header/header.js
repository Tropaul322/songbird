import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation/index';
import './header.scss';

export default class Header extends Component {
  componentDidUpdate() {
    const { checked, score } = this.props;
    if (checked) {
      document.querySelector('.score_number').innerText = score;
    }
  }

  render() {
    const { page } = this.props;
    return (
      <header className="header d-flex">
        <div className="top-panel d-flex">
          <h1 className="header_title">SongBird</h1>
          <span className="score">
            Score:
            <span className="score_number">0</span>
          </span>
        </div>
        <Navigation page={page} />
      </header>
    );
  }
}
Header.propTypes = {
  page: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
};
