import React, { Component } from 'react';
import './main-menu.scss';
import '../../css-constants/index.scss'


export default class MainMenu extends Component {

    render(){
        const {startGame} = this.props;
        return(
            <div className="wrapper menu">
                <h1 className="header_title " >SongBird</h1>
                <div className="menu_info">
                    Представляю вам приложение, с помощью которого вы сможете запомнить голоса различных птиц, начиная от воробьиных и заканчивая морскими птицами, а также испытать свои текущие знания!<br></br> Скорее нажимайте на кнопку и становитесь настоящим гуру птиц. 
                </div>
                <button type="button" className="btn menu_btn" onClick={() => startGame()}>Начать</button>
            </div>
        )
    };

}