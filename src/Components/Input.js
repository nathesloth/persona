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

  function check_val() {
    var bad_words = new Array("death", "arse", "cock", "crap", "frigger", "nigger", "nigga", "nigra", "prick", "fucker", "spastic", "retard", "spazz", "twat", "Ben Dover", "Ann Al", "erection", "sex", "wank", "kill", "murder", "piss", "bastard", "pussy", "damn", "idiot", "bollocks", "skank", "bugger", "hell", "poop", "fuck", "slut", "whore", "shit", "ass", "cunt", "bitch", "dyke", "faggot", "arsehole", "asshole", "dick");
    var check_text = document.getElementById("hello").value;
    var error = 0;
    for (var i = 0; i < bad_words.length; i++) {
      var val = bad_words[i];
      if ((check_text.toLowerCase()).indexOf(val.toString()) > -1) {
        error = error + 1;
        // Insert something that will say I have bad words 
      }
    }

    if (error > 0) {
      document.getElementById("bad_notice").innerHTML = "Some Bad Words In Your Text!";
    }
    else {
      document.getElementById("bad_notice").innerHTML = "";
    }
  }

  const [response, setResponse] = useState("");
  const [url, setURL] = useState("");
  const [style, setStyle] = useState("noStyle");
  const [prompt, setPrompt] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);

  const prompts = ["", "How are you feeling, really?",
    "What do you miss most about yourself?",
    "Words of inspiration",
    "What is your biggest insecurity or fear?",
    "Words of advice you would like to share with someone?",
    "What is a secret you are too afraid to tell?",
    "What do you wish could be better?",
    "What is something you don't tell anyone",
    "What is your something that makes you unique?",
    "What is your superpower?",
    "If you were a millionaire, what would you do with the money?",
    "What is your idea of happiness?",
    "What do you define as success?",
    "What are you looking forward to this week?",
    "When was the moment you felt most alive?",
    "what are you scared to share with people",
    "What's taking up most of your headspace right now?",
    "What did you do today that made you feel good?",
    "What are you grateful for?",
    "If you could do anything, what would you do?",
    "What was your dream as a child? Have you fulfilled that dream?",
    "What does self-love mean to you?",
    "What brings you joy?",
    "What is something you would say to your younger self?",
    "What was a life changing moment for you?"];

  const addResponse = () => {
    Axios.post("https://persona-collabwall.herokuapp.com/api/insert", {
      response: response,
      style: style,
      prompt: prompt,
      url: url,
    }).then(() => {
      console.log("Success");
    });
  };

  const handleSubmit = (event) => {
    console.log("Prompt is " + prompt);
    console.log("handleSubmit ran");
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ clear all input values in the form
    setResponse("");
    setURL("");
    setStyle("");
    setPrompt("");
    navigate('/submitted');
  };

  const setPromptT = (event) => {
    setPrompt(event.target.value);
  }

  function selectRandomPrompt() {
    setRandomNumber(Math.floor(Math.random() * (prompts.length)));
  };


  /* ------------------------------------------ */
  // Setting the Styles of Each Button

  const selectStyle = (event) => {
    if (event.target.value !== "image") {
      setPrompt("");
    }
    if (event.target.value === "none") {
      document.getElementById("hello").className = "noStyle";
      setStyle("noStyle");
    }
    else if (event.target.value === "insta") {
      document.getElementById("hello").className = "instaStyle";
      setStyle("instaStyle");
    }
    else if (event.target.value === "imessage") {
      document.getElementById("hello").className = "iMessageStyle";
      setStyle("iMessageStyle");
    }
    else if (event.target.value === "note") {
      document.getElementById("hello").className = "noteStyle";
      setStyle("noteStyle");
    }
    else if (event.target.value === "image") {
      setPrompt("g");
    }
  }


  const setNone = () => {
    document.getElementById("hello").className = "noStyle";
    setStyle("noStyle");
  };

  const setInsta = () => {
    document.getElementById("hello").className = "instaStyle";
    setStyle("instaStyle");
  };

  const setiMessage = () => {
    document.getElementById("hello").className = "iMessageStyle";
    setStyle("iMessageStyle");
  };

  const setNote = () => {
    document.getElementById("hello").className = "noteStyle";
    setStyle("noteStyle");
  };

  return (
    <div className="Input" onLoad={selectRandomPrompt}>
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

          {/* <div className="prompt align-center">
            <select onChange={setPromptT}>
              <option value="" disabled selected hidden>Choose a prompt</option>
              <option value="a">How are you feeling today?</option>
              <option value="b">Words of inspiration</option>
              <option value="c">Favourite quote</option>
              <option value="d">What is your biggest fear or insecurity?</option>
              <option value="e">What is a secret you are too afraid to tell?</option>
              <option value="f">Words of advice you want to share with someone</option>
              <option value="g">Image Prompt</option>
            </select>
          </div> */}
        </div>
        <div className="row hey">
          <div className="col-8 col-md-8 justify-center">
            <form onSubmit={handleSubmit}>

              <div className="align-middle">
                <textarea
                  id="hello"
                  name="text"
                  rows="5"
                  cols="10"
                  onKeyUp={check_val}
                  wrap="soft"
                  spellCheck="true"
                  maxLength="300"
                  placeholder={prompts[randomNumber]}
                  value={response}
                  onChange={(event) => {
                    setResponse(event.target.value);
                  }}
                ></textarea>
              </div>

              <p id="bad_notice"></p>

              <div className="prompt align-center">
                <select onChange={selectStyle}>
                  <option value="" disabled selected hidden>Choose a style</option>
                  <option value="none">None</option>
                  <option value="insta">Instagram</option>
                  <option value="imessage">Text Bubble</option>
                  <option value="note">Note</option>
                  <option value="image">Image</option>
                </select>
              </div>

              {/* Only add when selecting image */}

              {prompt == "g" &&
                <input class="url" type="text" placeholder="Insert a URL to an image" value={url} onChange={(event) => {
                  setURL(event.target.value);
                }}></input>
              }
              {url != "" && prompt == "g" &&
                <div className="imageView">
                  <img src={url} />
                </div>
              }

              <button type="submit" onClick={addResponse}>
                <img src="https://img.icons8.com/ios/50/FFFFFF/circled-up-2.png" />
              </button>
              {/* <p>Message uploaded!</p> */}
              {/* <Link to="/wall">View the Wall</Link> */}
              {/* <img src="https://img.icons8.com/material-rounded/48/000000/chevron-left.png" /> */}
            </form>

            {/* <div className="btn-group">
              <button onClick={setNone}>None</button>
              <button onClick={setiMessage}>iMessage</button>
              <button onClick={setInsta}>Insta</button>
              <button onClick={setNote}>Note</button>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
