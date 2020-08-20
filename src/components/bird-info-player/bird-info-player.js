import React, { Component } from 'react'
import stopButton from '../../assets/images/pause.png';
import playButton from '../../assets/images/video.png';
import volume from '../../assets/images/sound.png';
import noVolume from '../../assets/images/no-sound.png';
import './bird-info-player.scss'


export default class BirdInfoPlayer extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      audio: new Audio(`${props.bird.audio}`),  
      currentTime: '00:00',
      duration: null,
      volume: 0.5,
      handle: 0,
      isVolume: false,
    };
  };

  componentWillUnmount(){
    this.state.audio.pause();
  };

  componentDidMount(){
    this.getDuration();
  };

  checkStatus(){
    const {audio} = this.state;
    if (audio.paused) {
      return true;
    } else return false;
  };

  onPlayClick = () =>{
    const {audio, volume} = this.state;
    this.updateSeekBar();
    this.changeIcon();
    if (this.checkStatus()){
      audio.play();
      audio.volume = volume;
    } else {audio.pause()};
  };

  changeIcon = () => {
    this.setState(({ isPlaying }) => ({
      isPlaying: !isPlaying,
    }));
  };

  updateSeekBar = () => {
    if (document.querySelector('.bird-audio-slider')) {
      const { audio } = this.state;
      audio.addEventListener('timeupdate', () => {
        this.onFinish();
        this.updatePosition(audio);
        this.updateCurrentTime(audio);
      });
    };
  };

  updateCurrentTime = (audio) => {
    if (document.querySelector('.bird-audio-slider')) {
      if ( Math.floor(audio.currentTime) > 0 && Math.floor(audio.currentTime) < 10 ) {
          const curTime = `00:0${Math.floor(audio.currentTime)}`;
          this.setState({
              currentTime: curTime,
            });
      } else if ( Math.floor(audio.currentTime) > 9 && Math.floor(audio.currentTime) < 60 ) {
          const curTime = `00:${Math.floor(audio.currentTime)}`;
          this.setState({
              currentTime: curTime,
            });
      } else if ( Math.floor(audio.currentTime) > 59 && Math.floor(audio.currentTime) < 119 ) {
          if(Math.floor(audio.currentTime) - 60 < 10) {
            const curTime = `01:0${Math.floor(audio.currentTime) - 60}`;
            this.setState({
                currentTime: curTime,
              });
          } else {
          const curTime = `01:${Math.floor(audio.currentTime) - 60}`;
          this.setState({
              currentTime: curTime,
            });
          }
      } else if ( Math.floor(audio.currentTime) > 119 && Math.floor(audio.currentTime) < 179 ) {
        if(Math.floor(audio.currentTime) - 120 < 10) {
          const curTime = `02:0${Math.floor(audio.currentTime) - 120}`;
          this.setState({
              currentTime: curTime,
            });
        } else {
        const curTime = `02:${Math.floor(audio.currentTime) - 120}`;
        this.setState({
            currentTime: curTime,
          });
        }
      } else if ( Math.floor(audio.currentTime) > 179 && Math.floor(audio.currentTime) < 239 ) {
        if(Math.floor(audio.currentTime) - 180 < 10) {
          const curTime = `03:0${Math.floor(audio.currentTime) - 180}`;
          this.setState({
              currentTime: curTime,
            });
        } else {
        const curTime = `03:${Math.floor(audio.currentTime) - 180}`;
        this.setState({
            currentTime: curTime,
          });
        }
        };
    };
  };

  updatePosition = (audio) => {
    if (document.querySelector('.bird-audio-slider')) {
      const fillBar = document.querySelector('.bird-fill');
      const bar = document.querySelector('.bird-audio-slider');
      const position = audio.currentTime / audio.duration;
      bar.value = audio.currentTime;
      fillBar.style.width = `${Math.ceil(position * 100)}%`;
    };
  };

  onFinish = () => {
    const { audio } = this.state;
    if (audio.ended) {
      this.setState({
        isPlaying: false,
      });
    };
  };

  getDuration = () => {
    const { audio } = this.state;
    audio.addEventListener('loadedmetadata', () => {
      this.setState({
        handle: Math.floor(audio.duration)
      });
      if(Math.floor(audio.duration) > 59 && Math.floor(audio.duration) < 119) {
        if ((Math.floor(audio.duration) - 60) < 10) {
          this.setState({
            duration: `01:0${Math.floor(audio.duration) - 60}`,
          });
        } else{ this.setState({
            duration: `01:${Math.floor(audio.duration) - 60}`,
          });
        }
      }else if(Math.floor(audio.duration) > 119 && Math.floor(audio.duration) < 179) {
        if ((Math.floor(audio.duration) - 120) < 10) {
          this.setState({
            duration: `02:0${Math.floor(audio.duration) - 120}`,
          });
        } else{ this.setState({
            duration: `02:${Math.floor(audio.duration) - 120}`,
          });
        }
      }else if(Math.floor(audio.duration) > 179 && Math.floor(audio.duration) < 239) {
        if ((Math.floor(audio.duration) - 180) < 10) {
          this.setState({
            duration: `03:0${Math.floor(audio.duration) - 180}`,
          });
        } else{ this.setState({
            duration: `03:${Math.floor(audio.duration) - 180}`,
          });
        }
      }else if(Math.floor(audio.duration) > 239) {
        if ((Math.floor(audio.duration) - 240) < 10) {
          this.setState({
            duration: `04:0${Math.floor(audio.duration) - 240}`,
          });
        } else{ this.setState({
            duration: `04:${Math.floor(audio.duration) - 240}`,
          });
        }
      }else {
        if(Math.floor(audio.duration) < 10) {
          this.setState({
            duration: `00:0${Math.floor(audio.duration)}`,
          });
        } else{ 
          this.setState({
            duration: `00:${Math.floor(audio.duration)}`,
          });
        }
      };
    });
  };

  onChangeValue(e) {
    const { audio  } = this.state;
    const img = document.querySelector('.bird-volume-toggle_img');
    audio.volume = e.target.value;
    if(audio.volume === 0){
      img.src = noVolume;
    } else {
      img.src = volume ;
    };
    document.querySelector('.bird-volume-fill').style.width = `${e.target.value * 100}%`;
  };
  onSliderChange(){
    const {audio} = this.state;
    this.setState({
      isPlaying: true,
    });
    this.updateSeekBar();
    audio.play()
  }

  changeValue(){
    const { audio } = this.state;
    this.onSliderChange()
    const bar = document.querySelector('.bird-audio-slider');
    const fillBar = document.querySelector('.bird-fill');
    const position = audio.currentTime / audio.duration;
    fillBar.style.width = `${Math.ceil(position * 100)}%`;
    audio.currentTime = bar.value;
  };

  onVolumeClick = () => {
    this.setState(({ isVolume }) => ({
      isVolume: !isVolume,
    }));
  };

  render(){
    const {isPlaying, currentTime, duration, handle, isVolume} = this.state;
    const icon = isPlaying ? stopButton : playButton ;
    const volumeBar = isVolume ? (
      <div className="bird-slider-container">
        <span className="bird-bar"><span className='bird-volume-fill'></span></span>
        <input className="bird-slider" defaultValue="0.5" type="range" min="0" max="1"step='0.1' onChange={(e) => this.onChangeValue(e)}></input>
      </div>
      ) : null;
    const player = duration ? (<div className="bird-audio-player">
                                  <div className="bird-wrapper">
                                  <div className="bird-button" onClick={this.onPlayClick}><img className="bird-toggle_img" src={icon} /></div>
                                  <div className="bird-seek-bar">
                                    <span className="bird-audio-bar"><span className='bird-fill'></span></span>
                                    <input className="bird-audio-slider" defaultValue="0" type="range" min="0" max={handle}   onChange={() => this.changeValue()} step="0.05"></input>
                                  </div>
                                  <div className="bird-volume-button" onClick={this.onVolumeClick} ><img className="bird-volume-toggle_img" src={volume} /></div>
                                    {volumeBar}
                                  </div>
                                  <div className="bird-time">
                                    <span className="bird-currentTime">{currentTime}</span>
                                    <span className="bird-duration">{duration}</span>
                                  </div>
                                </div>) 
                            : 'Loading';
    return (
      <>
        {player}
      </>
    );
  };
}; 