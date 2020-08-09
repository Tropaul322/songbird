import React, { Component } from 'react'

import './answer-block.scss'

export default class AnswerBlock extends Component {

    render(){
        return(
            <div className="col-md-6">
                <div className='answer-block'>
                    <ul className="list-group block-group">
                        <li className="list-group-item"><span className="li-btn correct"></span>Ворон</li>
                        <li className="list-group-item"><span className="li-btn error"></span>Журавль</li>
                        <li className="list-group-item"><span className="li-btn"></span>Ласточка</li>
                        <li className="list-group-item"><span className="li-btn"></span>Козодой</li>
                        <li className="list-group-item"><span className="li-btn"></span>Кукушка</li>
                        <li className="list-group-item"><span className="li-btn"></span>Синица</li>
                    </ul>
                </div>
            </div>
        )
    }

}