import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletecourse, showdata } from '../slice/Courseslice'

function Course() {

    const { courses, loading } = useSelector((data) => data.course)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(showdata())
    }, [])
    console.log(courses)

    return (
        <div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Course Details</th>
                            <th scope="col">Course Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses && courses.map((data,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.details}</td>
                                        <td>{data.price}</td>
                                        <td>
                                            <button className="btn btn-info">view</button>
                                            <button className="btn btn-success mx-2">edit</button>
                                            <button className="btn btn-danger"onClick={()=>{dispatch(deletecourse(data.id)).then(()=>{dispatch(showdata())})}}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Course