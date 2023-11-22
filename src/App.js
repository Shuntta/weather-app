
import React from "react";
import api from "./components/api/apikey"

function App() {

  const dateBuilder = (data) => {
    let months = [
      "January", 
      "February", 
      "March", 
      "April", 
      "May", 
      "June", 
      "July", 
      "August", 
      "September", 
      "October", 
      "November", 
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"  
    ];
    
    let day = days[data.getDay()];
    let date = data.getDate();
    let month = months[data.getMonth()];
    let year = data.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <div className="app">
      <main>
        <div className="search-box"> 
        <input type="text"
        className="search-bar"
        placeholder="Search..."
        />
      </div>
      <div className="location-box">
        <div className="location">Lisbon, Portugal</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className="temp">
          15º C
        </div>
        <div className="weather">Sunny Day</div>
      </div>
      </main> 
    </div>
  );
}

export default App;