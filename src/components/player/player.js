import React, { Component } from 'react'
import stopButton from '../../assets/images/pause.png';
import playButton from '../../assets/images/video.png';
import './player.scss'
import '../../css-constants/index.scss'

export default class Player extends Component{

  constructor(props) {
    super(props);
    this.state = {
      bird: props.bird,
      isPlaying: false,
      audio: new Audio(`${props.bird.audio}`),
      currentTime: '00:00',
      duration: null,
      volume: 0.5,
      handle: 0
    };
  };

  componentDidMount(){
    this.updateSeekBar();
    this.getDuration();
  };

  componentDidUpdate(prevProps, prevState){
    if(this.state.bird !== prevState.bird){
      console.log('up');
      this.setState({
        audio: this.state.audio,
        currentTime: '00:00',
        isPlaying: false,
        duration:''
      });
      this.updateSeekBar();
      this.getDuration();
    };
  };

  checkStatus(){
    const {audio} = this.state;
    if (audio.paused) {
      return true;
    } else return false;
  };

  onPlayClick = () =>{
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
    const { audio } = this.state;
    audio.addEventListener('timeupdate', () => {
      this.onFinish();
      this.updatePosition(audio);
      this.updateCurrentTime(audio);
    });
  };

  updateCurrentTime = (audio) => {
    const curTime = Math.floor(audio.currentTime) < 10 ? `00:0${Math.floor(audio.currentTime)}`: `00:${Math.floor(audio.currentTime)}`;
    this.setState({
      currentTime: curTime,
    });
  };

  updatePosition = (audio) => {
    const fillBar = document.querySelector('.fill');
    const bar = document.querySelector('.audio-slider');
    const position = audio.currentTime / audio.duration;
    bar.step = '0.01';
    bar.value = audio.currentTime;
    fillBar.style.width = `${Math.ceil(position * 100)}%`;
  }

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
    if (audio.duration) {
      this.setState({
        handle: Math.floor(audio.duration)
      });
      if(Math.floor(audio.duration) > 59 && Math.floor(audio.duration) < 119) {
        this.setState({
          duration: `01:${Math.floor(audio.duration) - 60}`,
        });
      }else if(Math.floor(audio.duration) > 119 && Math.floor(audio.duration) < 179) {
        this.setState({
          duration: `02:${Math.floor(audio.duration) - 120}`,
        });
      }else if(Math.floor(audio.duration) > 179 && Math.floor(audio.duration) < 239) {
        this.setState({
          duration: `03:${Math.floor(audio.duration) - 180}`,
        });
      }else if(Math.floor(audio.duration) > 239) {
        this.setState({
          duration: `04:${Math.floor(audio.duration) - 240}`,
        });
      }else {
        this.setState({
          duration: `00:${Math.floor(audio.duration)}`,
        });
      };
    } else {
      setTimeout(() => { this.getDuration(); }, 400);
    };
  };

  onChangeValue(e) {
    const { audio  } = this.state;
    audio.volume = e.target.value;
    console.log(e.target.value * 100);
    document.querySelector('.volume-fill').style.width = `${e.target.value * 100}%`;
  };

  changeValue(){
    const { audio  } = this.state;
    const bar = document.querySelector('.audio-slider');
    const fillBar = document.querySelector('.fill');
    bar.step = '0.01';
    const position = audio.currentTime / audio.duration;
    fillBar.style.width = `${Math.ceil(position * 100)}%`;
    audio.currentTime = bar.value;
  };

  render(){
    const {isPlaying, currentTime, duration, handle} = this.state;
    const icon = isPlaying ? stopButton : playButton ;
    const player = duration ? (<div className="audio-player">
                            <div className="wrapper">
                            <div className="button" onClick={this.onPlayClick}><img className="toggle_img" src={icon} /></div>
                            <div className="seek-bar">

                              <span className="audio-bar"><span className='fill'></span></span>
                              <input className="audio-slider" defaultValue="0" type="range" min="0" max={handle}   onChange={() => this.changeValue()} step="0.05"></input>
                            </div>
                            <div className="slider-container">
                              <span className="bar"><span className='volume-fill'></span></span>
                              <input className="slider" defaultValue="0.5" type="range" min="0" max="1"step='0.1' onChange={(e) => this.onChangeValue(e)}></input>
                            </div>
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