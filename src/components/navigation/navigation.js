import React from 'react';

import './navigation.scss';

const Navigation = () => (
  <ul className="pagination">
    <li className="navigation_list-item page-item active"><a className="page-link" href="#">Разминка</a></li>
    <li className="navigation_list-item page-item"><a className="page-link" href="#">Воробьиные</a></li>
    <li className="navigation_list-item page-item"><a className="page-link" href="#">Лесные птицы</a></li>
    <li className="navigation_list-item page-item"><a className="page-link" href="#">Певчие птицы</a></li>
    <li className="navigation_list-item page-item"><a className="page-link" href="#">Хищные птицы</a></li>
    <li className="navigation_list-item page-item"><a className="page-link" href="#">Морские птицы</a></li>
  </ul>
);
export default Navigation;
