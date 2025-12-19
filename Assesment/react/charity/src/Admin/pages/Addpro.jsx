import React, { useState } from 'react'
import Header1 from '../common/Header1'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addpro } from '../../slice/Productslice'

function Addpro() {

  const [add, setadd] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    img: ""
  })

  const change = async (e) => {
    setadd({
      ...add,
      id: new Date().getTime().toString(),
      [e.target.name] : e.target.value
    })
  }

  const redirect = useNavigate()
  const dispatch = useDispatch()

  const submit = (e) => {
    e.preventDefault()
    dispatch(addpro(add))
    redirect("/pro")
    setadd({
      id: "",
      name: "",
      description: "",
      price: "",
      img: ""
    })
  }

  return (
    <div>
      <Header1 />
      {/* data */}
      <div className="container border border-dark my-3 p-5">
        <form onSubmit={submit}>
          <div className="row">
            <div className="col-6 mb-3">
              <label className="form-label">Product Name</label>
              <input onChange={change} name='name' value={add.name} type="text" className="form-control" />
            </div>
            <div className="col-6 mb-3">
              <label className="form-label">Product Description</label>
              <input onChange={change} name='description' value={add.description} type="text" className="form-control" />
            </div>
            <div className="col-6 mb-3">
              <label className="form-label">Product Image</label>
              <input onChange={change} name='img' value={add.img} type="url" className="form-control" />
            </div>
            <div className="col-6 mb-3">
              <label className="form-label">Product Price</label>
              <input onChange={change} name='price' value={add.price} type="number" className="form-control" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
      </div>

    </div>
  )
}

export default Addpro