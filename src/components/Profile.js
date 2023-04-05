import { useState, useEffect } from 'react'
import axios from 'axios';
import UserDetails from './UserDetails';
import '../App.css'


function Profile() {
  const [data, setData] = useState({"firstName":"", "lastName":"", "mis":""})
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({"firstName":"", "lastName":"", "mis":""});


  const API = 'http://localhost:3000';


  const getApiData = async(url) => {
    try{
      const res = await axios.get(url);
      setData(res.data);
      setFormData(res.data);
      console.log(res.data);
    }
    catch(err){
      console.log(err);
    }
  }
  

  useEffect(() => {
    getApiData(`${API}/profile/642a70071892e3d3b1919e32`)
  }, []);

  useEffect(() => {
    console.log(`Formdata ${formData}`)
  })


  const handleEditClick = () => {
    // setFormData(formData);
    setEditing(true);
  };



  const handleSaveClick = async() => {
    try{
      const res = await axios.patch('http://localhost:3000/profile/642a70071892e3d3b1919e32', formData, { new : true });
      setData(res.data);
      setEditing(false);
      console.log(res.data);
    }
    catch(err){
      console.log(err);
    }
  };



  const cancelEdit = () => {
    // console.log('CancelEdit Pressed');
    setEditing(false);
  }



  const handleInputChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log('Form Data Changed');
    console.log(formData);
  };




  return <div key={data.mis}>
      {editing ? (
       <div>
          <div>
            <h1 style={{textAlign:'center'}}>Profile</h1>
            <br></br>
            <br></br>
          </div>
          <UserDetails formData={formData} onChange={handleInputChange}/>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
        </div>
      ) : (
          <div className='profile'>
            
            <br></br>
            <h1 style={{textAlign:'center', color:'whitesmoke'}}>Profile</h1>
            <br></br>
            
            <div className='profileform'>
              <UserDetails formData={formData} onChange={()=>{}}/>
            </div>
            <button onClick={handleEditClick}>Edit</button>
          </div>
      )}
    </div> 
};

export default Profile;

