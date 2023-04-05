import React from 'react';
import '../App.css'

const UserDetails = ({onChange, formData}) => {
  return (
    
    
    <div className='details'>
        
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="mis">MIS</label>
          <input type="text" name="mis" value={formData.mis} onChange={onChange} /> 
        </div>

        <div>
          <label htmlFor="currentYear">currentYear</label>
          <select name="currentYear" id="currentYear" value={formData.degree} onChange={onChange}>
            <option value="FY">FY</option>
            <option value="SY">SY</option>
            <option value="TY">TY</option>
            <option value="FinalYear">FinalYear</option>
          </select>

        </div>

        <div>
          <label htmlFor="academicYear">academicYear</label>
          <select name="academicYear" id="academicYear" value={formData.degree} onChange={onChange}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </div>

        <div>
          <label htmlFor="degree">degree</label>
          {/* <input type="text" name="degree" value={formData.mis} onChange={onChange} />  */}
          <select name="degree" id="degree" value={formData.degree} onChange={onChange}>
            <option value="BTech">BTech</option>
            <option value="MTech">MTech</option>
            <option value="MBA">MBA</option>
            <option value="BPlanning">BPlanning</option>
          </select>
        </div>

        <div>
          <label htmlFor="branch">branch</label>
          <select name="branch" id="branch" value={formData.branch} onChange={onChange}>
            <option value="Computer">Computer</option>
            <option value="ENTC">ENTC</option>
            <option value="Electrical">Electrical</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Metallurgy">Metallurgy</option>
          </select>
        </div>

        <div>
          <label htmlFor="phoneNo">phoneNo</label>
          <input type="text" name="phoneNo" value={formData.mis} onChange={onChange} /> 
        </div>

        <div>
          <label htmlFor="description">description</label>
          <input type="text" name="description" value={formData.mis} onChange={onChange} /> 
        </div>

        <div>
          <label htmlFor="photo">photo</label>
          <input type="text" name="photo" value={formData.mis} onChange={onChange} /> 
        </div>

        <div>
          <label htmlFor="collegeMail">collegeMail</label>
          <input type="text" name="collegeMail" value={formData.mis} onChange={onChange} /> 
        </div>

        </div>
        
  );
}

export default UserDetails;
