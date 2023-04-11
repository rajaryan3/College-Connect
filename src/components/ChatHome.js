import { useState, useEffect } from "react";
import ConversationMessages from "./ConversationMessages";
import "../styles/chat.css";
import axios from "axios";

function UserCard({ user, setSelectedConversation }) {
  const { first_name, last_name, branch, current_year, degree } = user;
  const userObj = JSON.parse(sessionStorage.getItem("curr_user"));

   const handleConversationClick = async() => {
     const response = await axios.post("http://localhost:8000/conversation", {
       senderId: userObj._id,
       receiverId: user._id,
     });
     console.log(userObj._id, user._id);
     console.log(response.data);
    //  setSelectedConversation(response.data);
     console.log('Key pressed');
   };

  return (
    <div className="user-card">
      <h3>{`${first_name} ${last_name}`}</h3>
      <p>
        {branch} {current_year} {degree}
      </p>
      <button onClick={handleConversationClick}>Chat</button>
    </div>
  );
}

function ChatHome() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    branch: "",
    current_year: "",
    degree: "",
  });
    // const [conversation, setConversation] = useState();
  const [selectedConversation, setSelectedConversation] = useState(null);
  //    const [NewMessageFlag, setNewMessageFlag] = useState(null);
  const userObj = JSON.parse(sessionStorage.getItem("curr_user"));

  // useEffect(() => {
  //   const userData = { id: userObj._id };
  //   const fetchConversations = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8000/conversation",
  //         {
  //           params: userData,
  //         }
  //       );
  //       setConversations(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching conversations:", error);
  //     }
  //   };

  //   fetchConversations();
  // }, [NewMessageFlag]);

 

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
    async function fetchUsers() {
      const response = await axios.get("http://localhost:8000/users");
      setUsers(response.data.users);
    }
    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      {selectedConversation ? (
        <ConversationMessages
          selectedConversation={selectedConversation}
        //   setConversation={setConversations}
          setSelectedConversation={setSelectedConversation}
        //   setNewMessageFlag={setNewMessageFlag}
        />
      ) : (
        <div>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "20",
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
                <option value="Electronics">Electronics</option>
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
            <button type="submit">Submit</button>
          </form>

          {users.map((user) => (
            <UserCard
              key={user._id}
              user={user}
              setSelectedConversation={setSelectedConversation}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ChatHome;
