import React, { useEffect, useState, useContext } from "react";
import { url, options } from "../../Constants/Api.js";
import Locator from "../Locator/Locator.js";
import Card from "../Card/Card.js";
import WeatherSwitch from "../WeatherSwitch/WeatherSwitch.js";
import Login from "../Login/Login.js";
import Profile from "../Profile/Profile.js";
import "./Body.css";
import UserContext from "../../context/UserContext.js";

const Body = () => {
  const [data, setData] = useState([]);
  //default latitude
  const [latitude, setLatitude] = useState(27.157340169427442);
  //default longitude
  const [longitude, setLongitude] = useState(78.40287067267217);

  async function getData() {
    const data = await fetch(`${url}q=${latitude}%2C${longitude}`, options);
    const json = await data.json(); //converting to json
    setData(json);
  }

  useEffect(() => {
    getData(); //calling when lat and lon changes
  }, [latitude, longitude]);

  const { user } = useContext(UserContext);
  if (!user) {
    return (
      <div>
        <Login />
      </div>
    );
  }
  return (
    <>
      <div className="body">
        <p className="heading">Weather Forecast</p>
        <WeatherSwitch />
        <Locator
          latitude={latitude}
          setLatitude={setLatitude}
          longitude={longitude}
          setLongitude={setLongitude}
        />
        {/* passing props with spread operator */}
        <Profile />
        <Card {...data} />
      </div>
    </>
  );
};

export default Body;
