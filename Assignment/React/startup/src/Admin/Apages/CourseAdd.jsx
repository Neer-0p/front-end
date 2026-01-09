import React, { useState } from 'react'
import Aheader from '../Acommon/Aheader'
import axios from 'axios'
import { redirect, useNavigate } from 'react-router-dom'

function CourseAdd() {

    const redirect = useNavigate()

    const [course, setcourse] = useState({
        id: "",
        cname: "",
        img: "",
        date: "",
        desc: "",
        author: "",
        title: ""
    })

    const change = (e)=>{
        setcourse({
            ...course,
            id : new Date().getTime().toString(),
            [e.target.name] : e.target.value
        })
    }

    const Add = async (e) => {
        e.preventDefault()
        redirect("/course")
        try {

            const res = axios.post("http://localhost:3000/courses", course)
            setcourse({
                id: "",
                cname: "",
                img: "",
                date: "",
                desc: "",
                author: "",
                title: ""
            })

        } catch (error) {
            console.log("api error not found",error)
        }

    }


    return (
        <div>
            <Aheader title="Course Add" data="Course" />
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-12 wow slideInUp" data-wow-delay="0.3s">
                        <form onSubmit={Add}>
                            <legend>Add Course</legend>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input type="text" name='cname' onChange={change} value={course.cname} className="form-control border-0 bg-light px-4" placeholder="Course Name" style={{ height: 55 }} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name='author' onChange={change} value={course.author} className="form-control border-0 bg-light px-4" placeholder="Author Name" style={{ height: 55 }} />
                                </div>
                                <div className="col-6">
                                    <input type="text" name='title' onChange={change} value={course.title} className="form-control border-0 bg-light px-4" placeholder="Title" style={{ height: 55 }} />
                                </div>
                                <div className="col-6">
                                    <input type="date" name='date' onChange={change} value={course.date} className="form-control border-0 bg-light px-4" placeholder="Date" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <input onChange={change} className="form-control border-0 bg-light px-4 py-3" name='img' value={course.img} type='url' placeholder="Course Img" />
                                </div>
                                <div className="col-12">
                                    <textarea onChange={change} className="form-control border-0 bg-light px-4 py-3" name='desc' value={course.desc} rows={4} placeholder="Course Description" defaultValue={""} />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Add Course</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseAdd