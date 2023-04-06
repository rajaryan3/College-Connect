import React, { useState, useEffect } from "react";
import axios from "axios";
import PostResource from './postResources'

const ResourceList = () => {
  const [resources, setResources] = useState([]);

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
          params: user
        });
        setResources(res.data.subjects);
      } catch (err) {
        console.error(err);
      }
    };
    getResources();
  }, []);


  const [currentSubject, setCurrentSubject] = useState(null);

  const handleClick = (subject) => {
    setCurrentSubject(subject);
  };

  const handleBack = () => {
    setCurrentSubject(null);
  };

  const getResourceCards = () => {
    return currentSubject.sources.map((source) => (
      <div key={source._id} className="card">
        <div className="card-body">
          <h5 className="card-title">{source.title}</h5>
          <a href={source.linkOrFileUpload} className="card-link">
            View Resource
          </a>
        </div>
      </div>
    ));
  };

  const getSubjectCards = () => {
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
        </div>
      ) : (
        <div>{getSubjectCards()}</div>
      )}
      <PostResource/>
    </div>
  );
};

export default ResourceList;
