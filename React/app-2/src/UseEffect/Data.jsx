// useEffect(callback,optional)
// logic 
// useEffect :- Function side Effect + Reder Effect 
// useEFfect :- without,with,array 

import React, { useEffect, useState } from 'react'

function UseData() {

    const [name,setname] = useState("het")

    // 1) no arguments pass 
    // useEffect(()=>{
    //     console.log("Hello ouside")
    //     return(()=>{
    //         console.log("hello inside func")
    //     })
    // })

    // 2) blnk array state no state use
    // useEffect(()=>{
    //     console.log("Hello ouside")
    //     return(()=>{
    //         console.log("hello inside func")
    //     })
    // },[])

    useEffect(()=>{
        console.log("Hello ouside")
        return(()=>{
            console.log("hello inside func")
        })
    },[name])

  return (
    <div>
      <h1>Hello this useEffect</h1>

      <h1>hello {name}</h1>
      <button onClick={()=>setname("vraj")}>change</button>
    </div>
  )
}

export default UseData