import React, { Component } from 'react';

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
    const { checked } = this.props;
    if (checked) {
      document.querySelector('.next-button').disabled = '';
    };

    return (
      <button type="button" className="btn btn-outline-secondary next-button" onClick={() => setTimeout(this.props.changePage(), 300)}>Next Level</button>
    );
  };
};
