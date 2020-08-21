import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './next-button.scss';

export default class NextButton extends Component {
  componentDidMount() {
    document.querySelector('.next-button').disabled = 'disabled';
  };

  componentDidUpdate(prevProps) {
    const { page } = this.props;
    if (page !== prevProps.page) {
      document.querySelector('.next-button').disabled = 'disabled';
    };
  };

  render() {
    const { checked, changePage } = this.props;
    if (checked) {
      document.querySelector('.next-button').disabled = '';
    };

    return (
      <button type="button" className="btn btn-outline-secondary next-button" onClick={() => setTimeout(changePage(), 300)}>Next Level</button>
    );
  };
};

NextButton.propTypes = {
  page: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};
