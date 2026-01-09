import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axiosphoto() {

    const [user,setuser] = useState([])

    useEffect(()=>{
        fetchphoto()
    },[])

    const fetchphoto =async()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/photos")
        console.log(res.data)
        setuser(res.data)
    }

  return (
    <div>
        <div className="container">
                <h1 className='text-white text-decoration-underline'>Photos</h1>
                <div className="row">
                    {
                        user && user.map((data,index)=>{
                            const {albumId,id,title,url} = data
                            return(
                                <div key={index} className="col-md-4 mb-4">
                                    <div className="card h-100">
                                        <img style={{height:"200px"}} src={url} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text"><strong>AlbumId</strong>:-{albumId}</p>
                                            <h6 className="card-text"><strong>ID</strong>:-{id}</h6>
                                            <h6 className="card-text"><strong>Title</strong>:-{title}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    </div>
  )
}

export default Axiosphoto