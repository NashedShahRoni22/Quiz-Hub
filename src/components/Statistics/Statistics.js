import React from "react";
import { LineChart, Line, XAxis, Tooltip, YAxis, Bar, BarChart, CartesianGrid, Legend } from "recharts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const statisticsData = useLoaderData();
  const data = statisticsData.data;
  return (
    <section className="container">
      <div className="my-3">
        <h3 className="highlight">SimpleLineChart of Total</h3>
        <div className="my-5">
          <LineChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="total" stroke="#7c4dff" />
          </LineChart>
        </div>
      </div>

      <div className="my-3">
        <h3 className="highlight">SimpleBarChart of Total</h3>
        <div className="my-5">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
