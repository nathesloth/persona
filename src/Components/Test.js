import "../App.css";
import "../index.css";
import "../home.css";
import React, { useState, useEffect } from "react";
import Rellax from 'rellax';
import { Link } from "react-router-dom";


const Test = (props) => {

    useEffect(() => {
        var rellax = new Rellax('.rellax2', { horizontal: true, vertical: true });
    }, [])

    return (
        <div>
            <div class="containerA rellax2" data-rellax-speed="8" id="containerA">
            </div>
        </div>
    );
};

export default Test;
