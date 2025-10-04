// class :- class in constro super
// props :- props type

import React, { Component } from 'react'

export class ClassProps extends Component {
    constructor(props) {
        super(props);
        this.data = props
    }
    render() {
        return (
            <div className='col-md-4'>
                <div className="card gap-2 mb-4">
                    <img style={{height:"250px"}} src= {this.data.img} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{this.data.title}</h5>
                        <p className="card-text">{this.data.desc}</p>
                        <button className='btn btn-primary'>ADD CARD</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClassProps