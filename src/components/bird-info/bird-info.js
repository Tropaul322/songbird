import React, { Component } from 'react';
import './bird-info.scss';
import playButton from '../../assets/images/video.png';

export default class BirdInfo extends Component {
  constructor(){
    super();
  };
  
  render() {
    const { bird } = this.props;

    const View = ({ bird }) => {
      const { name, description, image, species, id } = bird[0];
      
      return (
        <div className="bird-info card" key={id}>
          <div className="card-body">
            <img src={image} />
            <ul className="list-group list-group-flush card-group">
              <li className="list-group-item"><h3>{name}</h3></li>
              <li className="list-group-item"><h4>{species}</h4></li>
              <li className="list-group-item">
                <div className="audio-player-card" key={id}>
                  <div className="button-card"><img className="toggle" src={playButton} /></div>
                  <div className="seek-bar-card">
                    <div className="fill-card" />
                    <div className="handle-card" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <span>{description}</span>
        </div>
      );
    };
    const data = this.props.bird ? <View bird={bird} /> : "Choose bird";

    return (
      <div className="col-md-6">
        <div className="bird-info card non-select">
          {data}
        </div>
      </div>
    );
  };
};
