import React from 'react'
import "./Dashboard.css"
import MyNavbar from "./Navbar"

function Dashboard() {
    return (
        <>
            <div className='container-dashboard'>
                <MyNavbar></MyNavbar>
                {/* <h1>Dashboard it is.</h1> */}
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores velit expedita sunt enim quas dolorum non explicabo voluptates eveniet mollitia? Corporis vitae nisi, repudiandae iusto excepturi quisquam soluta facilis atque.
                </p>
            </div>
        </>
    )
}

export default Dashboard