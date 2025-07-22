import React from "react";
import Ribbon from "./components/Ribbon.jsx";
import Nav from "./components/Nav.jsx";
import Display from "./components/Display.jsx";
import Canvas from "./components/Canvas.jsx";
import { useState, useEffect } from "react";
import Compose from "./components/Compose.jsx";
import axios from "axios";

export default function App() {
  const [state, setState] = useState(1);
  const [starredState, setStarredState] = useState(false);
  const [createMsg, setCreateMsg] = useState(false);
  const handleClick = (index) => {
    setState((prevState) => index);
  };
  const createDialog = (curState) => {
    setCreateMsg((prevState) => curState);
  };
  // const submitMsg = (formObject) => {
  //   console.log(formObject)

  //   setCreateMsg(prevState => false)
  // }

  const submitMsg = async (formObject) => {
    console.log(formObject);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/",
        formObject
      );
      console.log("Response Status : ", response.status);
      console.log("Response Data : ", response.data);
    } catch (error) {
      console.error("There was an error !", error.response.data);
    }
    setCreateMsg((prevState) => false);
  };

  function starredFunc() {
    setStarredState((prevState) => !prevState);
  }

  return (
    <div className="home">
      <div className={`${createMsg ? "dimmed" : ""}`}>
        <Ribbon newMessage={createDialog} />
        <div className="main-canvas">
          <Nav active={state} handleClick={handleClick} />
          <Display active={state} />
          <Canvas
            active={state}
            starState={starredState}
            handleStarred={starredFunc}
          />
        </div>
      </div>
      {createMsg && (
        <Compose composeClose={createDialog} submitFunc={submitMsg} />
      )}
    </div>
  );
}
