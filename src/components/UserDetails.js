import React from 'react';
import '../App.css'

const UserDetails = ({onChange, formData}) => {
  return (
    <div className="details">
      <div>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="mis">MIS</label>
        <input
          type="text"
          name="mis"
          value={formData.mis}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="current_year">Current Year</label>
        <select
          name="current_year"
          id="current_year"
          value={formData.current_year}
          onChange={onChange}
        >
          <option value="FY">FY</option>
          <option value="SY">SY</option>
          <option value="TY">TY</option>
          <option value="FinalYear">FinalYear</option>
        </select>
      </div>

      <div>
        <label htmlFor="AY">Academic Year</label>
        <select name="AY" id="AY" value={formData.AY} onChange={onChange}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>
      </div>

      <div>
        <label htmlFor="degree">Degree</label>
        {/* <input type="text" name="degree" value={formData.mis} onChange={onChange} />  */}
        <select
          name="degree"
          id="degree"
          value={formData.degree}
          onChange={onChange}
        >
          <option value="BTech">BTech</option>
          <option value="MTech">MTech</option>
          <option value="MBA">MBA</option>
          <option value="BPlanning">BPlanning</option>
        </select>
      </div>

      <div>
        <label htmlFor="mail">Mail</label>
        <input
          type="text"
          name="mail"
          value={formData.mail}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="branch">Branch</label>
        <select
          name="branch"
          id="branch"
          value={formData.branch}
          onChange={onChange}
        >
          <option value="Computer">Computer</option>
          <option value="ENTC">ENTC</option>
          <option value="Electrical">Electrical</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Civil">Civil</option>
          <option value="Metallurgy">Metallurgy</option>
        </select>
      </div>

      <div>
        <label htmlFor="phone_no">Phone Number</label>
        <input
          type="text"
          name="phone_no"
          value={formData.phone_no}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="my_description">Description</label>
        <input
          type="text"
          name="my_description"
          value={formData.my_description}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="photo">Photo</label>
        <input
          type="text"
          name="photo"
          value={formData.photo}
          onChange={onChange}
        />
      </div>

      {/* <div>
        <label htmlFor="password">collegeMail</label>
        <input
          type="text"
          name="collegeMail"
          value={formData.mis}
          onChange={onChange}
        />
      </div> */}
    </div>
  );
}

export default UserDetails;
