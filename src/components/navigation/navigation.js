import React, { Component } from 'react';
import './navigation.scss';

export default class Navigation extends Component{

  componentDidUpdate(prevProps){
    if (this.props.page !== prevProps.page){
      const {page} = this.props
      const a = document.querySelectorAll('.pagination li')
      a[page-1].classList.remove('active')
      a[page].classList.add('active')
    };
  };

  componentDidMount(){
    const a = document.querySelectorAll('.pagination li')
    a[0].classList.add('active')
  }

  render() {

    return (
        <ul className="pagination">
          <li className="navigation_list-item page-item"><a className="page-link" href="#">Разминка</a></li>
          <li className="navigation_list-item page-item"><a className="page-link" href="#">Воробьиные</a></li>
          <li className="navigation_list-item page-item"><a className="page-link" href="#">Лесные птицы</a></li>
          <li className="navigation_list-item page-item"><a className="page-link" href="#">Певчие птицы</a></li>
          <li className="navigation_list-item page-item"><a className="page-link" href="#">Хищные птицы</a></li>
          <li className="navigation_list-item page-item"><a className="page-link" href="#">Морские птицы</a></li>
        </ul>
    );
  };
};
