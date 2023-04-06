import React, { useState } from 'react';
import axios from 'axios';

function PostResource() {
  // const [sub_name, setSubName] = useState('');
  // const [sources, setSources] = useState('');
  // const [title, setTitle] = useState('');
  // const [linkOrFileUpload, setLinkOrFileUpload] = useState('');
  // const [type, setType] = useState('');
  // const [posted_by, setPostedBy] = useState('');

  const [formData, setFormData] = useState([{"currentYear":"TY","AY":"2024", "branch":"Computer", "degree":"BTech", "sub_name":"", "sources":[{"title":"", "linkOrFileUpload":"", "type":"", "posted_by":""}]}]);



  const handleSubmit = () => {
    const res = axios.post("http://localhost:8000/resources", JSON.stringify(formData));
    if(res.status === 200) alert('Resource uploaded successfully');
    else alert('Failed to upload the resource');
    setFormData([
      {
        currentYear: "",
        AY: "",
        branch: "",
        degree: "",
        sub_name: "",
        sources: [{ title: "", linkOrFileUpload: "", type: "", posted_by: "" }],
      },
    ]);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sub_name">Subject Name:</label>
        <input
          type="text"
          id="sub_name"
          name="sub_name"
          value={formData[0].sub_name}
          onChange={(e) => {
            const newFormData = [...formData];
            newFormData[0].sub_name = e.target.value;
            setFormData(newFormData);
          }}
        />

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData[0].sources[0].title}
          onChange={(e) => {
            const newFormData = [...formData];
            newFormData[0].sources[0].title = e.target.value;
            setFormData(newFormData);
          }}
        />

        <label htmlFor="linkOrFileUpload">Link or File Upload:</label>
        <input
          type="text"
          id="linkOrFileUpload"
          name="linkOrFileUpload"
          value={formData[0].sources[0].linkOrFileUpload}
          onChange={(e) => {
            const newFormData = [...formData];
            newFormData[0].sources[0].linkOrFileUpload = e.target.value;
            setFormData(newFormData);
          }}
        />

        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          name="type"
          value={formData[0].sources[0].type}
          onChange={(e) => {
            const newFormData = [...formData];
            newFormData[0].sources[0].type = e.target.value;
            setFormData(newFormData);
          }}
        />

        <label htmlFor="posted_by">Posted By:</label>
        <input
          type="text"
          id="posted_by"
          name="posted_by"
          value={formData[0].sources[0].posted_by}
          onChange={(e) => {
            const newFormData = [...formData];
            newFormData[0].sources[0].posted_by = e.target.value;
            setFormData(newFormData);
          }}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
  // const [subName, setSubName] = useState('');
  // const [sources, setSources] = useState([]);
  // const [title, setTitle] = useState('');
  // const [linkOrFileUpload, setLinkOrFileUpload] = useState('');
  // const [type, setType] = useState('');

  /*
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/resources", {
        currentYear,
        AY,
        branch,
        degree,
        subjects,
      });
      alert('Resource added successfully!');
      setCurrentYear('');
      setAY('');
      setBranch('');
      setDegree('');
      setSubjects([]);
      setSubName('');
      setSources([]);
      setTitle('');
      setLinkOrFileUpload('');
      setType('');
    } catch (error) {
      alert('Error adding resource.');
      console.error(error);
    }
  };
 

  const handleAddSource = () => {
    // Create a new source object with the provided details
    const newSource = {
      title,
      linkOrFileUpload,
      type,
    };

    // Update the state with the new source object
    setSubjects((prevSubjects) =>
      prevSubjects.map((subject) => {
        if (subject.sub_name === subName) {
          return {
            ...subject,
            sources: [...subject.sources, newSource],
          };
        } else {
          return subject;
        }
      })
    );

    // Clear the source form fields
    setTitle("");
    setLinkOrFileUpload("");
    setType("");
  };

  const handleAddSubject = () => {
    // Create a new subject object with the provided details and an empty sources array
    const newSubject = {
      sub_name: subName,
      sources: [],
    };

    // Add the new subject object to the state
    setSubjects([...subjects, newSubject]);

    // Clear the subject form field
    setSubName("");
  };

  return (
    <div>
      <label>
        Add Subject:
        <br />
        <label>
          Name:
          <input
            type="text"
            value={subName}
            onChange={(e) => setSubName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Link/File Upload:
          <input
            type="text"
            value={linkOrFileUpload}
            onChange={(e) => setLinkOrFileUpload(e.target.value)}
          />
        </label>
        <br />
        <label>
          Type:
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddSource}>
          Add Source
        </button>
        <br />
        <button type="button" onClick={handleAddSubject}>
          Add Subject
        </button>
      </label>
    </div>
    
  )*/};
export default PostResource