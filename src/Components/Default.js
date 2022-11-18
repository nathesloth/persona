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
        var rellax3 = new Rellax('.rellax3', { vertical: true });

    }, [])



    return (
        <div className="Home" id="Home">
            <div className="containerDefault rellax2" data-rellax-speed="8" id="containerA">
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
                            <b>PERSONA</b> <br></br>
                            the aspect of someone's character that is presented to or perceived by others
                        </p>
                    </div>
                </div>
            </div>

            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            "Social media has changed the way we live our lives. From the way we get our news to the way we interact with our loved ones. Social media is everywhere. It’s unavoidable, it’s powerful, and it’s here to stay. "
                            <br></br>
                            Maryan Mohsin
                        </p>
                    </div>
                </div>
            </div>


            <div className="rellax3 unselectable" data-rellax-speed="7" >
                <img className="rellax3 phone" data-rellax-speed="4" src="https://i.imgur.com/B6Gt4AC.png" width={200} />
            </div>

            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            The average teenager spends over 18 Hours online a week.
                        </p>
                    </div>
                </div>
            </div>

            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            Research also suggests that the amount of time spent on these social media platforms has an immense impact on mental health, body image issues, self harm and disordered eating, in children and teens.
                        </p>
                    </div>
                </div>
            </div>

            <div className="rellax3 unselectable" data-rellax-speed="7" >
                <img className="rellax3 time" data-rellax-speed="8" src="https://i.imgur.com/ZkfOweW.png" width={300} />
            </div>

            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            By seeing perfect individuals and the amazing lives of others, we may therefore sometimes feel we need to present a version of ourselves that isn't entirely authentic.
                        </p>
                    </div>
                </div>
            </div>

            <div className="rellax3 unselectable" data-rellax-speed="7" >
                <img className="rellax3 face" data-rellax-speed="-5" src="https://i.imgur.com/SMHaUKp.png" width={200} />
            </div>


            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            You may call it a facade or mask that we use to hide our true selves.
                        </p>
                    </div>
                </div>
            </div>

            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            PERSONA was designed to create a space for onlookers and viewers to share thoughts anonymously that may be too vulnerable to say aloud.
                        </p>
                    </div>
                </div>
            </div>

            <div className="rellax3 unselectable" data-rellax-speed="7" >
                <img className="rellax3" data-rellax-speed="4" src="https://i.imgur.com/deS49jo.png" width={100} />
            </div>

            <div className="home container unselectable">
                <div className="row">
                    <div className="col-12">
                        <p>
                            We encourage you to leave something behind on this collab wall.
                            <br></br>
                            These messages are anonymous, but we believe that any thoughts, words and stories can help others.
                        </p>
                        <br></br>
                        <br></br>
                        <p>Press here</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Link style={buttonStyle} to="/Input">Leave a message here!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Default;
