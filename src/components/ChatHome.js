import { useState, useEffect, React } from "react";
import ConversationMessages from "./ConversationMessages";
import Links from './Links';
import "../styles/chat.css";

import axios from "axios";

function UserCard({ user, setSelectedConversation, setNewMessageFlag, linkUser, setLinkUser, links, setLinks }) {
  const { first_name, last_name, branch, current_year, degree, photo, mail, my_description, professional_arr} = user;
  // console.log(`User:${user.first_name}`);
  
  const userObj = JSON.parse(sessionStorage.getItem("curr_user"));

  // useEffect(() => {
  //   console.log(selectedConversation);
  // }, [selectedConversation]);

  // const handleLinkFunction = () => {
  //   console.log('Yes');
    
  //   <Links />
  //   // </div>);
  // }
  const handleLink = () => {
    setLinks(!links);
    console.log(`L1: ${linkUser.professional_arr}`);
    setLinkUser({
      first_name: first_name,
      last_name: last_name,
      branch: branch,
      current_year: current_year,
      degree: degree,
      photo: photo,
      mail: mail,
      my_description : my_description,
      professional_arr : professional_arr
    });
  }


  const handleConversationClick = async () => {
    const response = await axios.post("http://localhost:8000/conversation", {
      senderId: userObj._id,
      receiverId: user._id,
    });
    // console.log(response.data);
    // console.log(userObj._id, response.data._id);
    // setSelectedConversation(response.data);
    try{
      const res2 = await axios.get("http://localhost:8000/currentConversation",{
          params:{
            user_id : userObj._id,
            conversation_id : response.data._id
          }
      })
      // console.log(selectedConversation);
      setSelectedConversation(res2.data);
      // console.log(selectedConversation);

    }
    catch(err){
      console.log(err);
    }
    setNewMessageFlag(Date.now());
  };

  return (
    
    <div className="card3-container">
      <div className="card3">
        <div className="pic_name">
          <img
            src={photo}
            alt="MyPic"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />

          <h4>{`${first_name} ${last_name}`}</h4>
        </div>
        <p>
          {branch} {current_year} {degree}
        </p>
        {/* <button onClick={handleConversationClick}>Chat</button> */}
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleConversationClick}
        >
          Chat
        </button>
        <button onClick={handleLink}>View</button>
      </div>
    </div>
  )};

function ChatHome() {
  const [users, setUsers] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [links, setLinks] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [linkUser, setLinkUser] = useState({
    "first_name": "",
    "last_name": "",
    "branch":"",
    "current_year":"",
    "degree":"",
    "photo":"",
    "mail":"",
    "my_description":"",
    "professional_arr":{"github":"", "youtube":"", "linkedIn":""}
  });
  const [NewMessageFlag, setNewMessageFlag] = useState(null);
  const userObj = JSON.parse(sessionStorage.getItem("curr_user"));
  const [formData, setFormData] = useState({
    branch: "",
    current_year: "",
    degree: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(formData);
    const response = await axios.get("http://localhost:8000/users", {
      params: formData,
    });
    setUsers(response.data.users);
    // You can use the formData object here to submit the form data to your backend API
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/users");
        setUsers(response.data.users);
        console.log(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // return (
  //   <div className="chat-home">
  //     <div className="users-list">
  //       {users.map((user) => (
  //         <UserCard
  //           key={user._id}
  //           user={user}
  //           setSelectedConversation={setSelectedConversation}
  //           selectedConversation={selectedConversation}
  //           setNewMessageFlag={setNewMessageFlag}
  //         />
  //       ))}
  //     </div>
  //     <div className="conversation">
  //       {selectedConversation ? (
  //         <ConversationMessages
  //           selectedConversation={selectedConversation}
  //           setConversation={setConversations}
  //           setSelectedConversation={setSelectedConversation}
  //           setNewMessageFlag={setNewMessageFlag}
  //           userObj={userObj}
  //         />
  //       ) : (
  //         <h3>Select a conversation to start chatting</h3>
  //       )}
  //     </div>
  //   </div>
  // )};

  return (
    <div className="user-list">
      {selectedConversation ? (
        <ConversationMessages
          selectedConversation={selectedConversation}
          setConversation={setConversations}
          setSelectedConversation={setSelectedConversation}
          setNewMessageFlag={setNewMessageFlag}
          userObj={userObj}
        />
      ) : (
  
        <div>
          {links ? <Links linkUser={linkUser} setLinkUser={setLinkUser} links={links} setLinks={setLinks}/> : (
        <div>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              // marginTop: "20",
              maxWidth:"80%", 
              margin:"0px auto"
            }}
          >
            <label>
              Branch:
              <select
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
              >
                <option value="">select</option>
                <option value="Civil">Civil</option>
                <option value="Computer">Computer</option>
                <option value="Electrical">Electrical</option>
                <option value="ENTC">ENTC</option>
                <option value="Instrumentation">Instrumentation</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Metallurgy">Metallurgy</option>
                <option value="Production">Production</option>
                <option value="Planning">Planning</option>
              </select>
            </label>
            <br />
            <label>
              Current Year:
              <select
                name="current_year"
                value={formData.current_year}
                onChange={handleInputChange}
              >
                <option value="">select</option>
                <option value="FY">FY</option>
                <option value="SY">SY</option>
                <option value="TY">TY</option>
                <option value="FinalYear">FinalYear</option>
              </select>
            </label>
            <br />
            <label>
              Degree:
              <select
                name="degree"
                value={formData.degree}
                onChange={handleInputChange}
              >
                <option value="">select</option>
                <option value="BTech">BTech</option>
                <option value="MTech">MTech</option>
              </select>
            </label>
            <br />
            {/* <button type="submit" style={{width}}>Submit</button> */}
            <button type="submit" className="btn btn-light" style={{width:"80px", height:"40px"}}>
              Filter
            </button>
          </form>

          <br></br>
          <br></br>

          {users.filter(user => user._id !== userObj._id).map((user) => (
            <UserCard
              key={user._id}
              user={user}
              setSelectedConversation={setSelectedConversation}
              setNewMessageFlag={setNewMessageFlag}
              linkUser={linkUser}
              setLinkUser = {setLinkUser}
              links={links}
              setLinks={setLinks}
            />
          ))}
        </div>
      )}</div>)}</div>)};



export default ChatHome;
