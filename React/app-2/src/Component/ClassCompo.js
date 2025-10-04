// component :- it's block of code. need use it call <compont />
// rules :- Always first letter Capital
// 1) class :- class defind Compoenet redner inside return html return

import React, { Component } from "react";

class ClassCompo extends Component{
    render(){
        return(
            <div>
                <h1>hello world</h1>
                <h1>bye bye</h1>
            </div>
        )
    }
}

export default ClassCompo