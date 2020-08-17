import React, { Component } from "react"
import './endGame.scss'
import like from '../../assets/images/tenor.gif'
import dicaprio from '../../assets/images/giphy.gif'


export default class EndGame extends Component{

    render(){
        const {score, restartGame} = this.props
        const title = score === 35 ? <span>This is <span className='blue'>INSANE</span>. You are the <span className='blue'>God</span> of birds!</span> : 'Nice work! Wanna try again?'
        const gif = score === 35 ? dicaprio : like
        const button = score === 35 ? null : <div className="btn restart_btn" onClick={()=> restartGame()}>Restart game</div>
        return(
            <div className="wrapper">
                <div className="info">
                    <img className="gif" src={gif} ></img>
                    <span>{title}</span>
                    <span>Your final Score: {score}</span>
                    {button}
                </div>
            </div>
        );
    };
};