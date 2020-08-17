import React, { Component } from 'react';
import RandomBird from '../random-bird/index'
import Header from '../header/index';
import './app.scss'
import AnswerBlock from '../answer-block/index';
import NextButton from '../next-button/index'
import BirdInfo from '../bird-info/index'
import birdData from '../../data/birdData';
import EndGame from '../end-game/index'


export default class App extends Component  {
    constructor(){
        super();
        this.state = {
            birds: this.generateBirds(0),
            score: 0,
            bird: this.getRandomBird(0),
            selectedBird: null,
            page: 0,
            correct: false,
            id: null,
            attempts: 1,
        };
    };
    
    onBirdSelected = (id, e) =>{
        if(this.state.id !== id){
            this.setState({
                id,
                selectedBird:this.getBird(id)
            });
            this.checkAnswer(id, e);
        } return;
    };
    
    checkAnswer(id, e){
        if(!this.state.correct) {
            if(id === this.state.bird.id) {
                e.target.querySelector('.li-btn').classList.add('correct');
                const score = this.state.score + 6 - this.state.attempts;
                this.setState({
                    correct: true,
                    score: score
                });
            }else {
                e.target.querySelector('.li-btn').classList.add('error');
                this.setState(({ attempts }) => ({
                    attempts: attempts + 1,
                }));
            };
        };
    };

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
        const page = this.state.page + 1
        if(page < 6 ){
        setTimeout( 
            this.setState({
                page: page,
                birds: this.generateBirds(page),
                bird: this.getRandomBird(page),
                selectedBird: null,
                correct: false,
                id: null,
                attempts: 1,
            }),
        300) 
        } else if (page === 6) {
            this.setState({
                page: 6
            })
        }
    };

    restartGame = ()=> {
        const page = 0
        this.setState({
            page: 1,
            score: 0,
            birds: this.generateBirds(page),
            bird: this.getRandomBird(page),
            selectedBird: null,
            correct: false,
            id: null,
            attempts: 1,
        });
    };
    

    render(){
        const { bird, birds, selectedBird, score, page } = this.state
        const content = (page === 6) ? <><EndGame score={score} restartGame={this.restartGame} /></> :( <><Header  score={score} checked={this.state.correct} page={page}/>
                                                    <RandomBird bird={bird}  checked={this.state.correct} score={score}/>
                                                    <div className="row mb2">
                                                        <AnswerBlock birds={birds} onItem={this.onBirdSelected} page={page}/>
                                                        <BirdInfo bird={selectedBird} />
                                                        <NextButton changePage={this.changePage} page={page} checked={this.state.correct}/>
                                                    </div></>)
                                                    
        return (
            <div className="blur">
                <div className="container-md">
                    {content}
                </div>
            </div>
        );
    };
};
