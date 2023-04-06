import React, { useState } from "react";
import axios from "axios";

const PostResource = ({setResources}) => {
  const [formData, setFormData] = useState({
    currentYear: "TY",
    AY: "2024",
    branch: "Computer",
    degree: "BTech",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/resources", formData)
      .then((response) => {
        console.log(response);
        setFormData({
          currentYear: "TY",
          AY: "2024",
          branch: "Computer",
          degree: "BTech",
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
        alert("Post submitted successfully!");
        axios.get("http://localhost:8000/resources", {
          params: {
            currentYear: "TY",
            AY: "2024",
            branch: "Computer",
            degree: "BTech",
          }
        }).then((response) => {
          setResources(response.data);
        });
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred while submitting the post.");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <label>
          Link:
          <input
            type="text"
            name="linkOrFileUpload"
            value={formData.subjects[0].sources[0].linkOrFileUpload}
            onChange={handleInputChange}
          />
        </label>
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
        <label>
          Posted By:
          <input
            type="text"
            name="posted_by"
            value={formData.subjects[0].sources[0].posted_by}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <a href="http://localhost:8000/resources">
          <button type="Back to Resources">Back</button>
        </a>
      </form>
    </div>
  );
};

export default PostResource;
