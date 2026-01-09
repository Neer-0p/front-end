import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Ulogin() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Uid"))
            redirect("/")
    },[])

    const [form,setform] = useState({
        email:"",
        password :""
    })

    const change = (e)=>{
        setform({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const submit =async(e)=>{
        e.preventDefault()
        try {
            const {email,password} = form
            const res = await axios.get(`http://localhost:3000/users?email=${email}`)
            if(res.data.length === 0){
                toast.error("email does not match")
                return false 
            }

            const user = res.data[0]
            if(form.password != user.password){
                toast.error("password does not match")
                return false 
            }

            localStorage.setItem("Uid",user.id)
            localStorage.setItem("Uname",user.name)
            redirect("/")
            toast.success("Successfully login")
            
        } catch (error) {
            toast.error("Api not founded")
        }
    }

    return (
        <div>
            <section className="bg-light py-3 py-md-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                            <div className="card border border-light-subtle rounded-3 shadow-sm">
                                <div className="card-body p-3 p-md-4 p-xl-5">

                                    <h2 className="fs-6 fw-normal text-center text-secondary mb-4">User login</h2>
                                    <form >
                                        <div className="row gy-2 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="email" onChange={change} value={form.email} className="form-control" name="email" id="email" placeholder="name@example.com" required />
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="password" onChange={change} value={form.password} className="form-control" name="password" id="password" placeholder="Password" required />
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex gap-2 justify-content-between">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" defaultValue name="rememberMe" id="rememberMe" />
                                                        <label className="form-check-label text-secondary" htmlFor="rememberMe">
                                                            Keep me logged in
                                                        </label>
                                                    </div>
                                                    <a href="#!" className="link-primary text-decoration-none">Forgot password?</a>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid my-3">
                                                    <button className="btn btn-primary btn-lg" onClick={submit} type="submit">Log in</button>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <p className="m-0 text-secondary text-center">Don't have an account? <a href="#!" className="link-primary text-decoration-none">Sign up</a></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ulogin