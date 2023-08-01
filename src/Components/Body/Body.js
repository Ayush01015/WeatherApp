import React, { useEffect, useState } from "react";
import {url,options} from "../../Constants/Api.js"
import Locator from "../Locator/Locator.js";
import Card from "../Card/Card.js";
// ent.json?q=53.1%2C-0.13'; 
import "./Body.css"
const Body = () => {
  const [data,setData] = useState([]);
  const [latitude,setLatitude] = useState(27.157340169427442);
  const [longitude,setLongitude] = useState(78.40287067267217);
  
  async function getData(){
    const data = await fetch(`${url}q=${latitude}%2C${longitude}`,options);
    const json = await data.json(); //converting to json
    setData(json);
    console.log("DATA::",json);
    console.log("URL::",`${url}q=${latitude}%2C${longitude}`);
  }

  useEffect(()=>{
    getData();
  },[latitude,longitude])

  return (
    <div className="body">
      <p className="heading">Weather Forecast</p>
      <Locator
          latitude={latitude}
          setLatitude={setLatitude}
          longitude={longitude}
          setLongitude={setLongitude}
        />
      <Card {...data}/>
    </div>
  );
};

export default Body;
