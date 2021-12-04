import { Col, Row, Input } from "antd";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { getWeather, searchCity } from "../../store/actions/weatherActions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { formatDate } from "../../controller";
import WeatherDetail from "../WeatherDetail";
const Index = () => {
  const { Search } = Input;

  const dispatch = useDispatch();
  const [nameCity, setNameCity] = useState("");
  const [weatherFiveDay, setWeatherFiveDay] = useState();
  const { city } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(searchCity("ho chi minh"));
  }, [dispatch]);

  useEffect(() => {
    async function getDataWeather() {
      if (city.woeid && city.woeid !== undefined) {
        const promises = [];
        let currentDay = new Date();
        for (let i = 0; i < 5; i++) {
          const newPromise = onGetWeather(
            city.woeid,
            formatDate(currentDay, i)
          );
          promises.push(newPromise);
        }
        const data = await Promise.all(promises);
        setWeatherFiveDay(data);
      }
    }
    getDataWeather();
  }, [city]);

  const onGetWeather = async (woeid, day) => {
    const data = await getWeather(woeid, day);
    return data;
  };

  const textInput = (event) => {
    setNameCity(event.target.value);
  };

  const onSearch = (value) => {
    dispatch(searchCity(nameCity));
  };

  return (
    <div className="background-custom">
      <Row>
        <Col span={24} className="Col-search ">
          <Search
            placeholder="input name city"
            onSearch={onSearch}
            value={nameCity}
            onChange={textInput}
            style={{ width: 500 }}
          />
        </Col>
      </Row>
      <Row style={{ marginLeft: "100px", marginRight: "100px" }}>
        <Col className="col-weather" span={3}>
          <h2>{city.title}</h2>
          <p> {moment(Date.now()).format("LTS")}</p>
        </Col>
        {weatherFiveDay?.map((item, index) => {
          return (
            <Col className="col-weather" span={4}>
              <WeatherDetail weatherDetail={item} key={index}></WeatherDetail>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Index;
