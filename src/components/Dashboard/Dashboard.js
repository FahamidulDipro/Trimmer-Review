import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div
      className="container d-flex justify-content-between flex-lg-row flex-md-row flex-sm-column flex-column"
      style={{ marginTop: "100px" }}
    >
      <section>
        <h3 className="text-start text-success fw-bold ml-5 my-5">
          Month wise sell
        </h3>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line
            type="monotone"
            dataKey="sell"
            stroke="#317773"
            activeDot={{ r: 8 }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Legend></Legend>
          <Tooltip />
        </LineChart>
      </section>
      <section>
        <h3 className="text-start text-success fw-bold ml-5 my-5">
          Investment vs Revenue
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <div>
            <AreaChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="investment"
                stackId="1"
                stroke="  #E2D1F9"
                fill=" #E2D1F9"
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stackId="1"
                stroke="#317773"
                fill="#317773"
              />
            </AreaChart>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default Dashboard;
