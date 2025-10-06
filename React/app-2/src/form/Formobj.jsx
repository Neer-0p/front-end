import React, { useState } from 'react'

function Formobj() {
    const [form, setform] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    const change = (a) => {
        setform({
            ...form,
            [a.target.name]: a.target.value
        })
    }

    return (
        <div className='container mt-4 border p-3 bg-danger text-white'>
            <form>
                <div classname="mb-3">
                    <label htmlFor="name" classname="form-label">Name</label>
                    <input type="text" className="form-control" name='name' onChange={change} value={form.name} id="name" aria-describedby="emailHelp" />
                </div>
                <div classname="mb-3">
                    <label htmlFor="phone" classname="form-label">Phone</label>
                    <input type="tel" className="form-control" name='phone' onChange={change} value={form.phone} id="phone" aria-describedby="emailHelp" />
                </div>
                <div classname="mb-3">
                    <label htmlFor="exampleInputEmail1" classname="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' onChange={change} value={form.email} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div classname="mb-3">
                    <label htmlFor="exampleInputPassword1" classname="form-label">Password</label>
                    <input type="password" className="form-control" name='password' onChange={change} value={form.password} id="exampleInputPassword1" />
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

export default Formobj