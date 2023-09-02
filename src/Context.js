import React, { useState } from "react";
import "./Content.css";
import ReactECharts from "echarts-for-react";

const Context = () => {
  const initialData = [
    { value: 9000000000, name: "Instagram" },
    { value: 1000000000, name: "Facebook" },
    { value: 5000000000, name: "Twitter" },
    { value: 2000000000, name: "Youtube" },
    { value: 3000000000, name: "Telegram" },
  ];

  const [data, setData] = useState(initialData);
  const [newDataName, setNewDataName] = useState("");
  const [newDataValue, setNewDataValue] = useState("");

  const addDataPoint = () => {
    if (newDataName && newDataValue) {
      const newDataPoint = {
        name: newDataName,
        value: parseInt(newDataValue),
      };
      setData([...data, newDataPoint]);
      setNewDataName("");
      setNewDataValue("");
    }
  };
  const option = {
    title: {
      text: "Social Media Users",
      subtext: "User Data",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <>
      <h1>Social Media Users</h1>
      <ReactECharts option={option} style={{ height: "500px" }} />
      <div className="form">
        <label htmlFor="name" className="form-control">
          <b>Name:&nbsp;</b>
        </label>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={newDataName}
          onChange={(e) => setNewDataName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="value" className="form-control">
          <b>Value:&nbsp;</b>
        </label>
        <input
          type="number"
          placeholder="Enter value"
          name="value"
          value={newDataValue}
          onChange={(e) => setNewDataValue(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" onClick={addDataPoint}>
          Add
        </button>
      </div>
    </>
  );
};

export default Context;
