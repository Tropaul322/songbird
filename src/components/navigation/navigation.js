import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './navigation.scss';

export default class Navigation extends Component {
  componentDidMount() {
    const a = document.querySelectorAll('.pagination li');
    a[0].classList.add('active');
  }

  componentDidUpdate(prevProps) {
    const { page } = this.props;
    if (page !== prevProps.page) {
      const a = document.querySelectorAll('.pagination li');
      a[page - 1].classList.remove('active');
      a[page].classList.add('active');
    };
  };

  render() {
    return (
      <ul className="pagination">
        <li className="navigation_list-item page-item"><span className="page-link">Разминка</span></li>
        <li className="navigation_list-item page-item"><span className="page-link">Воробьиные</span></li>
        <li className="navigation_list-item page-item"><span className="page-link">Лесные птицы</span></li>
        <li className="navigation_list-item page-item"><span className="page-link">Певчие птицы</span></li>
        <li className="navigation_list-item page-item"><span className="page-link">Хищные птицы</span></li>
        <li className="navigation_list-item page-item"><span className="page-link">Морские птицы</span></li>
      </ul>
    );
  };
};

Navigation.propTypes = {
  page: PropTypes.number.isRequired,
};
