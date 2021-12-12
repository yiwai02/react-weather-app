import React from "react";

export default function DateNow(props){
    let year = props.date.getFullYear();
    let dates = props.date.getDate();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]; 
    let month = months[props.date.getMonth()];

    return(
        <div>
        <li className="currentDate"> {day}, {month} {dates}, {year}</li>
        </div>
    );
}