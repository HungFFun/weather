import { Col, Row, Input } from "antd";
import React from "react";
import "./style.scss";
import { searchCity } from "../../store/actions/weatherActions";
import { useDispatch } from "react-redux";

const Index = () => {
  const { Search } = Input;
  const dispatch = useDispatch();
  const onSearch = (value) => {
    dispatch(searchCity(value));
  };

  return (
    <div className="background-custom">
      <Row>
        <Col span={24} className="Col-search ">
          <Search
            placeholder="input name city"
            onSearch={onSearch}
            style={{ width: 500 }}
          />
        </Col>
      </Row>
      <Row style={{ marginLeft: "100px", marginRight: "100px" }}>
        <Col className="col-weather" span={4}>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </Col>
        <Col className="col-weather" span={4}>
          1
        </Col>
        <Col className="col-weather" span={4}>
          2
        </Col>
        <Col className="col-weather" span={4}>
          3
        </Col>
        <Col className="col-weather" span={4}>
          4
        </Col>
        <Col className="col-weather" span={4}>
          5
        </Col>
      </Row>
    </div>
  );
};

export default Index;
