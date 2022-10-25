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
      <div className="containerA w-100 rellax" data-rellax-speed="10" id="containerA">
      </div>
      <img src="https://gray-wwbt-prod.cdn.arcpublishing.com/resizer/9-QDoKyfV4H8F0abvgrXhJRqMos=/1200x1800/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/2BNPCSU4ENHWDCZLK4KJU2JC5A.jpg" width={100} style={{ top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }} />

      <div className="containerC parallax unselectable">
        <section className="parallax-group">
          {responseList.map((val) => {
            // image
            if (val.url !== "" && val.url !== null) {
              return (
                <div className="responses unselectable parallax-layer" style={{ top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }}>
                  <img src={val.url} width={100} />
                  <p>{val.response}</p>
                </div>
              );
            }
            // text
            else if (val.style !== "iMessageStyle" && val.url === "" || val.style !== "iMessageStyle" && val.url === null) {
              return (
                <div className="responses unselectable parallax-layer" style={{ top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }}>
                  <p className={val.style}>
                    {val.response}</p>
                  <br></br>
                  {/* <span className="delivered">Delivered</span> */}
                </div>
              );
            }
            else if (val.style === "iMessageStyle") {
              return (
                <div className="responses unselectable parallax-layer rellax" data-rellax-speed="2" style={{ top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }}>
                  <p className={val.style}>
                    {val.response}</p>
                  {/* <span className="delivered">Delivered</span> */}
                  <br></br>
                </div>
              );
            }
            // else if (val.url !== "" && val.url !== null) {
            //   return (
            //     <div className="responses unselectable parallax-layer" style={{ top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }}>
            //       <p>{val.url}</p>
            //       <img src={val.response} width={100} />
            //       {/* <span className="delivered">Delivered</span> */}
            //     </div>
            //   );
            // }
          })}
        </section>
      </div >

      <div className="container containerB unselectable rellax" data-rellax-speed="0.2">
        <div className="row">
          <div className="col-12">
            <h1>
              LEAVE YOUR<br></br>MARK
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
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
    </div >
  );
};

export default Wall;
