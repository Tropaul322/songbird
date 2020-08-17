import React, { Component } from 'react';

import './answer-block.scss';

export default class AnswerBlock extends Component {

    componentDidUpdate(prevProps){
        if(this.props.page !== prevProps.page) {
            document.querySelectorAll('.li-btn').forEach(btn => {
                btn.classList.remove('error');
                btn.classList.remove('correct');
            });
        };
    };
  
    generateAnswers = (birds) => {
        return birds.map(({name, id}) => {
            return (
                <li className="list-group-item" onClick={(e) => this.props.onItem(id, e)} key={id}>
                    <span className="li-btn"></span>{name}
                </li>
            );
        });
    };

    render(){
        const {birds} =this.props;
        const items = this.generateAnswers(birds);

        return(
            <div className="col-md-6">
                <div className='answer-block'>
                    <ul className="list-group block-group">
                        {items}
                    </ul>
                </div>
            </div>
        );
    };
};