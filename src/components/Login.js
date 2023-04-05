import React, { useState } from 'react'
import "../styles/Login.css"

function Login({ currForm }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.stopPropagation();
        e.preventDefault();
        console.log(email);
        console.log(password);

        const obj = {
            "email": email,
            "password": password,
        }

        console.log(obj)
    }

    return (
        <>
            <div className='container-login'>
                <h1 className='heading' >Welcome to College Connect</h1>

                <form className="form-login" onSubmit={handleSubmit} method="post">
                    <h1>Login</h1>

                    <label htmlFor="email"></label>
                    <input type="email" name="email" id="email" placeholder="College Email" onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="password"></label>
                    <input type="password" name="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />

                    {/* <span>Forgot Password</span> */}
                    <button type='submit'>Login</button>
                    <button onClick={() => currForm('register')}>Don't have account? Register Here.</button>
                </form>

            </div>

            {/* <form onSubmit={handleSubmit} method='post'>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="enter your college email" onChange={(e) => setEmail(e.target.value)} />
                <br />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)} />
                <br />

                <button type='submit'>Submit</button>

            </form> */}

        </>
    )
}

export default Login