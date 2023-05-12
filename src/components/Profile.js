import { useState, useEffect } from "react";
import axios from "axios";
import UserDetails from "./UserDetails";
import "../App.css";

function Profile() {
  // const [data, setData] = useState(null);
  const userObj = JSON.parse(sessionStorage.getItem('curr_user'));
  // console.log(userObj);
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
    professional_arr:{github:"", youtube:"", linkedIn:""},
    photo: "",
    password: "",
  });
  const [formData, setFormData] = useState(data);
  const [editing, setEditing] = useState(false);

  const getApiData = async () => {
    try {
      const ourId = userObj._id;
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
      console.log(formData);

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
            <h1 style={{ textAlign: "center", marginTop:"25px" }}>Profile</h1>
            <br></br>
           
          </div>
          <UserDetails
            formData={formData}
            setFormData={setFormData}
            editing={editing}
            onChange={handleInputChange}
          />
          {/* <button
            style={{ display: "block", margin: "0 auto", marginTop:"40px" }}
            className="btn btn-success"
            onClick={handleSaveClick}
          >
            Save
          </button>
          <button
            style={{ display: "block", margin: "10px auto" }}
            className="btn btn-danger"
            onClick={cancelEdit}
          >
            Cancel
          </button> */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <button
              style={{ margin: "0 10px" }}
              className="btn btn-success"
              onClick={handleSaveClick}
            >
              Save
            </button>
            <button
              style={{ margin: "0 10px" }}
              className="btn btn-danger"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="profile">
          <br></br>
          <h1 style={{ textAlign: "center", color: "whitesmoke" }}>Profile</h1>
          <br></br>

          <div className="profileform">
            <UserDetails
              formData={data}
              editing={editing}
              onChange={() => {}}
            />
          </div>
          <button
            style={{ display: "block", margin: "0 auto" }}
            className="btn btn-light"
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
