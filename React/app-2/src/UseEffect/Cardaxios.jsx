import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Cardaxios() {

    const [user, setuser] = useState([])

    useEffect(() => {
        fetchcard()
    }, [])

    const fetchcard = async () => {
        const res = await axios.get("https://dummyjson.com/recipes")
        console.log(res.data.recipes)
        setuser(res.data.recipes)
    }

    return (
        <div style={{background:"darkblue"}}>
            <div className="container">
                <h1 className='text-white text-decoration-underline'>MENU</h1>
                <div className="row">
                    {
                        user && user.map((data, index) => {
                            const {image,tags,ingredients,name,servings} = data
                            return (
                                <div key={index} className="col-md-4 mb-4">
                                    <div className="card h-100">
                                        <img style={{height:"200px"}} src={image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{name}</h5>
                                            <h6 className="card-title text-muted fs-6 fst-italic">{tags}</h6>
                                            <p className="card-text"><strong>Ingredients</strong>:-{ingredients}</p>
                                            <h6 className="card-text"><strong>Servings</strong>:-{servings}</h6>
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

export default Cardaxios