// import { useState, useEffect } from 'react'
// import axios from 'axios';
// import UserDetails from './UserDetails';
// import '../App.css'


// function Profile() {
//   const [data, setData] = useState({"user_role":"", "first_name":"", "last_name":"", "mis":"", "current_year":"", "AY":"", "degree":"", "mail":"", "branch":"", "phone_no":"", "my_description":"", "photo":"", "password":""})
//   const [editing, setEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     "user_role": "",
//     "first_name": "",
//     "last_name": "",
//     "mis": "",
//     "current_year": "",
//     "AY": "",
//     "degree": "",
//     "mail": "",
//     "branch": "",
//     "phone_no": "",
//     // professional_arr: {},
//     "my_description": "",
//     // addon: [],
//     "photo": "",
//     "password": "",
//   });


//   // const API = 'http://localhost:8000';


//   const getApiData = async() => {
//     try{
     
//       const ourId = '642db152b92e9a729f808b27';
      
//       const result = await axios.get('http://localhost:8000/profile', { 
//         params:{
//           id : ourId
//         }
//       });
//       setData(result.data);
//       setFormData(result.data);
//       // console.log(data);
//     }
//     catch(err){
//       console.log(err);
//     }
//   }
  

//   useEffect(() => {
//     getApiData();
//   }, []);

//   // useEffect(() => {
//   //   // console.log(formData.answer);
//   // })


//   const handleEditClick = () => {
//     // setFormData(formData);
//     setEditing(true);
//   };



//   const handleSaveClick = async() => {
//     try{
//       const res = await axios.patch(
//         "http://localhost:8000/profile",
//         formData,
//         // {returnOriginal:false}
//       );
//       setData(res.data);
//       setFormData(res.data);
//       setEditing(false);
//       console.log(res.data);
//     }
//     catch(err){
//       console.log(err);
//     }
//   };



//   const cancelEdit = () => {
//     // console.log('CancelEdit Pressed');
//     setEditing(false);
//   }



//   const handleInputChange = event => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//     console.log('Form Data Changed');
//     // console.log(formData);
//   };




//   return <div key={data.mis}>
//       {editing ? (
//        <div>
//           <div>
//             <h1 style={{textAlign:'center'}}>Profile</h1>
//             <br></br>
//             <br></br>
//           </div>
//           <UserDetails formData={formData} onChange={handleInputChange}/>
//           <button onClick={handleSaveClick}>Save</button>
//           <button onClick={cancelEdit}>Cancel</button>
//         </div>
//       ) : (
//           <div className='profile'>
            
//             <br></br>
//             <h1 style={{textAlign:'center', color:'whitesmoke'}}>Profile</h1>
//             <br></br>
            
//             <div className='profileform'>
//               <UserDetails formData={formData} onChange={()=>{}}/>
//             </div>
//             <button onClick={handleEditClick}>Edit</button>
//           </div>
//       )}
//     </div> 
// };

// export default Profile;

import { useState, useEffect } from "react";
import axios from "axios";
import UserDetails from "./UserDetails";
import "../App.css";

function Profile() {
  // const [data, setData] = useState(null);
  const [data, setData] = useState({
    user_role: "",
    first_name: "",
    last_name: "",
    mis: "",
    current_year: "",
    AY: "",
    degree: "",
    mail: "",
    branch: "",
    phone_no: "",
    my_description: "",
    photo: "",
    password: "",
  });
  const [formData, setFormData] = useState(data);
  const [editing, setEditing] = useState(false);

  const getApiData = async () => {
    try {
      const ourId = "642db152b92e9a729f808b27";
      const result = await axios.get("http://localhost:8000/profile", {
        params: {
          id: ourId,
        },
      });
      setData(result.data);
      setFormData(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const handleEditClick = () => {
    setFormData(data);
    setEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const res = await axios.patch("http://localhost:8000/profile", formData);
      setData(res.data);
      setFormData(res.data);
      setEditing(false);
    } catch (err) {
      console.log(err);
    }
  };

  const cancelEdit = () => {
    setFormData(data);
    setEditing(false);
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div key={data.mis}>
      {editing ? (
        <div>
          <div>
            <h1 style={{ textAlign: "center" }}>Profile</h1>
            <br></br>
            <br></br>
          </div>
          <UserDetails formData={formData} onChange={handleInputChange} />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
        </div>
      ) : (
        <div className="profile">
          <br></br>
          <h1 style={{ textAlign: "center", color: "whitesmoke" }}>Profile</h1>
          <br></br>
          <div className="profileform">
            <UserDetails formData={data} onChange={() => {}} />
          </div>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
