import React, { useState, useEffect } from "react";
import axios from "axios";
// import PostResource from "./PostResource";
// import DeleteResource from './DeleteResource'

const ResourceList = () => {
  const [resources, setResources] = useState([]);
  const [currentSubject, setCurrentSubject] = useState(null);

  const handleDelete = (props) => {
    axios
      .delete("http://localhost:8000/resources", { data: props })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          alert("Resource deleted successfully");
          axios
            .get("http://localhost:8000/resources", {
              params: {
                AY: "2024",
                degree: "BTech",
                branch: "Computer",
                currentYear: "TY",
              },
            })
            .then((response) => {
              setResources(response.data);
            });
          // console.log('here');
        }
        // console.log("here");
      })
      .catch((error) => {
        alert("Error deleting resource", error);
      });
    // console.log(props);
  };

  useEffect(() => {
    const user = {
      AY: "2024",
      degree: "BTech",
      branch: "Computer",
      currentYear: "TY",
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
    // axios.get("http://localhost:8000/resources").then((response) => {
    //   setResources(response.data);
    //   // getResourceCards(); // Call getResourceCards to update the UI
    // });
  };

  const handleBack = () => {
    setCurrentSubject(null);
  };

 

  const getResourceCards = () => {
    // const data = {"AY":"2024", "branch":"Computer", "degree":"BTech", "year":"TY", "sub_name":"", "content":""}
    // axios.get("http://localhost:8000/resources").then((response) => {
    //   setResources(response.data);
    //   // getResourceCards(); // Call getResourceCards to update the UI
    // });
    if (!Array.isArray(resources)) {
      return null;
    }

    return currentSubject.sources.map((source) => (
      <div key={source._id} className="card">
        <div className="card-body">
          <h5 className="card-title">{source.title}</h5>
          <a href={source.linkOrFileUpload} className="card-link">
            View Resource
          </a>
          <button
            onClick={() =>
              handleDelete({
                AY: "2024",
                branch: "Computer",
                degree: "BTech",
                year: "TY",
                sub_name: currentSubject.sub_name,
                content: source.title,
              })
            }
          >
            Delete
          </button>
        </div>
      </div>
    ));
  };

  const getSubjectCards = () => {
    // axios.get("http://localhost:8000/resources").then((response) => {
    //   setResources(response.data);
    //   // getResourceCards(); // Call getResourceCards to update the UI
    // });
    if (!Array.isArray(resources)) {
      return null;
    }

    return resources.map((subject) => (
      <div key={subject._id} className="card">
        <div className="card-body">
          <h5 className="card-title">{subject.sub_name}</h5>
          <button
            className="btn btn-primary"
            onClick={() => handleClick(subject)}
          >
            View Resources
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      {currentSubject ? (
        <div>
          <button className="btn btn-primary" onClick={handleBack}>
            Back to Subjects
          </button>
          <h3>{currentSubject.sub_name}</h3>
          <div>{getResourceCards()}</div>
          {/* <div>{handleDelete()}</div> */}
        </div>
      ) : (
        <div>{getSubjectCards()}</div>
      )}
      {/* <PostResource setResources={setResources} /> */}
      {/* axios.get("http://localhost:8000/resources").then((response) =>{" "}
      {setResources(response.data)}) */}
    </div>
  );
};

export default ResourceList;
