import "../App.css";
import "../index.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Rellax from 'rellax';

const Wall = (props) => {
  const [responseList, setResponseList] = useState([]);
  var rellax = new Rellax('.rellax', { horizontal: true, vertical: true });

  useEffect(() => {
    Axios.get("https://persona-collabwall.herokuapp.com/api/get").then((response) => {
      console.log(response.data);
      setResponseList(response.data);
    });
  }, [])

  function returnRandomHeight() {
    let max = 3 * window.innerHeight;
    let min = 200;
    return Math.random() * (max - min) + min;
  }

  function returnRandomWidth() {
    let max = 3 * window.innerWidth;
    let min = 100;
    return Math.random() * (max - min) + min;
  }


  return (
    <div className="Wall" id="Wall">
      <div class="containerA w-100 rellax" data-rellax-speed="10" id="containerA">
      </div>

      <div class="containerC parallax unselectable">
        <section class="parallax-group">
          {responseList.map((val) => {
            if (val.style !== "iMessageStyle") {
              return (
                <div className="responses unselectable parallax-layer" style={{ top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }}>
                  <p class={val.style}>
                    {val.response}</p>
                  <br></br>
                  {/* <span class="delivered">Delivered</span> */}
                </div>
              );
            }
            else {
              return (
                <div className="responses unselectable parallax-layer rellax" data-rellax-speed="2" style={{ top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }}>
                  <p class={val.style}>
                    {val.response}</p>
                  <span class="delivered">Delivered</span>
                  <br></br>
                </div>
              );
            }
          })}
        </section>
      </div>

      <div class="container containerB unselectable rellax" data-rellax-speed="0.2">
        <div class="row">
          <div class="col-12">
            <h1>
              LEAVE YOUR<br></br>MARK
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            {/* <p>
              We encourage you to leave something behind on this collab wall.
              <br></br>
              This may be a message, words of inspiration or something
              completely random.<br></br>All messages placed will be curated in
              a final collaboration wall at the end of the exhibit.<br></br>Scan
              the QR code and write away!
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wall;
