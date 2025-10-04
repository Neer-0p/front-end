
import React, { Component } from 'react'

export class Statetask extends Component {
    constructor() {
        super()
        this.state = {
            name: "neer",
            course: {
                back_end: "description back-end",
                front_end: "description front-end",
                full_stack: "description full-stack",
            },
            selectedcourse : ""
        }
    }
    handleKey = (coursekey) => {
        this.setState({selectedcourse : coursekey})
    }

    render() {
        return (
            <div className='container mt-3'>
                <h1 className='text-uppercase text-decoration-underline text-success'>Description task</h1>
                <h1>Name : {this.state.name}</h1>
                <p>
                    <span className='text-capitalize fs-2 fw-bold'>course : </span>
                    <button onClick={() => this.handleKey("front_end")} className='btn btn-success mx-2'>front-end :</button>
                    <button onClick={() => this.handleKey("back_end")} className='btn btn-success mx-2'>back-end</button>
                    <button onClick={() => this.handleKey("full_stack")} className='btn btn-success mx-2'>full-stack</button>
                </p>
                {this.state.selectedcourse && (
                    <div className="alert alert-info mt-3 fs-5">
                        {this.state.course[this.state.selectedcourse]}
                    </div>
                )}
            </div>
        )
    }
}

export default Statetask