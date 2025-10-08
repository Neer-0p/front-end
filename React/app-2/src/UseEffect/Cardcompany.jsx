import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Cardcompany() {

  const [user, setuser] = useState([])

  useEffect(() => {
    fetchcompany()
  }, [])

  const fetchcompany = async () => {
    const res = await axios.get("https://fake-json-api.mock.beeceptor.com/companies")
    console.log(res.data)
    setuser(res.data)
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          {
            user && user.map((data, index) => {
              const {logo,name,industry,ceoName,domain,address,country} = data
              return (
                <div key={index} className="col-md-4 mb-3">
                  <div className="card h-100">
                    <img src={logo} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Company Name : {name +" "+industry}</h5>
                      <h5 className="card-title">CEO OF Company : {ceoName}</h5>
                      <h5 className="card-title">Domain : {domain}</h5>
                      <h5 className="card-title">Address : {address +" "+country}</h5>
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

export default Cardcompany