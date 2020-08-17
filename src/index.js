import React from 'react';
import ReactDOM from 'react-dom';
import img from '../src/assets/images/Dark-Forest-Wallpaper-On-Wallpaper-Hd-13.jpg'
import App from './components/app/index';

document.getElementById('root').style.backgroundImage = `url(${img})`

ReactDOM.render(<App />, document.getElementById('root'));
