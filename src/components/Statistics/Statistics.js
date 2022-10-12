import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  YAxis,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const statisticsData = useLoaderData();
  const data = statisticsData.data;
  return (
    <section className="container d-lg-flex">
      <div className="my-3">
        <h3 className="highlight">SimpleLineChart of Total</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="total" stroke="#7c4dff" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="my-3">
        <h3 className="highlight">SimpleBarChart of Total</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Statistics;
