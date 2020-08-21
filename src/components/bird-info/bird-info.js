import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './bird-info.scss';
import BirdInfoPlayer from '../bird-info-player/index';

export default class BirdInfo extends Component {
  render() {
    const { bird } = this.props;

    const View = ({ bird }) => {
      const {
        name, description, image, species,
      } = bird;

      return (
        <div className="bird-info card">
          <div className="card-body">
            <img className="card-body_img" src={image} alt="bird" />
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
    
    const data = (bird.name !== '') ? <View bird={bird} /> : (
      <div className="choose_wrapper">
        <div className="chooseBlock">
          Listen to the player.
          <br />
          And guess the bird.
          {' '}
        </div>
        {' '}
      </div>
    );
    return (

      <div className="col-md-6 mb">
        {data}
      </div>
    );
  };
};

BirdInfo.propTypes = {
  bird: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
