import React, { useState } from 'react'

function Register({ currForm }) {

  const [name, setName] = useState('')
  const [mobile, setMobile] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <form method='post'>

        <label htmlFor="name">Your Full Name</label>
        <input type="text" name='name' id='name' placeholder='your full name' />
        <br />

        <label htmlFor="mobile">Mobile Number</label>
        <input type="number" maxLength={10} name='mobile' id='mobile' placeholder='mobile number' />
        <br />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="enter your college email" />
        <br />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="enter your password" />
        <br />

        <label htmlFor="cnfmpass">Confirm Password</label>
        <input type="password" name='cnfmpass' id='cnfmpass' placeholder='re-type your password' />
        <br />

        <button type='submit'>Submit</button>

      </form>

      <button onClick={() => currForm('login')}>Already have account? Login Here.</button>
    </>
  )
}

export default Register