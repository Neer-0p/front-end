import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { addcourse } from '../slice/Courseslice'

function Courseadd() {

    const [add,setadd] = useState({
        id : "",
        name : "",
        details : "",
        price : ""
    })

    const change = (e)=>{
        setadd({
            ...add,
            id : new Date().getTime().toString(),
            [e.target.name] : e.target.value
        })
    }

    const dispatch = useDispatch()
    const redirect = useNavigate()

    const submit = (e)=>{
        e.preventDefault()
        dispatch(addcourse(add))
        redirect("/course")
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label className="form-label">Course Name</label>
                                <input onChange={change} value={add.name} name='name' type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Course details</label>
                                <input onChange={change} value={add.details} name='details' type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Course Price</label>
                                <input onChange={change} value={add.price} name='price' type="text" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">Add Course</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courseadd