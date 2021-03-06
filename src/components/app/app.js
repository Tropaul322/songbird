import React, { Component } from 'react';
import RandomBird from '../random-bird/index';
import MainMenu from '../main-menu/index';
import Header from '../header/index';
import './app.scss'
import AnswerBlock from '../answer-block/index';
import NextButton from '../next-button/index'
import BirdInfo from '../bird-info/index'
import birdData from '../../data/birdData';
import EndGame from '../end-game/index';


export default class App extends Component  {
    constructor(){
        super();
        this.state = {
            birds: this.generateBirds(0),
            score: 0,
            bird: this.getRandomBird(0),
            selectedBird: {name: '', description: '', image: '', species: ''},
            page: 7,
            correct: false,
            id: null,
            attempts: 1,
        };
    };
    
    onBirdSelected = (id, e) =>{
        const wrong = document.querySelector('#wrong')
        wrong.pause();
        wrong.currentTime = 0;
            if(this.state.id !== id){
                this.setState({
                    id,
                    selectedBird:this.getBird(id)
                });
                this.checkAnswer(id, e);
            } return;
    };
    
    checkAnswer(id, e){
        const correct = document.querySelector('#win')
        const wrong = document.querySelector('#wrong')
        correct.volume = 0.2;
        wrong.volume = 0.2
        if(!this.state.correct) {
            if(id === this.state.bird.id) {
                e.target.querySelector('.li-btn').classList.add('correct');
                
                const score = this.state.score + 6 - this.state.attempts;
                this.setState({
                    correct: true,
                    score: score
                });
                if(this.state.id !== id){
                    correct.play();
                } return
            }else {
                if(e.target.querySelector('.li-btn').classList[1] !== 'error'){;
                e.target.querySelector('.li-btn').classList.add('error');
                
                this.setState(({ attempts }) => ({
                    attempts: attempts + 1,
                }));
                if(this.state.id !== id){
                    wrong.play();
                } return;
            };
            } return
        };
    };

    startGame = () => {
        this.restartGame()
    }

    getBird(id){
        const {birds} = this.state;
        const [bird] = birds.filter(item => item.id === id);
        return bird;
    };

    generateBirds(page){
        const birds = birdData[page];
        return birds;
    };
    
    getRandomBird(page){
        let birdNumber = Math.floor(Math.random() * 6);
        let bird = birdData[page][birdNumber];
        return bird;
    };
    
    changePage = () => {
        const win = document.querySelector('#win');
        win.pause();
        win.currentTime = 0;
        const page = this.state.page + 1;
        if(page < 6 ){
            this.setState({
                page: page,
                birds: this.generateBirds(page),
                bird: this.getRandomBird(page),
                selectedBird: {name: '', description: '', image: '', species: ''},
                correct: false,
                id: null,
                attempts: 1,
            });
        } else if (page === 6) {
            this.setState({
                page: 6
            });
        };
    };

    restartGame = ()=> {
        const page = 0
        this.setState({
            page: 0,
            score: 0,
            birds: this.generateBirds(page),
            bird: this.getRandomBird(page),
            selectedBird: {name: '', description: '', image: '', species: ''},
            correct: false,
            id: null,
            attempts: 1,
        });
    };
    

    render(){
        const { bird, birds, selectedBird, score, page } = this.state
        const content = (page === 6) ? <><EndGame score={score} restartGame={this.restartGame} /></> 
        :(  <>
                <Header  score={score} checked={this.state.correct} page={page}/>
                <RandomBird bird={bird}  checked={this.state.correct} score={score}/>
                    <div className="row mb2">
                        <audio id="win" preload="auto" src={`https://www.myinstants.com/media/sounds/correct_F5OqKUF.mp3`}></audio>
                        <audio id="wrong" preload="auto" src={`https://www.myinstants.com/media/sounds/wrong_5.mp3`}></audio>
                        <AnswerBlock birds={birds} onItem={this.onBirdSelected} page={page}/>
                        <BirdInfo bird={selectedBird} />
                        <NextButton changePage={this.changePage} page={page} checked={this.state.correct}/>
                     </div>
            </>)
        
        const pageView = (page === 7) ? <><MainMenu startGame={this.startGame}/></> : content

        return (
            <div className="blur">
                <div className="container-md">
                    {pageView}
                </div>
            </div>
        );
    };
};
