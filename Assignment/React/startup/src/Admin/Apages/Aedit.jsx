import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Aedit() {

    const redirect = useNavigate()

    const [aedit, setaedit] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status: ""
    })

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get(`http://localhost:3000/admin/${localStorage.getItem("Aid")}`)
        setaedit(res.data)
    }

    const change = (e) => {
        setaedit({
            ...aedit,
            [e.target.name]: e.target.value
        })
    }

    const Add = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.put(`http://localhost:3000/admin/${aedit.id}`, aedit)
            toast.success("Updated Successfully..")
            localStorage.setItem("Aname", res.data.name)
            redirect("/dash")
            
        } catch (error) {
            toast.error("API not founded...")
        }
    }

    return (
        <div>
            <section className="p-3 p-md-4 p-xl-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mx-auto bsb-tpl-bg-lotion">
                            <div className="p-3 p-md-4 p-xl-5">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-5">
                                            <h2 className="h3">Update Admin Profile</h2>
                                            <h3 className="fs-6 fw-normal text-secondary m-0">Enter your details to Update profile</h3>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={Add}>
                                    <div className="row gy-3 gy-md-4 overflow-hidden">
                                        <div className="col-12">
                                            <label htmlFor="firstName" className="form-label">Name <span className="text-danger">*</span></label>
                                            <input type="text" onChange={change} value={aedit.name} className="form-control" name="name" id="firstName" placeholder="First Name" required />
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                            <input type="email" onChange={change} value={aedit.email} className="form-control" name="email" id="email" placeholder="name@example.com" required />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                                            <input type="password" onChange={change} value={aedit.password} className="form-control" name="password" id="password" placeholder='password' required />
                                        </div>

                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button className="btn bsb-btn-xl btn-primary" type="submit">Change profile</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Aedit