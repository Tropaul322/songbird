import React from 'react';
import ReactDOM from 'react-dom';
import img from './assets/images/main.png';
import App from './components/app/index';

document.getElementById('root').style.backgroundImage = `url(${img})`;

ReactDOM.render(<App />, document.getElementById('root'));
