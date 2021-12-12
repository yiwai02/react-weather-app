import React from "react";

export default function TimeNow(props){
    let minutes = props.time.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let hours = props.time.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    return(
        <div>
        <li className="currentDate"> {hours}:{minutes}</li>
        </div>
    );
}