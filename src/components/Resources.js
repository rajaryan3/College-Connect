import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Resources.css'
// import PostResource from "./PostResource";
// import DeleteResource from './DeleteResource'

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [currentSubject, setCurrentSubject] = useState(null);
  const userObj = JSON.parse(sessionStorage.getItem("curr_user"));


  const handleDelete = async (props) => {
    try {
      const response = await axios.delete("http://localhost:8000/resources", {
        data: props,
      });
      console.log(response.status);
      if (response.status === 200) {
        alert("Resource deleted successfully");
        const res = await axios.get("http://localhost:8000/resources", {
          params: {
            AY: userObj.AY,
            degree: userObj.degree,
            branch: userObj.branch,
            currentYear: userObj.current_year,
          },
        });
        // setResources(res.data);
        const updatedSubject = { ...currentSubject }; // create a copy of currentSubject
        updatedSubject.sources = updatedSubject.sources.filter(
          (source) => source.title !== props.content
        ); // remove the deleted source from the currentSubject sources array
        setCurrentSubject(updatedSubject); 
        console.log(currentSubject);
      }
    } catch (error) {
      alert("Error deleting resource", error);
    }
  };

  useEffect(() => {
    const user = {
      AY: userObj.AY,
      degree: userObj.degree,
      branch: userObj.branch,
      currentYear: userObj.current_year,
    };
    const getResources = async () => {
      try {
        const res = await axios.get("http://localhost:8000/resources", {
          params: user,
        });
        setResources(res.data.subjects);
      } catch (err) {
        console.error(err);
      }
    };
    getResources();
  }, [currentSubject]);

  const handleClick = (subject) => {
    setCurrentSubject(subject);
  };

  const handleBack = () => {
    setCurrentSubject(null);
  };

  const getResourceCards = () => {
   
    if (!Array.isArray(resources)) {
      return null;
    }

    return (
      <div className="resource-cards">
        {currentSubject.sources.map((source) => (
          <div key={source._id} className="card">
            <div className="card-body">
              <h5 className="card-title">{source.title}</h5>
              <a href={source.linkOrFileUpload} className="card-link">
                View Resource
              </a>
              <button
                type="submit"
                className="btn btn-danger deleteButton"
                onClick={() =>
                  handleDelete({
                    AY: userObj.AY,
                    degree: userObj.degree,
                    branch: userObj.branch,
                    year: userObj.current_year,
                    sub_name: currentSubject.sub_name,
                    content: source.title,
                  })
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const getSubjectCards = () => {
   
    if (!Array.isArray(resources)) {
      return null;
    }

    return resources.map((subject) => (
      <div key={subject._id}>
        <div className="subject-button" onClick={() => handleClick(subject)}>
          {subject.sub_name}
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      {currentSubject ? (
        <div>
          <div style={{marginTop:"30px"}}>
          <button className="btn btn-primary" onClick={handleBack}>
            Back to Subjects
          </button>
          </div>
          <h1 style={{textAlign:"center",marginBottom:"40px"}}>{currentSubject.sub_name}</h1>
          
          <div>{getResourceCards()}</div>
          {/* <div>{handleDelete()}</div> */}
        </div>
      ) : (
        <div>{getSubjectCards()}</div>
      )}
      
    </div>
  );
};

export default Resources;
