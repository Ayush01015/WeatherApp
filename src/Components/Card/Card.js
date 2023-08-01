import { Log } from "victory";
import "./Card.css"

const Card = ({location,current}) =>{
    // if (!location || !current) {
    //     return <div>Loading...</div>; // You can show a loading state or an error message here.
    // }
    // const {name,region,country,lat,lon,tz_id,localtime_epoch,localtime} = location;
    // const {temp_c,temp_f,condition,wind_kph,wind_degree,humidity,cloud,feelslike_c,feelslike_f,vis_km} = current;
    return(
        <div className="component">
            <div className="card">
                {/* <p>{name}</p>
                <img src={condition.icon} alt={condition.text}/>
                <p>{region}</p>
                <p>{country}</p>
                <p>{temp_c}C</p>
                <p>{wind_kph}Kph</p>
                <p>{wind_degree}degree</p>
                <p>{humidity}</p>
                <p>{feelslike_c}</p> */}
                <div>
                    <p>Current Weather</p>
                    <p>9:15pm</p>
                </div>
                <p>Boston</p>
                <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt=""/>
                <p>Lincolnshire</p>
                <p>United Kingdom</p>
                <p>19C</p>
                <p>16.9Kph</p>
                <p>260degree</p>
                <p>68</p>
                <p>19</p>
            </div>
        </div>
    )
}

export default Card;