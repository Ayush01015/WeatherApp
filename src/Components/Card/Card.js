import { Log } from "victory";
import "./Card.css";
import ShimmerCard from "../Shimmer/ShimmerCard";
import Clock from "../Clock/Clock";


const Card = ({ location, current }) => {
  if (!location || !current) {
      return <ShimmerCard/>;
  }
  const {name,region,country,lat,lon,tz_id,localtime_epoch,localtime} = location;
  const {temp_c,temp_f,condition,wind_kph,wind_degree,humidity,cloud,feelslike_c,feelslike_f,vis_km} = current;
  return (
    <div className="component">
      <div className="card">
        <div className="card-header-container">
          <div className="card-header">
            <p>Current Weather</p>
            <p><Clock/></p>
          </div>
          <hr className="hr" />
        </div>
        <div className="weather-details">
          <div className="sec-1">
            <p className="cnt-name">{name}</p>
            <img src={condition.icon} alt={condition.text}/>
          </div>
          <div className="sec-2">
            <div className="sub-sec-1">
              <div className="detail-box">
                <p>Country</p>
                <p>{country}</p>
              </div>
              <hr className="hr-2" />
              <div className="detail-box">
                <p>Region</p>
                <p>{region}</p>
              </div>
              <hr className="hr-2" />
              <div className="detail-box">
                <p>Temperature</p>
                <p>{temp_c}&#176;C</p>
              </div>
              <hr className="hr-2" />
              <div className="detail-box">
                <p>Wind Speed</p>
                <p>{wind_kph}Kph</p>
              </div>
              <hr className="hr-2" />
            </div>
            <div className="sub-sec-2">
              <div className="detail-box">
                <p>Wind Degree</p>
                <p>{wind_degree}&#176;</p>
              </div>
              <hr className="hr-2" />
              <div className="detail-box">
                <p>humidity</p>
                <p>{humidity}</p>
              </div>
              <hr className="hr-2" />
              <div className="detail-box">
                <p>Feels Like</p>
                <p>{feelslike_c}&#176;</p>
              </div>
              <hr className="hr-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
