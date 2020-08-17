import React, { Component } from 'react';

import './next-button.scss';

export default class NextButton extends Component {

    componentDidMount(){
        document.querySelector('.next-button').disabled = 'disabled';
    }

    componentDidUpdate(prevProps) {
        if (this.props.page !== prevProps.page){
            document.querySelector('.next-button').disabled = 'disabled';
        };
    };

    render() {
        if(this.props.checked) {
            document.querySelector('.next-button').disabled = '';
        };

        return (
            <button className="btn btn-outline-secondary next-button" onClick = {() => setTimeout (this.props.changePage(), 300)}>Next Level</button>
        );
    };
};
