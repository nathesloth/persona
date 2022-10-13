import "../App.css";
import "../index.css";
import "../home.css";
import React, { useState, useEffect } from "react";
import Rellax, { refresh } from 'rellax';
import { Link } from "react-router-dom";


const Default = (props) => {
    console.log(window.location.href);
    const buttonStyle = {
        textDecoration: "none",
        color: "black",
        padding: "20px 20px",
        border: "none",
        backgroundColor: "white",
        borderRadius: "10px",
    };

    useEffect(() => {
        var rellax2 = new Rellax('.rellax2', { vertical: true });
    }, [])


    return (
        <div className="Home" id="Home">
            <div className="containerA rellax2" data-rellax-speed="8" id="containerA">
            </div>
            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>what is your</p>
                        <h1>
                            PERSONA?
                        </h1>
                    </div>
                </div>
            </div>
            <div className="rellax2 unselectable" data-rellax-speed="2" >
                <img className="rellax" data-rellax-speed="-4" src="https://i.imgur.com/m1fTJIG.png" width={150} />
                <img className="rellax2" data-rellax-speed="-5" src="https://i.imgur.com/SMHaUKp.png" width={200} />
                <img className="rellax2" data-rellax-speed="-2" src="https://i.imgur.com/deS49jo.png" width={100} />
                <img src="https://i.imgur.com/SMHaUKp.png" width={200} />
                <img src="https://i.imgur.com/deS49jo.png" width={100} />
                <img className="rellax2" data-rellax-speed="4" src="https://i.imgur.com/5ylLFA4.png" width={275} />
                <img src="https://i.imgur.com/m1fTJIG.png" width={150} />
                <img src="https://i.imgur.com/5ylLFA4.png" width={300} />
                <img src="https://i.imgur.com/m1fTJIG.png" width={150} />
                <img src="https://i.imgur.com/SMHaUKp.png" width={200} />
                <img className="rellax2" data-rellax-speed="8" src="https://i.imgur.com/deS49jo.png" width={100} />
            </div>
            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            definition: the aspect of someone's character that is presented to or perceived by others
                        </p>
                    </div>
                </div>
            </div>

            {/* 
            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            does it ever feel like you are wearing a mask?
                        </p>
                    </div>
                </div>
            </div>


            {/* <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            or that to be liked you need to look like a celebrity?
                        </p>
                    </div>
                </div>
            </div> 


            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            that to be popular you need lots of likes and followers?
                        </p>
                    </div>
                </div>
            </div>


            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            do you ever feel that the reflection you see in the mirror is not good enough?
                        </p>
                    </div>
                </div>
            </div>


            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            Platforms like Youtube, Facebook and Instagram portray an image of beauty and perfection
                        </p>
                    </div>
                </div>
            </div>


            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            one that at times isn't as realistic or healthy as we imagine
                        </p>
                    </div>
                </div>
            </div>

            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            social media is just highlights
                        </p>
                    </div>
                </div>
            </div>


            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            catered and manipulated to look like everyone is beautiful, successful and amazing
                        </p>
                    </div>
                </div>
            </div>

            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            realistically they are just like you and me
                        </p>
                    </div>
                </div>
            </div>

            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            flaws and everything
                        </p>
                    </div>
                </div>
            </div>

            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            as well as your own quirks, specialities and traits
                            <br></br>
                            that make you
                        </p>
                    </div>
                </div>
            </div>

            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            YOU
                        </p>
                    </div>
                </div>
            </div> */}

            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            We encourage you to leave something behind on this collab wall.
                            <br></br>
                            This may be a message, words of inspiration or something
                            completely random.<br></br>All messages placed will be curated in
                            a final collaboration wall at the end of the exhibit.<br></br>Scan
                            the QR code and write away!
                        </p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Link style={buttonStyle} to="/Input">Leave a message here!</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Default;
