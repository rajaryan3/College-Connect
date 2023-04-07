import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css"

function Login({ currForm }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

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

        // Make API call to backend for validation and set isLoggedIn based on response
        // Example: const response = await fetch('/api/login', { method: 'POST', body: formData });
        //          setIsLoggedIn(response.ok);

        // For the purpose of this example, we'll set isLoggedIn to true
        // setIsLoggedIn(true);
        navigate('/home');

        // if (isLoggedIn) {
        //     // redirect to home page on successful login
        //     navigate('/home');
        // } else {
        //     // show an alert for invalid credentials
        //     alert('Invalid credentials');
        // }
    }

    return (
        <>
            <div className='container-login'>
                <h1 className='heading'>Welcome to College Connect</h1>

                <form className="form-login" onSubmit={handleSubmit} method="post">
                    <h1>Login</h1>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="enter your college email" onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)} required />

                    {/* <span>Forgot Password</span> */}
                    <button type='submit'>Login</button>
                    <button onClick={() => currForm('register')}>Don't have account? Register Here.</button>
                </form>

            </div>
        </>
    )
}

export default Login