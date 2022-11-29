import "../App.css";
import "../index.css";
import "../home.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const buttonStyle = {
    textDecoration: "none",
    color: "black",
    padding: "20px 20px",
    border: "none",
    backgroundColor: "white",
    borderRadius: "10px",
};

const NotSubmit = (props) => {
    return (
        <div className="Wall">
            <div className="container containerE unselectable" data-rellax-speed="0.2">
                <div className="row">
                    <div className="col-12">
                        <h1>Submission failed due to inappropriate words.<br></br>Please try again</h1>
                        <Link style={buttonStyle} to="/Input">Create a new submission</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotSubmit;
