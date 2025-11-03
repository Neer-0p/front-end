import React from 'react'
import Nav from '../Comm/Nav'
import Bottom from '../Comm/Bottom'

function Home() {
    return (
        <div>
            <Nav />
            <div>
                <h1 className='p-5 bg-success text-light'>This is Home page</h1>
            </div>
            <Bottom />
        </div>
    )
}

export default Home