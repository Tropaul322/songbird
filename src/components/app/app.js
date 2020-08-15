import React, { Component } from 'react';
import RandomBird from '../random-bird/index'
import Header from '../header/index';
import AnswerBlock from '../answer-block/index';
import NextButton from '../next-button/index'
import BirdInfo from '../bird-info/index'
import birdData from '../../data/birdData';


export default class App extends Component  {
    constructor(){
        super();
        this.state = {
        birds: this.generateBirds(1),
        bird: this.getRandomBird(1),
        selectedBird: null,
        page: 0,
        correct: false,
        id: null,
        };
    };
    
    onBirdSelected = (id, e) =>{
        this.setState({
            id,
            selectedBird:this.getBird(id)
        })
        console.log(id);
        this.checkAnswer(id, e);
    };
    
    checkAnswer(id, e){
        if(!this.state.correct) {
            if(id === this.state.bird.id) {
                e.target.querySelector('.li-btn').classList.add('correct');
                this.setState({
                    correct: true
                });
            }; e.target.querySelector('.li-btn').classList.add('error')
        };
    };

    getBird(id){
        const {birds} = this.state;
        console.log(birds.filter(item => item.id === id));
        return birds.filter(item => item.id === id);
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
    
    render(){
        const { bird, birds, selectedBird } = this.state
        return (
            <div className="container-md">
                <Header />
                <RandomBird bird={bird}  checked={this.state.correct}/>
                <div className="row mb2">
                    <AnswerBlock birds={birds} onItem={this.onBirdSelected}/>
                    <BirdInfo bird={selectedBird} />
                    <NextButton />
                </div>
            </div>
        );
    };
};
