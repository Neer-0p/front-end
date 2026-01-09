import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fireDb } from '../Firebase/firebase'




function Table() {

    const [user, setuser] = useState({
        name: "",
        img: "",
        email: ""
    })

    const [allUsers, setAllUsers] = useState([]);

    const change = (e)=>{
        setuser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    // add user 
    const adduser = async () => {
        if (user.name == "" || user.img == "" || user.email == "") {
            return toast.error("Field the details")
        }

        const userRef = collection(fireDb, "users")

        try {

            await addDoc(userRef, user)
            toast.success("successfully added")
            setuser({
                name: "",
                email: "",
                img: ""
            })

        } catch (error) {
            toast.error("Error")
        }
    }

     useEffect(() => {
        const userRef = collection(fireDb, "users");

        const unsub = onSnapshot(userRef, (snapshot) => {
            const list = snapshot.docs.map((doc, index) => ({
                id: doc.id,
                sr: index + 1,
                ...doc.data()
            }));

            setAllUsers(list);
        });

        return () => unsub();
    }, []);

    return (
        <div>

            <input type="text" onChange={change} name='name' className="form-control my-2" placeholder="Enter name" value={user.name}/>
            <input type="url" onChange={change} name='img' className="form-control my-2" placeholder="URL" value={user.img}/>
            <input type="email" onChange={change} name='email' className="form-control my-2" placeholder="Enter email" value={user.email}/>

            <button className="btn btn-primary" onClick={adduser}>
                Add User
            </button>

            <legend>User Table</legend>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sr. No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead> 

                <tbody>
                    {allUsers.map((data,index) => (
                        <tr key={data.id}>
                            <td>{data.sr}</td>
                            <td>{data.name}</td>
                            <td><img src={data.img} width="50px" /></td>
                            <td>{data.email}</td>
                            <td>
                                <button className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default Table