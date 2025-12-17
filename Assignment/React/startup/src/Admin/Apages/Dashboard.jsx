import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import axios from 'axios'

function Dashboard() {
    return (
       <div className='text-center'>
        <Aheader title="Dashboard" data="Dash" />
        <h1>Hello this is dashboard page.</h1>
       </div>
    )
}

export default Dashboard