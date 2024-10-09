import { useState } from 'react'
import APIForm from './components/APIForm'
import './App.css'
import Gallery from './components/Gallery';

function App() {
  const [inputs, setInputs] = useState({
    url: "",
    width: "",
    height: "",
  });
  const [picture, setPicture] = useState();
  const [gallery, setGallery] = useState([]);

  const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

  const makeQuery = () => {
    const wait_until = "network_idle";
    const response_type = "json";
    const fail_on_status = "400%2C404%2C500-511";
    const url_starter = "https://";
    const fullURL = url_starter + inputs.url;
    const query = `https://api.apiflash.com/v1/urltoimage?access_key=${ACCESS_KEY}&url=${fullURL}&width=${inputs.width}&height=${inputs.height}&wait_until=${wait_until}&response_type=${response_type}&fail_on_status=${fail_on_status}`;

    callAPI(query).catch(console.error);
  }

  const reset = () => {
    setInputs({
      url: "",
      width: "",
      height: "",
    });
  }

  const submitForm = () => {
    const defaultValues = {
      width: "1920",
      height: "1080",
    };

    if (inputs.url.length == 0) {
      alert("Please provide a URL");
    } else {
      for (const [key, value] of Object.entries(inputs)) {
        if (value == "") {
          inputs[key] = defaultValues[key]
        }
      }
      makeQuery();
    }
  }

  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();

    if (json.url == null) {
      alert("Oops! Something went wrong with that query, let's try again!")
    } else {
      setPicture(json.url);
      setGallery((prevState) => ([
        ...prevState,
        json.url
      ]));
      reset();
    }
  }

  return (
    <div className="whole-page">
      <h1>Build Your Own Screenshot! 📸</h1>
      
      <APIForm
        inputs={inputs}
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.trim(),
          }))
        }
        onSubmit={submitForm}
      />
      <br></br>
      <br></br>
      {picture ? (
        <img
          className="screenshot"
          src={picture}
          alt="Screenshot returned"
        />
      ) : (
        <div></div>
      )}
      <div className="container">
        <h3> Current Query Status: </h3>
        <p>
          https://api.apiflash.com/v1/urltoimage?access_key=ACCESS_KEY    
          <br></br>
          &url={inputs.url}
          <br></br>
          &width={inputs.width}
          <br></br>
          &height={inputs.height}
          <br></br>
        </p>
      </div>
      <br></br>
      <h3>Gallery:</h3>
      <Gallery images={gallery} />
    </div>
  )
}

export default App;
