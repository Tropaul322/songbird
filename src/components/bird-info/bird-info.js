import React, { Component } from 'react';
import './bird-info.scss';
import BirdInfoPlayer from '../bird-info-player/index';

export default class BirdInfo extends Component {

  render() {
    const { bird } = this.props;

    const View = ({ bird }) => {
      const { name, description, image, species, id } = bird;

      return (
        <div className="bird-info card" key={id}>
          <div className="card-body">
            <img className="card-body_img" src={image} />
            <ul className="list-group list-group-flush card-group">
              <li className="list-group-item"><h3>{name}</h3></li>
              <li className="list-group-item"><h4>{species}</h4></li>
              <li className="list-group-item">
                <BirdInfoPlayer bird={bird} />
              </li>
            </ul>
          </div>
          <span className="bird-description">{description}</span>
        </div>
      );
    };

    const data = this.props.bird ? <View bird={bird} /> : 'Choose bird';

    return (
      <div className="col-md-6">
        <div className="bird-info card non-select">
          {data}
        </div>
      </div>
    );
  };
};
