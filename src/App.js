import './App.css';
import jeremyLogo from './images/image-jeremy.png';
import ellipsis from './images/icon-ellipsis.svg';
import data from './data.json';
import { useState } from 'react';

function App() {

  const [timeFrame, setTimeFrame] = useState("weekly");
  const [previousFrame, setPreviousFrame] = useState("Last Week");

  const setDisplay = (e) => {
    switch (e.target.id) {
      case "daily":
        setTimeFrame("daily");
        setPreviousFrame("Yesterday");
        break;
      case "weekly":
        setTimeFrame("weekly");
        setPreviousFrame("Last Week");
        break;
      case "monthly":
        setTimeFrame("monthly");
        setPreviousFrame("Last Month");
        break;
      default:
        // Do nothing
    }
  };

  return (
    <main>
      <div id="backdrop">
        <div id="container">
          <div id="intro">
            <div id="top-intro">
              <img src={jeremyLogo} alt="avatar" id="avatar"></img>
              <h1 id="intro-description">Report for <span className="name">Jeremy Robson</span></h1>
            </div>
            <div id="bottom-intro">
              <p className={(timeFrame === "daily") ? "intro-time-selected" : "intro-time"} id="daily" onClick={setDisplay}>Daily</p>
              <p className={(timeFrame === "weekly") ? "intro-time-selected" : "intro-time"} id="weekly" onClick={setDisplay}>Weekly</p>
              <p className={(timeFrame === "monthly") ? "intro-time-selected" : "intro-time"} id="monthly" onClick={setDisplay}>Monthly</p>
            </div>
          </div>
          <div className="card" id="work-card">
            <div className="card-bg" id="work-bg"></div>
            <div className="card-backdrop">
              <div className="top-line">
                <p className="title">Work</p>
                <img src={ellipsis} className="ellipse" alt="dots"></img>
              </div>
              <div className="card-info">
                <p className="hours">{data[0].timeframes[timeFrame].current}hrs</p>
                <p className="previous">{previousFrame} - {data[0].timeframes[timeFrame].previous}hrs</p>
              </div>
            </div>
          </div>
          <div className="card" id="play-card">
            <div className="card-bg" id="play-bg"></div>
            <div className="card-backdrop">
              <div className="top-line">
                <p className="title">Play</p>
                <img src={ellipsis} className="ellipse" alt="dots"></img>
              </div>
              <div className="card-info">
                <p className="hours">{data[1].timeframes[timeFrame].current}hrs</p>
                <p className="previous">{previousFrame} - {data[1].timeframes[timeFrame].previous}hrs</p>
              </div>
            </div>
          </div>
          <div className="card" id="study-card">
            <div className="card-bg" id="study-bg"></div>
            <div className="card-backdrop">
              <div className="top-line">
                <p className="title">Study</p>
                <img src={ellipsis} className="ellipse" alt="dots"></img>
              </div>
              <div className="card-info">
                <p className="hours">{data[2].timeframes[timeFrame].current}hrs</p>
                <p className="previous">{previousFrame} - {data[2].timeframes[timeFrame].previous}hrs</p>
              </div>
            </div>
          </div>
          <div className="card" id="exercise-card">
            <div className="card-bg" id="exercise-bg"></div>
            <div className="card-backdrop">
              <div className="top-line">
                <p className="title">Exercise</p>
                <img src={ellipsis} className="ellipse" alt="dots"></img>
              </div>
              <div className="card-info">
                <p className="hours">{data[3].timeframes[timeFrame].current}hrs</p>
                <p className="previous">{previousFrame} - {data[3].timeframes[timeFrame].previous}hrs</p>
              </div>
            </div>
          </div>
          <div className="card" id="social-card">
            <div className="card-bg" id="social-bg"></div>
            <div className="card-backdrop">
              <div className="top-line">
                <p className="title">Social</p>
                <img src={ellipsis} className="ellipse" alt="dots"></img>
              </div>
              <div className="card-info">
                <p className="hours">{data[4].timeframes[timeFrame].current}hrs</p>
                <p className="previous">{previousFrame} - {data[4].timeframes[timeFrame].previous}hrs</p>
              </div>
            </div>
          </div>
          <div className="card" id="self-care-card">
            <div className="card-bg" id="self-care-bg"></div>
            <div className="card-backdrop">
              <div className="top-line">
                <p className="title">Self Care</p>
                <img src={ellipsis} className="ellipse" alt="dots"></img>
              </div>
              <div className="card-info">
                <p className="hours">{data[5].timeframes[timeFrame].current}hrs</p>
                <p className="previous">{previousFrame} - {data[5].timeframes[timeFrame].previous}hrs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
