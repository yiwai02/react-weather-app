import React, {useState} from "react";
import axios from "axios";

import './Temperature.css'

export default function Temperature(props){
    const [unit, setUnit] = useState("celsius");
    
    function convertToFahr(event){
        event.preventDefault();
        setUnit("fahr");
    }

    function convertToCel(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrTemp(){
        return (props.celsius * 9) / 5 + 32;
    }
        if (unit === "celsius") {
            return(
        <div>
       <span className="currentTemp">{Math.round(props.celsius)}</span>
       <span className="tempId">
             <b>°C</b> {" "}| <a href="" onClick={convertToFahr}>°F</a>
        </span>
    </div>
    );
    }else{
        return (
        <div>
       <span className="currentTemp">{Math.round(fahrTemp())}</span>
       <span className="tempId">
              <a href="" onClick={convertToCel}>°C</a>|{" "}<b>°F</b>
        </span>
    </div>
    );
}}