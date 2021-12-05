import React from "react";

const Index = ({ weatherDetail }) => {
  return (
    <div>
      <p>Ngay</p>
      <p>{weatherDetail.applicable_date}</p>
      <p>Nhiệt độ tối đa</p>
      <p>{weatherDetail.max_temp}</p>
      <p>Nhiệt độ tối đa</p>
      <p>{weatherDetail.max_temp}</p>
      <p>Nhiệt độ tối thiểu</p>
      <p>{weatherDetail.min_temp}</p>
    </div>
  );
};

export default Index;
