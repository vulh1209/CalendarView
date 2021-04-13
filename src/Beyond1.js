import "./App.css";
import React, { useState, useEffect } from "react";


function Beyond1() {
  const svglogo =
    "https://drive.google.com/uc?export=view&id=1oLABfEZbyuvIjQh5COAs6wWdhn9N5hpw";

  const [Clock, setClock] = useState({
    date: new Date().toDateString(),
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
  });
  const [currentEvent, setcurrentEvent] = useState({
    currentEvent: {
      subject: "",
      booker: "",
      start: "",
      end: "",
    },
  });

  const [nextEvent1, setnextEvent1] = useState({
    nextEvent1: {
      subject: "",
      booker: "",
      start: "",
      end: "",
    },
  });

  const [nextEvent2, setnextEvent2] = useState({
    nextEvent2: {
      subject: "",
      booker: "",
      start: "",
      end: "",
    },
  });
  //https://infinite-dawn-43790.herokuapp.com/

  const getData = async (roomname) => {
    const res = await fetch(`http://localhost:8080/${roomname}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return res.json();
  };

  const setOClock = () => {
    setClock({
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    });
    console.log(currentEvent);
    console.log(Clock);
  };

  const setEvents = async (roomname) => {
    const result = await getData(roomname);
    setcurrentEvent(result.currentEvent);
    setnextEvent1(result.nextEvent1);
    setnextEvent2(result.nextEvent2);
    setOClock();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEvents("beyond1");
    }, 60000);
    return () => clearInterval(interval);
  });

  let nowhtml, next1html, next2html;
  if (currentEvent.booker === undefined) {
    nowhtml = (
      <div className="midColumn">
        <img src={svglogo} className="logo" alt="logo"></img>
        <u>
          <p>BEYOND 1</p>
        </u>
        <h1>NOW</h1>
        <h5>AVAIABLE</h5>
      </div>
    );
  } else {
    nowhtml = (
      <div className="midColumn">
        <img src={svglogo} className="logo" alt="logo"></img>
        <u>
          <p>BEYOND 1</p>
        </u>
        <h1>NOW</h1>
        <h2>{currentEvent.subject}</h2>
        <p>
          from {currentEvent.start} to {currentEvent.end}
        </p>
        <div>
          <h3>Booker:</h3>
          <h4>{currentEvent.booker}</h4>
        </div>
      </div>
    );
  }

  if (nextEvent1.booker === undefined) {
    next1html = (
      <div className="comming">
        <h1>AVAIABLE</h1>
      </div>
    );
  } else {
    next1html = (
      <div className="comming">
        <h2>{nextEvent1.subject}</h2>
        <p>
          from {nextEvent1.start} to {nextEvent1.end}
        </p>
        <div>
          <h3>Booker:</h3>
          <h4>{nextEvent1.booker}</h4>
        </div>
      </div>
    );
  }

  if (nextEvent2.booker === undefined) {
    next2html = (
      <div className="comming">
        <h1>AVAIABLE</h1>
      </div>
    );
  } else {
    next2html = (
      <div className="comming">
        <h2>{nextEvent2.subject}</h2>
        <p>
          from {nextEvent2.start} to {nextEvent2.end}
        </p>
        <div>
          <h3>Booker:</h3>
          <h4>{nextEvent2.booker}</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="leftColumn">
        <div className="clock">
          <h1>{Clock.time}</h1>
          <p>{Clock.date}</p>
        </div>
      </div>
      {nowhtml}
      <div className="rightColumn">
        <u>
          <p>UPCOMING</p>
        </u>
        {next1html}
        <hr></hr>
        {next2html}
      </div>
    </div>
  );
}

export default Beyond1;
