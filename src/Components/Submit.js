import "../App.css";
import "../index.css";
import "../home.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Submit = (props) => {
    return (
        <div className="Wall">
            <div className="container containerD unselectable" data-rellax-speed="0.2">
                <div className="row">
                    <div className="col-12">
                        <h1>Submitted!<br></br>Thanks for <br></br>leaving your mark</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Submit;
