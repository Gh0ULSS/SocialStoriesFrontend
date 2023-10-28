import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import "./test.css";
import Axios from "axios";
// import { Link } from "react-router-dom";

const Test = () => {
  const [medias, setMedias] = useState([]);

  // reorder the logic
  // Tied to users in DyanmoDB
  useEffect(() => {
    const getchildMedia = async () => {
      try {
        const loggedinUser = localStorage.getItem('Username');
        const response = await Axios.get('http://localhost:5118/api/Files/GetChildStory', { // port 8800 express js http://localhost:5038/getchildstory
           headers: {
               Authorization: `Current Active Session ${loggedinUser}`
           }
        }); // getstory

        console.log('API Response:', response.data);

        switch(response.status)
        {
          case 200: 
            const data = response.data;
            console.log(response.data);
            setMedias(data);
            break;
          case 403:
            console.error('Error fetching image:', response.status);
            break;
          case 404:
            console.error('Error fetching image:', response.status);
            break;
        }
      } 
      catch (error) 
      {
        console.error('Error fetching image:', error);
      }
    };
    getchildMedia();
  },[]);

  /*
    if (response.status == 200) {
      const data = response.data;
      console.log(response.data);
      setMedias(data);
    } 
    else 
    {
      console.error('Error fetching image:', response.status);
    }
  */

// NOTE: this not handled for each user in DynamoDB
/*
 useEffect(() => {
    const getchildMedia = async () => {
      try {
        const response = await Axios.get('http://localhost:8800/getstory'); // getstory
        switch(response.status)
        {
          case 200: 
            const data = response.data;
            console.log(response.data);
            setMedias(data);
            break;
          case 403:
            console.error('Error fetching image:', response.status);
            break;
          case 404:
            console.error('Error fetching image:', response.status);
            break;

        }
      } 
      catch (error) 
      {
        console.error('Error fetching image:', error);
      }
    };
    getchildMedia();
  },[]);
*/

        /*
        if (response.status == 200) {
          const data = response.data;
          console.log(response.data);
          setMedias(data);
        } else {
          console.error('Error fetching image:', response.status);
        }
        */


  return (
    <div className="home-client">
      {/* Div for whole Page Above ^ */}

      {/* React Header Call*/}
      <Header />
      
      {/* <h1 className="WelcomeCli">Welcome, Parent</h1> */}
      <h1 className="WelcomeCli" >Testing book view page</h1> {/* Need changes for routing to what nathan worked on */}
      <br/>
      <br/>
      <div id="images">
      {medias.map((media) => (
        <div key={media.key}>  {/* Key for express js */}
          <img id="S3media" src={`https://adaptive-social-stories.s3.ap-southeast-2.amazonaws.com/${media.key}`} alt={media.Key} /> 
        </div>
      ))}
     </div>
      
    {/* React Footer Call*/}
    <Footer />
    </div>
  );
};

export default Test;
