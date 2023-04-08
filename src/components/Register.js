import React, { useState } from 'react'
import axios from 'axios';
import "../styles/Register.css"

const Register = () => {

  // const [fname, setFname] = useState('')
  // const [lname, setLname] = useState('')
  // const [mis, setMis] = useState("")
  // const [currYear, setCurrYear] = useState("")
  // const [acadYear, setAcadYear] = useState("")
  // const [degree, setDegree] = useState("")
  // const [branch, setBranch] = useState("")
  // const [mobile, setMobile] = useState()
  // const [email, setEmail] = useState("")
  // const [desc, setDesc] = useState("")
  // // const [addon, setAddon] = useState("")
  // const [photo, setPhoto] = useState("")
  // const [password, setPassword] = useState('')
  const [formData, setFormData] = useState({
    "user_role":"user",
    "first_name": "",
    "last_name": "",
    "mis":"",
    "current_year":"",
    "AY":"",
    "degree":"",
    "mail":"",
    "branch":"",
    "phone_no":"",
    "my_description":"",
    "photo":"",
    "password":""
  });
  const [url, setUrl] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(formData.password !== confirmPassword){
      console.log(confirmPassword)
      alert('Password and confirm Password fields do not match');
      return;
    }
    try {
      const fd = new FormData();
      fd.append("file", url);
      console.log(`File content before : ${url}`);
      const uploadResponse = await axios.post(
        "http://localhost:8000/file/upload",
        fd,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      try{
        const postData = {
        ...formData,
        photo: uploadResponse.data.imageUrl,
        };
        const res = await axios.post(
          "http://localhost:8000/register",
          postData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        alert('Successfully registered');
        setFormData({"user_role":"student",
          "first_name": "",
          "last_name": "",
          "mis":"",
          "current_year":"",
          "AY":"",
          "degree":"",
          "mail":"",
          "branch":"",
          "phone_no":"",
          "my_description":"",
          "photo":"",
          "password":""
        });
        document.getElementById('photoInput').value = '';
        document.getElementById('confpwd').value = '';

        setConfirmPassword('');
      }
      catch(error){
       alert(error);
      }
      
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const handleFileChange = (event) => {
    setUrl(event.target.files[0]);
  };



  return (
    <>
      <div className="container-register">
        <form className="form-register" onSubmit={handleSubmit}>
          <h1>Register</h1>

          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            // id="fname"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="mis">MIS</label>
          <input
            type="number"
            name="mis"
            placeholder="Your MIS"
            value={formData.mis}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="current_year">Current Year</label>
          <select
            name="current_year"
            value={formData.current_year}
            onChange={handleInputChange}
            required
          >
            <option value="select">select</option>
            <option value="FY">FY</option>
            <option value="SY">SY</option>
            <option value="TY">TY</option>
            <option value="FinalYear">FinalYear</option>

            {/* <option value="FY"></option> */}
          </select>
          <br />

          <label htmlFor="AY">Academic Year</label>
          <select
            name="AY"
            value={formData.AY}
            onChange={handleInputChange}
            required
          >
            <option value="select">select</option>
            {/* <option value="2021 - 2022">2021 - 2022</option> */}
            <option value="2022 - 2023">2022 - 2023</option>
            <option value="2023 - 2024">2023 - 2024</option>
            <option value="2021 - 2022">2024 - 2025</option>
            <option value="2021 - 2022">2025 - 2026</option>

            {/* <option value="FY"></option> */}
          </select>
          <br />

          <label htmlFor="degree">Degree</label>
          <select
            name="degree"
            value={formData.degree}
            onChange={handleInputChange}
            required
          >
            <option value="select">select</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            {/* <option value="FY"></option> */}
          </select>
          <br />

          <label htmlFor="mail">Email</label>
          <input
            type="email"
            name="mail"
            value={formData.mail}
            placeholder="College Mail"
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="branch">Branch</label>
          <select
            name="branch"
            value={formData.branch}
            onChange={handleInputChange}
            required
          >
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

          <label htmlFor="phone_no">Mobile Number</label>
          <input
            type="number"
            maxLength={10}
            name="phone_no"
            placeholder="Mobile Number"
            value={formData.phone_no}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="my_description">Description</label>
          <input
            type="text"
            name="my_description"
            placeholder="Description about you(optional)"
            value={formData.my_description}
            onChange={handleInputChange}
          />
          <br />

          {/* <label htmlFor="addon">Add-on</label>
          <input type="text" name="addon" id="addon" placeholder="Addon" onChange={(e) => setAddon(e.target.value)} required />
          <br /> */}

          {/* <label htmlFor="photo">Upload Your Photo</label>
          <input
            type="file"
            name="photo"
            placeholder="photo"
            value={formData.photo}
            onChange={handleInputChange}
            required
          /> */}

          <input id="photoInput" type="file" onChange={handleFileChange} />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter your password"
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            id="confpwd"
            placeholder="Re-type your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <br />

          {/* <input
            type="password"
            name="confirm_password"
            placeholder="Re-type your password"
            required
          />
          <br /> */}

          <button className="bluebutton" type="submit">
            Register
          </button>

          <a href="http://localhost:3000/login" style={{textAlign:"center", textDecoration:"none"}}className="bluebutton">
            Login Here.
          </a>
        </form>
      </div>
    </>
  );
}

export default Register