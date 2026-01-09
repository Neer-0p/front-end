import React, { useState } from 'react'
import Aheader from '../Acommon/Aheader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function TeamAdd() {

    const redirect = useNavigate()

    const [team, setteam] = useState({
        id: "",
        name: "",
        position: "",
        department: "",
        img: ""
    })

    const change = (e) => {
        setteam({
            ...team,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const Add = async (e) => {
        e.preventDefault()
        redirect("/mteam")
        try {
            const res = await axios.post("http://localhost:3000/staff", team)
            setteam({
                id: "",
                name: "",
                position: "",
                department: "",
                img: ""
            })


        } catch (error) {
            console.log("API error not found")
        }
    }



    return (
        <div>
            <Aheader title="Add Member" data="Add Member" />
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-12 wow slideInUp" data-wow-delay="0.3s">
                        <form onSubmit={Add} >
                            <legend>Add Member</legend>
                            <div className="row g-3">
                                <div className="col-md-4">
                                    <input type="text" onChange={change} name='name' value={team.name} className="form-control border-0 bg-light px-4" placeholder="Name" style={{ height: 55 }} />
                                </div>
                                <div className="col-md-4">
                                    <input type="text" onChange={change} name='department' value={team.department} className="form-control border-0 bg-light px-4" placeholder="Department" style={{ height: 55 }} />
                                </div>
                                <div className="col-4">
                                    <input type="text" onChange={change} name='position' value={team.position} className="form-control border-0 bg-light px-4" placeholder="Position" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <input name='img' onChange={change} value={team.img} className="form-control border-0 bg-light px-4 py-3" type='url' placeholder="Image" />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Add Member</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamAdd