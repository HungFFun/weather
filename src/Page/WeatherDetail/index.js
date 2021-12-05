import React from "react";
import "./style.scss";
import { formatDate } from "../../controller/index";
import { Card, Image } from "antd";
import {
  SNOW,
  SLEET,
  HAIL,
  THUNDERSTORM,
  HEAVY_RAIN,
  LIGHT_RAIN,
  SHOWERS,
  HEAVY_CLOUD,
  LIGHT_CLOUD,
  CLEAR,
} from "../../components/WeatherStates";
const Index = ({ weatherDetail }) => {
  const customDay = () => {
    if (
      formatDate(new Date(), 0) === formatDate(weatherDetail.applicable_date, 0)
    ) {
      return <p className="title-card">ToDay</p>;
    } else {
      return <p className="title-card">{weatherDetail.applicable_date}</p>;
    }
  };
  const iconWeather = () => {
    let icon;
    switch (weatherDetail.weather_state_name) {
      case "Snow":
        icon = SNOW;
        break;
      case "Sleet":
        icon = SLEET;
        break;
      case "Hail":
        icon = HAIL;
        break;
      case "Thunderstorm":
        icon = THUNDERSTORM;
        break;
      case "Heavy Rain":
        icon = HEAVY_RAIN;
        break;
      case "Light Rain":
        icon = LIGHT_RAIN;
        break;
      case "Showers":
        icon = SHOWERS;
        break;
      case "Heavy Cloud":
        icon = HEAVY_CLOUD;
        break;
      case "Light Cloud":
        icon = LIGHT_CLOUD;
        break;
      case "Clear":
        icon = CLEAR;
        break;
      default:
        icon = null;
    }
    return icon;
  };
  return (
    <div>
      <Card className={"card-weather"}>
        <span>{customDay()}</span>
        <Image width={40} src={iconWeather()} />
        <p>{weatherDetail.weather_state_name}</p>
        <p>
          <span>MAX: </span>
          {Number(weatherDetail.max_temp).toFixed(2)}°C
        </p>
        <p>
          <span>MIN: </span>
          {Number(weatherDetail.min_temp).toFixed(2)}°C
        </p>
      </Card>
    </div>
  );
};

export default Index;
