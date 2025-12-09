
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router'
import { adduser } from '../slice/Userslice'

function Useradd() {

    const [add, setadd] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        phone: ""
    })

    const change = (e) => {
        setadd({
            ...add,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const redirect = useNavigate()

    const dispatch = useDispatch()
    const submit = (e) => {
        e.preventDefault()
        dispatch(adduser(add))
        redirect("/")
        setadd({
            id: "",
            name: "",
            email: "",
            password: "",
            phone: ""
        })
    }

    return (
        <div className='container'>
            <div className="row">
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input value={add.name} name='name' onChange={change} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input value={add.email} name='email' onChange={change} type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input value={add.phone} name='phone' onChange={change} type="tel" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input value={add.password} name='password' onChange={change} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add User</button>
                </form>
            </div>

        </div>
    )
}

export default Useradd