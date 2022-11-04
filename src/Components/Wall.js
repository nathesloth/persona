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

  function randomPlace() {
    return Math.random() * 4;
  }


  return (
    <div className="Wall" id="Wall">
      <div class="dropdown">
        {/* <div class="dropdown-content">
          <a href="#">How are you feeling today?</a>
          <a href="#">Words of inspiration</a>
          <a href="#">Favourite quote</a>
          <a href="#">What is your biggest fear or insecurity?</a>
          <a href="#">What is a secret you are too afraid to tell?</a>
          <a href="#">Words of advice you want to share with someone</a>
        </div> */}
        {/* <button className="dropbtn">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAACyElEQVR4nO3cLYhUURjG8f+uiKwiLAiiBkEEg8VisQiKSRC2qM1ktJkVwWYz2mwmkxaTyWKxGAziBwgjCIIiKuPHGO4Elfm895zzPufO84M3Dbuc8z7sXXaeZcDMzCy9C8AAGHmSzgA4P23pa9NeGH/hvhmvW3vvgf2TXpgVyCjPWWxs4u7XS5/CZnMgYhyIGAcixoGImRXI22KnWD1TdzsrkMvAMP1ZVt6QZretbAE/iP/rti/zE7i4VAITXAJ+CVym9vlNh5+M/10RuFDtc3Xprc9xXeBStc61FvteyC2By9U2t1ttekFrwB2BS9Yyd5n9Bm4S68C94IvWMPeBbS13vLTtwIPMF6p5HgE7Wm+3pQ3gcceD93GeALs67LWT3cDTOQdcpXkGbHbaaAKb44NELyN6ngN7Ou4ymb3AC+KXEjUvgQOdt5jYQZp3MaOXU3reAYcS7C+LIzT/URG9pFLzATiaZHMZHQM+Er+s3PMJOJ5oZ9mdAL4Qv7Rc8xU4mWxbhZwBvhO/vNQzBM4m3FNRfSu4khRM0fpScCUtmKL1oeBKXjBFq7ngylYwRaux4MpaMEWrreAqUjBFq6XgKlowRVMvuEIKpmiqBVdowRRNreCSKJiiqRRcUgVTtOiCS7JgihZVcEkXTNFKF1xVFEzRShVcVRVM0XIXXFUWTNFO0fyyTR3GG+B0wXuYmZkVofxe/yjz95e8uz/JQYwDEeNAxDgQMQ5EjAMR40DEOBAxDkSMAxHjQMQ4EDEORIwDEeNAxDgQMQ5EjAMR40DEOBAxDkSMAxHjQMQ4EDEORIwDEeNAxDgQMQ5EjHIgr6MPYP/aIu+HaFoLh4GHOBA554BXOBApG8AN4BsOREqqx5gl1vUxZhl0eYxZRm0eY1bAMo8xK2TRx5gVNu8xZkG2aN4X+zuMQeiJjJ3ATZoPRftME5KZmVmv/AEfXSREg+Ca3QAAAABJRU5ErkJggg==" />
        </button> */}
      </div>


      <div className="containerA w-100 rellax" data-rellax-speed="10" id="containerA">
        <div className="rellax2 unselectable" data-rellax-speed="2" >
          <img className="rellax imagesWall" data-rellax-speed="-4" src="https://i.imgur.com/m1fTJIG.png" style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }} width={45} />
          <img className="rellax2 imagesWall" data-rellax-speed="-5" src="https://i.imgur.com/SMHaUKp.png" style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }} width={50} />
          <img className="rellax2 imagesWall" data-rellax-speed="-2" src="https://i.imgur.com/deS49jo.png" style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }} width={80} />
          <img className="imagesWall rellax" src="https://i.imgur.com/SMHaUKp.png" width={120} style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }} />
          <img src="https://i.imgur.com/deS49jo.png" width={130} style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }} />
          <img className="rellax2 imagesWall" data-rellax-speed="4" src="https://i.imgur.com/5ylLFA4.png" width={50} style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: (returnRandomWidth() - 100) + 'px' }} />
          <img className="imagesWall rellax" src="https://i.imgur.com/m1fTJIG.png" width={100} style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: (returnRandomWidth() - 100) + 'px' }} />
          <img className="imagesWall rellax" src="https://i.imgur.com/5ylLFA4.png" width={80} style={{ zIndex: randomPlace(), top: (returnRandomHeight() - 100) + 'px', left: (returnRandomWidth() - 100) + 'px' }} />
          <img className="imagesWall rellax" src="https://i.imgur.com/m1fTJIG.png" width={95} style={{ zIndex: randomPlace(), top: (returnRandomHeight() - 100) + 'px', left: (returnRandomWidth() - 100) + 'px' }} />
          <img className="imagesWall rellax" src="https://i.imgur.com/SMHaUKp.png" width={70} style={{ zIndex: randomPlace(), top: (returnRandomHeight() - 100) + 'px', left: (returnRandomWidth() - 100) + 'px' }} />
          <img className="rellax imagesWall" data-rellax-speed="-4" src="https://i.imgur.com/m1fTJIG.png" style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: (returnRandomWidth() - 100) + 'px' }} width={45} />
          <img className="rellax2 imagesWall" data-rellax-speed="-5" src="https://i.imgur.com/SMHaUKp.png" style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: (returnRandomWidth() - 100) + 'px' }} width={80} />
          <img className="rellax2 imagesWall" data-rellax-speed="-2" src="https://i.imgur.com/deS49jo.png" style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: (returnRandomWidth() - 100) + 'px' }} width={100} />
          <img className="imagesWall rellax" src="https://i.imgur.com/SMHaUKp.png" width={120} style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: (returnRandomWidth() - 100) + 'px' }} />
          <img src="https://i.imgur.com/deS49jo.png" width={130} style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }} />
          <img className="rellax2 imagesWall" data-rellax-speed="4" src="https://i.imgur.com/5ylLFA4.png" width={50} style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }} />
          <img className="imagesWall rellax" src="https://i.imgur.com/m1fTJIG.png" width={100} style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }} />
          <img className="imagesWall rellax" src="https://i.imgur.com/5ylLFA4.png" width={80} style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }} />
          <img className="imagesWall rellax" src="https://i.imgur.com/m1fTJIG.png" width={95} style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }} />
          <img className="imagesWall rellax" src="https://i.imgur.com/SMHaUKp.png" width={80} style={{ zIndex: randomPlace(), top: (returnRandomHeight() - 100) + 'px', left: returnRandomWidth() + 'px' }} />
          <img className="rellax2" data-rellax-speed="8" src="https://i.imgur.com/SMHaUKp.png" style={{ zIndex: randomPlace(), top: (returnRandomHeight() - 100) + 'px', left: returnRandomWidth() + 'px' }} width={200} />
        </div>

      </div>
      <div className="containerC parallax unselectable">
        <section className="parallax-group">
          {responseList.map((val) => {
            // image
            if (val.url !== "" && val.url !== null) {
              return (
                <div className="image-response responses unselectable parallax-layer rellax" data-rellax-speed="5" style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }}>
                  <img className="cropped1" src={val.url} width={100} />
                  <p>{val.response}</p>
                </div>
              );
            }
            // text
            else if (val.style !== "iMessageStyle" && val.style !== "instaStyle" && val.url === "" || val.style !== "iMessageStyle" && val.url === null) {
              return (
                <div className="responses unselectable parallax-layer" style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }}>
                  <p className={val.style}>
                    {val.response}</p>
                  <br></br>
                </div>
              );
            }
            // insta style
            else if (val.style !== "iMessageStyle" && val.url === "" || val.style !== "iMessageStyle" && val.url === null) {
              return (
                <div className="responses unselectable parallax-layer rellax" data-rellax-speed="7" style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }}>
                  <p className={val.style}>
                    {val.response}</p>
                  <br></br>
                </div>
              );
            }
            else if (val.style === "iMessageStyle") {
              return (
                <div className="responses unselectable parallax-layer rellax" data-rellax-speed="2" style={{ zIndex: randomPlace(), top: returnRandomHeight() + 'px', left: returnRandomWidth() + 'px' }}>
                  <p className={val.style}>
                    {val.response}</p>
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

      <div className="container containerB unselectable" data-rellax-speed="0.2">
        <div className="row">
          <div className="col-12">
            <h1>
              LEAVE YOUR<br></br>MARK
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wall;
