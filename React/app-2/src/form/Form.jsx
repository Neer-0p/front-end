import React, { useState } from 'react'

function Form() {
    const [name,setname] = useState("")
    const [phone,setphone] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")

    return (
        <div className="container border my-4 p-3 bg-dark text-white">
            <form>
                <div classname="mb-3">
                    <label htmlFor="name" classname="form-label">Name</label>
                    <input type="text" className="form-control" onChange={(a)=>setname(a.target.value)} value={name} id="name" aria-describedby="emailHelp" />
                </div>
                <div classname="mb-3">
                    <label htmlFor="phone" classname="form-label">Phone</label>
                    <input type="tel" className="form-control" onChange={(a)=>setphone(a.target.value)} value={phone} id="phone" aria-describedby="emailHelp" />
                </div>
                <div classname="mb-3">
                    <label htmlFor="exampleInputEmail1" classname="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(a)=>setemail(a.target.value)} value={email} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div classname="mb-3">
                    <label htmlFor="exampleInputPassword1" classname="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(a)=>setpassword(a.target.value)} value={password} id="exampleInputPassword1" />
                </div>
                <div classname="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" classname="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form