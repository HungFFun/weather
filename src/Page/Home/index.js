import { Card, Col, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import "./style.scss";
import {
  findNameCity,
  getWeather,
  searchCity,
} from "../../store/actions/weatherActions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { formatDate } from "../../controller";
import WeatherDetail from "../WeatherDetail";
const Index = () => {
  const { Option } = Select;

  const dispatch = useDispatch();
  const [optionNameCity, setOptionNameCity] = useState([]);
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

  const onSearch = async (value) => {
    if (value !== null) {
      const listName = await findNameCity(value);
      await setOptionNameCity(listName);
    }
  };

  const optionSelect = optionNameCity?.map((item, index) => {
    return (
      <Option value={item.title} key={index}>
        {item.title}
      </Option>
    );
  });

  const onChange = (value) => {
    dispatch(searchCity(value));
  };

  return (
    <div className="background-custom">
      <Row>
        <Col span={24} className="Col-search ">
          <Select
            showSearch
            style={{ width: 500 }}
            placeholder="Select a name city"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {optionSelect}
          </Select>
        </Col>
      </Row>
      <Row style={{ marginLeft: "15rem" }}>
        <Col span={5}>
          <Card className="col-weather" style={{ height: "243px" }}>
            <h2>{city.title}</h2>
            <p> {moment(Date.now()).format("LTS")}</p>
          </Card>
        </Col>
        {weatherFiveDay?.map((item, index) => {
          return (
            <Col span={3} key={index}>
              <WeatherDetail weatherDetail={item}></WeatherDetail>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Index;
