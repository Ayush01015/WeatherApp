import React, { useEffect, useState } from "react";
import {url,options} from "../../Constants/Api.js"
import Locator from "../Locator/Locator.js";
// ent.json?q=53.1%2C-0.13';
const Body = () => {

  const [latitude,setLatitude] = useState(53.1);
  const [longitude,setLongitude] = useState(-0.13);
  
  async function getData(){
    const data = await fetch(`${url}q=${latitude}%2C${longitude}`,options);
    const json = await data.json(); //converting to json
    console.log(json);
    console.log(`${url}q=${latitude}%2C${longitude}`);
  }

  useEffect(()=>{
    getData();
  },[latitude,longitude])

  return (
    <>
      <h1>BODY</h1>
      <Locator
          latitude={latitude}
          setLatitude={setLatitude}
          longitude={longitude}
          setLongitude={setLongitude}
          // setLoc={setLoc}
        />
    </>
  );
};

export default Body;
