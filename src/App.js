import React, { useState } from "react";
import "./App.css";
// import Images from "./Images";

export default function App() {
  let image = ["https://images.unsplash.com/photo-1558982723-8633d4790633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1570518937759-55339ce11dda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1715&q=80"]

  let [activeIndex, setActiveIndex] = useState(0);

  function back() {
    let index = activeIndex;
    let length = image.length;
    if (index < 1) {
      index = length - 1;
    } else {
      index--;
    }
    setActiveIndex(index);
  }

  function forward() {
    let index = activeIndex;
    let length = image.length
    if (index === length - 1) {
      index = 0
    } else {
      index++
    }
    setActiveIndex(index)
  }

  let interval;

  function stop() {
    clearInterval(interval)
  }

  function autoForward() {
    stop()
    interval = setInterval(forward, 1000)
  }

  function autoBackward() {
    stop()
    interval = setInterval(back, 1000)
  }


  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <div className="imageContainer">
        <img
          src={image[activeIndex]}
          alt="photos"
        />

      </div>

      <button onClick={back}>back</button>
      <button onClick={forward}>forward</button>
      <button onClick={autoForward}>autoforward</button>
      <button onClick={autoBackward}>autoBackward</button>
      <button onClick={stop}>stop</button>
    </div>
  );
}

//create a component for images

//https://reactjs.org/docs/handling-events.html
// https://medium.com/@caittpayne/create-a-carousel-in-react-js-fc5d75e3b46b
