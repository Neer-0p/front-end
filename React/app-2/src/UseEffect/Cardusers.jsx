import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Cardusers() {

    const [user, setuser] = useState([])

    useEffect(() => {
        fetchuser()
    },[])

    const fetchuser = async () => {
        const res = await axios.get("https://dummyjson.com/users")
        console.log(res.data.users)
        setuser(res.data.users)
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        user && user.map((data, index) => {
                            const space = " "
                            return (
                                <div key={index} className="col-md-4 mb-3">
                                    <div className="card h-100">
                                        <img style={{ height: "200px" }} src={data.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Name:- {data.firstName + space + data.maidenName + space + data.lastName}</h5>
                                            <h5 className="card-text">University:- {data.university}</h5>
                                            <h5 className="card-text">Company details:-</h5>
                                            <ul className="list-group">
                                                <li className="list-group-item">Name:- {data.company.name}</li>
                                                <li className="list-group-item">Department:- {data.company.department}</li>
                                                <li className="list-group-item">Work:- {data.company.title}</li>
                                                <li className="list-group-item">Address:- {data.company.address.address+space+data.company.address.city+space+data.company.address.state+space+data.company.address.statecode}</li>
                                            </ul>
                                            <h5 className="card-text mt-2">Bank details:-</h5>
                                            <ul className="list-group">
                                                <li className="list-group-item">Card Number:- {data.bank.cardNumber}</li>
                                                <li className="list-group-item">Card Type:- {data.bank.cardType}</li>
                                                <li className="list-group-item">Exp:- {data.bank.cardExpire}</li>
                                                <li className="list-group-item">Iban:- {data.bank.iban}</li>
                                            </ul>
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

export default Cardusers