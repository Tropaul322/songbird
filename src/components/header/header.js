import React from 'react';
import Navigation from '../navigation/index'
import './header.css'


const Header = () => {

    return (
        <header className="header d-flex">
            <div className='top-panel d-flex'>
                <h1 className='header_title'>SongBird</h1>
                <span className="score">Score: <span>0</span></span>
            </div>
            <Navigation />
        </header>
    )

}
export default Header
