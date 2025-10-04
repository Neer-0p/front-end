// class inbuilt consto :- 
// this.state => define varibale
// this.setstate() => function for class

// state :- object ,singel value
import React, { Component } from 'react'
import Image from './Image'

export class ClassState extends Component {
    constructor(){
        super()
        this.state = {
            name : "neer",
            count : 0,
            isIamge : true
        }
    }
  render() {
    return(
        <div>
            <h1 className='text-uppercase'>class state</h1>
            <h3 className='text-capitalize'>Name : {this.state.name}</h3>
            <button onClick={() => this.setState({name : "dax"})}>change name</button>
            <button onClick={() => this.setState({name : "kavan"})}>change name</button>
            <button onClick={() => this.setState({name : "neer"})}>change name</button>

            <h3>Count : {this.state.count}</h3>
            <button onClick={() => this.setState({count : this.state.count + 1})}>increment</button>
            <button onClick={() => this.setState({count : this.state.count - 1})}>decrement</button>
            <button onClick={() => this.setState({count : 0})}>reset</button><br />

            <h3>Image</h3>
            <button onClick={() => this.setState({isIamge : false})}>Hide</button><br />
            <button onClick={() => this.setState({isIamge : true})}>show</button><br />    
            <button onClick={() => this.setState({isIamge : !this.state.isIamge})}>toggle</button><br />    


            {
                (this.state.isIamge)?<Image/> : false
            }
        </div>
    )
  }
}

export default ClassState