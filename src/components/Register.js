import React, { useState } from 'react'
import "./Register.css"

function Register({ currForm }) {

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [mis, setMis] = useState("")
  const [currYear, setCurrYear] = useState("")
  const [acadYear, setAcadYear] = useState("")
  const [degree, setDegree] = useState("")
  const [branch, setBranch] = useState("")
  const [mobile, setMobile] = useState()
  const [email, setEmail] = useState("")
  const [desc, setDesc] = useState("")
  // const [addon, setAddon] = useState("")
  const [photo, setPhoto] = useState("")
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log(fname);
    console.log(lname);
    console.log(mis);
    console.log(currYear);
    console.log(acadYear);
    console.log(degree);
    console.log(branch);
    console.log(mobile);
    console.log(email);
    console.log(desc);
    // console.log(addon);
    console.log(photo);
    console.log(password);

    const obj = {
      "firstName": fname,
      "lastName": lname,
      "MIS": mis,
      "currYear": currYear,
      "acadYear": acadYear,
      "Degree": degree,
      "Branch": branch,
      "Mobile": mobile,
      "Email": email,
      "Description": desc,
      // "Addon": addon,
      "Photo": photo,
      "Password": password,
    }

    console.log(obj)
  }

  return (
    <>
      <div className='container-register'>
        <form className="form-register" method='post' onSubmit={handleSubmit}>
          <h1>Register</h1>

          <label htmlFor="firstName">First Name</label>
          <input type="text" name='fname' id='fname' placeholder='First Name' onChange={(e) => setFname(e.target.value)} required />
          <br />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" name='lname' id='lname' placeholder='Last Name' onChange={(e) => setLname(e.target.value)} required />
          <br />

          <label htmlFor="mis">MIS</label>
          <input type="number" name='mis' id='mis' placeholder='your mis number' onChange={(e) => setMis(e.target.value)} required />
          <br />

          <label htmlFor="currYear">Current Year</label>
          <select name="currYear" id="currYear" onChange={(e) => setCurrYear(e.target.value)} required>
            <option value="select">select</option>
            <option value="FY">FY</option>
            <option value="FY">SY</option>
            <option value="FY">TY</option>
            {/* <option value="FY"></option> */}
          </select>
          <br />

          <label htmlFor="acadYear">Academic Year</label>
          <select name="acadYear" id="acadYear" onChange={(e) => setAcadYear(e.target.value)} required>
            <option value="select">select</option>
            <option value="2021 - 2022">2021 - 2022</option>
            <option value="2022 - 2023">2022 - 2023</option>
            <option value="2023 - 2024">2023 - 2024</option>
            {/* <option value="FY"></option> */}
          </select>
          <br />

          <label htmlFor="degree">Degree</label>
          <select name="degree" id="degree" onChange={(e) => setDegree(e.target.value)} required>
            <option value="select">select</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            {/* <option value="FY"></option> */}
          </select>
          <br />

          <label htmlFor="branch">Branch</label>
          <select name="branch" id="branch" onChange={(e) => setBranch(e.target.value)} required>
            <option value="select">select</option>
            <option value="Civil">Civil</option>
            <option value="Computer">Computer</option>
            <option value="Electrical">Electrical</option>
            <option value="Electronics">Electronics</option>
            <option value="Instrumentation">Instrumentation</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Metallurgy">Metallurgy</option>
            <option value="Production">Production</option>
            <option value="Planning">Planning</option>
            {/* <option value="FY"></option> */}
          </select>
          <br />

          <label htmlFor="mobile">Mobile Number</label>
          <input type="number" maxLength={10} name='mobile' id='mobile' placeholder='mobile number' onChange={(e) => setMobile(e.target.value)} required />
          <br />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="enter your college email" onChange={(e) => setEmail(e.target.value)} required />
          <br />

          <label htmlFor="description">Description</label>
          <input type="text" name="desc" id="desc" placeholder="Description about you(optional)" onChange={(e) => setDesc(e.target.value)} />
          <br />

          {/* <label htmlFor="addon">Add-on</label>
          <input type="text" name="addon" id="addon" placeholder="Addon" onChange={(e) => setAddon(e.target.value)} required />
          <br /> */}

          <label htmlFor="photo">Upload Your Photo</label>
          <input type="file" name='photo' id='photo' placeholder='photo' onChange={(e) => setPhoto(e.target.value)} required />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)} required />
          <br />

          <label htmlFor="cnfmpass">Confirm Password</label>
          <input type="password" name='cnfmpass' id='cnfmpass' placeholder='re-type your password' required />
          <br />

          <button type='submit'>Register</button>

          <button onClick={() => currForm('login')}>Already have account? Login Here.</button>
        </form>

      </div>
    </>
  )
}

export default Register