import React, { useState } from 'react'

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
            <form onSubmit={handleSubmit} method='post'>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="enter your college email" onChange={(e) => setEmail(e.target.value)} />
                <br />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)} />
                <br />

                <button type='submit'>Submit</button>

            </form>

            <button onClick={() => currForm('register')}>Don't have account? Register Here.</button>
        </>
    )
}

export default Login