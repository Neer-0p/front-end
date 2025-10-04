// jsx :- javascript syntax xml/et
// jsx html return Read
// jsx vs js :- litial bit .1s
// return before
// javascript htl code {}
// <></> :- classname not use

import React from "react";

function Main(){
    let name  = "neer"
    // console.log(name)

    let person = {
        name : "het",
        age : 22
    }

    let array = [1,2,3,4]

    return(
        <div>
            <h1>{name}</h1>
            <h1>{person.age}</h1>
            <h1>{array}</h1>
            {5+5}
        </div>
    )
}
export default Main