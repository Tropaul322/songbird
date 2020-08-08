import React, { Component } from 'react';
import RandomBird from '../random-bird/index'
import Header from '../header/index'



export default class App extends Component  {
    
    render(){
        return (
            <div className="container-md">
                <Header />
                <RandomBird />
            </div>
        )
    }

}
