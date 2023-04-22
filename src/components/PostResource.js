import React, { useState } from "react";
import axios from "axios";

const PostResource = () => {
  const userObj = JSON.parse(sessionStorage.getItem("curr_user"));
  const [formData, setFormData] = useState({
    currentYear: userObj.current_year,
    AY: userObj.AY,
    branch: userObj.branch,
    degree: userObj.degree,
    subjects: [
      {
        sub_name: "",
        sources: [
          {
            title: "",
            linkOrFileUpload: "",
            type: "",
            posted_by: "",
          },
        ],
      },
    ],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      subjects: [
        {
          ...prevState.subjects[0],
          sub_name:
            name === "sub_name" ? value : prevState.subjects[0].sub_name,
          sources: [
            {
              ...prevState.subjects[0].sources[0],
              [name]: value,
            },
          ],
        },
      ],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const fileData = event.target.elements.linkOrFileUpload.files[0];
      const form = new FormData();
      form.append("file", fileData, fileData.name);
      const response = await axios.post(
        "http://localhost:8000/file/upload",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      const imageUrl = response.data.imageUrl;
      const updatedFormData = {
        ...formData,
        subjects: [
          {
            ...formData.subjects[0],
            sources: [
              {
                ...formData.subjects[0].sources[0],
                linkOrFileUpload: imageUrl,
                posted_by: userObj._id
              },
            ],
          },
        ],
      };
      const postResponse = await axios.post(
        "http://localhost:8000/resources",
        updatedFormData
      );
      console.log(postResponse);
      alert("Post submitted successfully!");
      setFormData({
        currentYear: userObj.current_year,
        AY: userObj.AY,
        branch: userObj.branch,
        degree: userObj.degree,
        subjects: [
          {
            sub_name: "",
            sources: [
              {
                title: "",
                linkOrFileUpload: "",
                type: "",
                posted_by: "",
              },
            ],
          },
        ],
      });
      event.target.elements.linkOrFileUpload.value = null;
    } catch (error) {
      console.log(error);
      alert("An error occurred while submitting the post.");
    }
  };

  return (
    // <div style={{ backgroundImage:"url("https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=600")", width:"100%", height:"60px"}}>
    <div
      style={{
        backgroundImage:
          "url('https://c1.wallpaperflare.com/preview/549/468/58/copy-space-copyspace-workspace-workplace.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        minHeight: "100vh",
        padding: "60px 0",
        boxSizing: "border-box",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          border: "1px solid black",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.99)",
          margin: "0px auto",
          width: "60%",
          marginTop: "80px",
          boxSizing: "border-box",
          height: "300px",
        }}
      >
        <label>
          Subject Name:
          <input
            type="text"
            name="sub_name"
            value={formData.subjects[0].sub_name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.subjects[0].sources[0].title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <input
          type="file"
          name="linkOrFileUpload"
          accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt"
          onChange={handleInputChange}
        />
        <br />
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={formData.subjects[0].sources[0].type}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button
          style={{ marginLeft: "30px" }}
          type="submit"
          className="btn btn-outline-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostResource;
       
