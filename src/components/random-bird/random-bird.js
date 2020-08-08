import React, { Component } from 'react';
import img from '../../assets/images/bird.jpg'
import playButton from '../../assets/images/play-button.png'


import './random-bird.scss'

export default class RandomBird extends Component{

    render(){
        return (
            <div className="jumbotron jumbotron-fluid d-flex rounded">
                <img className="bird-img" src={img}></img>
                <div className="box">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><h2>****</h2></li>
                        <li className="list-group-item">
                            <div className="audio-player">
                                <div className="button"><img src={playButton}></img></div>
                                <div className="seek-bar">
                                    <div className="fill"></div>
                                    <div className="handle"></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}