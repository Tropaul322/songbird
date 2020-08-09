import React, { Component } from 'react'
import img from '../../assets/images/bird.jpg'
import './bird-info.scss'
import playButton from '../../assets/images/play-button.png'



export default class Birdinfo extends Component {

    render(){
        return (
            <div className="col-md-6">
                <div className="bird-info card">
                    <div className="card-body">
                        <img src={img}></img>
                        <ul className="list-group list-group-flush card-group">
                            <li className="list-group-item"><h3>Ворон</h3></li>
                            <li className="list-group-item"><h4>Corvus corax</h4></li>
                            <li className="list-group-item">
                            <div className="audio-player-card">
                                <div className="button-card"><img src={playButton}></img></div>
                                    <div className="seek-bar-card">
                                        <div className="fill-card"></div>
                                        <div className="handle-card"></div>
                                </div>
                            </div>
                            </li>
                        </ul>
                    </div>
                    <span>Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.</span>
                </div>
            </div>
        )
    }

}