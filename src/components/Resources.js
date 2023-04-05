import React, { useState, useEffect } from 'react';
import axios from "axios";

const Resources = () => {

  const [data, setData] = useState({"firstName":"","lastName":"","mis":"","branch":"","year":"","degree":"","isCR":"" });
  const [rsc, setRsc] = useState([]);
  // const {branch, year, degree} = data;

  const API = 'http://localhost:3000';


  useEffect(() => {
    const getApiData = async(url) => {
      try{
        const res1 = await axios.get(url);
        setData(res1.data);
        // console.log(res.data)
        // console.log(res2.data);
      }
      catch(err){
        console.log(err);
      }
    }
    getApiData(`${API}/profile/642a70071892e3d3b1919e32`);
  }, []);

  useEffect(() => {
     const getResources = async() => {
      try{
        const r = axios.get(`${API}/resources`, {
          params : {
            branch : 'Computer',
            year : 'TY',
            degree : 'BTech',
            subject : 'Data Science'
          }
        });
        setRsc(r.data);
      }
      catch(err){
        console.log(err);
      }
     }
     getResources();
  }, [data]);
  
  return (
    <div>
      <h1>{data.firstName} {data.lastName}</h1>
      <h1>{data.branch} {data.year} {data.degree}</h1>
      {/* {rsc.map((resource) => (
        <div key={resource.id}>
          <h1>{resource.subject} {resource.file}</h1>
        </div>
      ))} */}
      <h1>{rsc[0].branch}</h1>
     


      {/* <h1>{rsc[0].subject} {rsc[0].file} </h1> */}

    </div>
  );
}

export default Resources;
