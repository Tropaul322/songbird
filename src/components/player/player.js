import React, { Component } from 'react'
import stopButton from '../../assets/images/pause.png';
import playButton from '../../assets/images/video.png';
import volume from '../../assets/images/sound.png';
import noVolume from '../../assets/images/no-sound.png';
import './player.scss'
import '../../css-constants/index.scss'

export default class Player extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bird: props.bird,
      isPlaying: false,
      audio: new Audio(`${props.bird.audio}`),
      currentTime: '00:00',
      duration: null,
      volume: 0.5,
      handle: 0,
      isVolume: false
    };
  };

  componentDidMount(){
    this.getDuration();
  };

  componentDidUpdate(prevProps, prevState){
    if(this.props.bird !== prevProps.bird){
      this.setState({
        audio: new Audio(`${this.props.bird.audio}`),
        currentTime: '00:00',
        isPlaying: false,
        duration:'',
      });
      this.state.audio.pause();
      
    };
    this.getDuration();
  };

  checkStatus(){
    const {audio} = this.state;
    if (audio.paused) {
      return true;
    } else return false;
  };

  onPlayClick = () => {
    this.updateSeekBar();
    const {audio, volume} = this.state;
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
    if (document.querySelector('.audio-slider')) {
      const { audio } = this.state;
      audio.addEventListener('timeupdate', () => {
        this.onFinish();
        this.updatePosition(audio);
        this.updateCurrentTime(audio);
      });
    };
  };

  updateCurrentTime = (audio) => {
    if (document.querySelector('.audio-slider')) {
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
    if (document.querySelector('.audio-slider')) {
      const fillBar = document.querySelector('.fill');
      const bar = document.querySelector('.audio-slider');
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
    const img = document.querySelector('.volume-toggle_img');
    audio.volume = e.target.value;
    if(audio.volume === 0){
      img.src = noVolume
    } else {
      img.src = volume 
    };
    document.querySelector('.volume-fill').style.width = `${e.target.value * 100}%`;
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
    const { audio  } = this.state;
    this.onSliderChange()
    const bar = document.querySelector('.audio-slider');
    const fillBar = document.querySelector('.fill');
    bar.step = '0.01';
    const position = audio.currentTime / audio.duration;
    fillBar.style.width = `${Math.ceil(position * 100)}%`;
    audio.currentTime = bar.value;
  };

  onVolumeClick = () => {
    const { audio  } = this.state;
   
    this.setState(({ isVolume }) => ({
      isVolume: !isVolume,
    }));
    audio.volume = 1
    
  };

  render(){
    const {isPlaying, currentTime, duration, handle, isVolume} = this.state;

    const volumeBar = isVolume ? (
                            <div className="slider-container">
                              <span className="bar"><span className='volume-fill'></span></span>
                              <input className="slider" defaultValue="0.5" type="range" min="0" max="1"step='0.1' onChange={(e) => this.onChangeValue(e)}></input>
                            </div>
                            ) : null;

    const icon = isPlaying ? stopButton : playButton ;
    const player = duration ? (<div className="audio-player">
                            <div className="wrapper">
                            <div className="button" onClick={this.onPlayClick}><img className="toggle_img" src={icon} /></div>
                            <div className="seek-bar">
                              <span className="audio-bar"><span className='fill'></span></span>
                              <input className="audio-slider" defaultValue="0" type="range" min="0" max={handle}   onChange={() => this.changeValue()} step="0.05"></input>
                            </div>
                            <div className="volume-button" onClick={this.onVolumeClick} ><img className="volume-toggle_img" src={volume} /></div>
                              {volumeBar}
                            </div>
                            <div className="time">
                              <span className="currentTime">{currentTime}</span>
                              <span className="duration">{duration}</span>
                            </div>
                            </div>) 
                            : 'Loading'
    return (
      <>
        {player}
      </>
    );
  };
}; 