import React, { Component } from 'react';
import RandomBird from '../random-bird/index'
import Header from '../header/index'
import AnswerBlock from '../answer-block/index';
import NextButton from '../next-button/index'
import Birdinfo from '../bird-info/index'


export default class App extends Component  {

    
    render(){
        return (
            <div className="container-md">
                <Header />
                <RandomBird />
                <div className="row mb2">
                    <AnswerBlock />
                    <Birdinfo/>
                    <NextButton />
                </div>
            </div>
        )
    }

}
