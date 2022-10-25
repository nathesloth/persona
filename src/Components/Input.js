import "../App.css";
import "../index.css";
import React from "react";
import { useState } from "react";
import Axios from "axios";
import {
  useNavigate
} from "react-router-dom";

const Input = (props) => {
  const navigate = useNavigate();

  function changeLocation(placeToGo) {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  }

  const [response, setResponse] = useState("");
  const [style, setStyle] = useState("noStyle");
  const [prompt, setPrompt] = useState("");

  const addResponse = () => {
    Axios.post("https://persona-collabwall.herokuapp.com/api/insert", {
      response: response,
      style: style,
      prompt: prompt,
    }).then(() => {
      console.log("success");
    });
  };

  const handleSubmit = (event) => {
    console.log("Prompt is " + prompt);
    console.log("handleSubmit ran");
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ clear all input values in the form
    setResponse("");
    navigate('/wall');
  };

  const setPromptT = (event) => {
    console.log(event.target.value);
    setPrompt(event.target.value);
  }

  /* ------------------------------------------ */
  // Setting the Styles of Each Button

  const setNone = () => {
    document.getElementById("hello").className = "noStyle";
    setStyle("noStyle");
    console.log('button clicked');
  };

  const setInsta = () => {
    document.getElementById("hello").className = "instaStyle";
    setStyle("instaStyle");
    console.log('button clicked');
  };

  const setiMessage = () => {
    document.getElementById("hello").className = "iMessageStyle";
    setStyle("iMessageStyle");
    console.log('button clicked');
  };

  const setNote = () => {
    document.getElementById("hello").className = "noteStyle";
    setStyle("noteStyle");
    console.log('button clicked');
  };

  return (
    <div className="Input">
      <div className="containerA w-100" id="containerA"></div>
      <div className="container align-center w-100 containerB unselectable">
        <div className="row">
          <div className="col-12">
            <h1>PERSONA</h1>
          </div>
          <div className="message col-sm-8 col-md-10 align-center">
            <span>
              Type in an anonymous message to stick to the wall! Style it too to
              make it yours
            </span>
          </div>

          <div className="prompt align-center">
            <select onChange={setPromptT}>
              <option value="" disabled selected hidden>Choose a prompt</option>
              <option value="a">How are you feeling today?</option>
              <option value="b">Words of inspiration</option>
              <option value="c">Favourite quote</option>
              <option value="d">What is your biggest fear or insecurity?</option>
              <option value="e">What is a secret you are too afraid to tell?</option>
              <option value="f">Words of advice you want to share with someone</option>
            </select>
          </div>
        </div>
        <div className="row hey">
          <div className="col-8 col-md-8 justify-center">
            <form onSubmit={handleSubmit}>
              {/* <img src="https://img.icons8.com/material-rounded/48/000000/chevron-left.png" /> */}
              <div className="align-middle">
                <textarea
                  id="hello"
                  name="text"
                  rows="5"
                  cols="10"
                  wrap="soft"
                  spellCheck="true"
                  maxLength="400"
                  value={response}
                  onChange={(event) => {
                    setResponse(event.target.value);
                  }}
                ></textarea>
              </div>

              <button type="submit" onClick={addResponse}>
                <img src="https://img.icons8.com/ios/50/FFFFFF/circled-up-2.png" />
                {/* <i className="bi bi-arrow-up-circle"></i> */}
              </button>
              {/* <Link to="/wall">View the Wall</Link> */}
              {/* <img src="https://img.icons8.com/material-rounded/48/000000/chevron-left.png" /> */}
            </form>

            <div className="btn-group">
              <button onClick={setNone}>None</button>
              <button onClick={setiMessage}>iMessage</button>
              <button onClick={setInsta}>Insta</button>
              <button onClick={setNote}>Note</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
