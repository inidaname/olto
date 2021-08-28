import React, { memo, useEffect, useState } from "react";
import "./trade.css";
import Chart from "react-apexcharts";

const Trade = ({ data }) => {
  const [monthData, setMonthData] = useState([]);
  const [daysData, setDaysData] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    let dataseries = [];
    let dataDaily = [];
    let today = new Date();
    const lastDays = new Date().setDate(today.getDate() - 3);
    const monthsBack = new Date().setMonth(today.getMonth() - 3); // to get 3 months ago
    let titleText = ''
    if (data)
      for (let i = 0; i < data.length; i++) {
        const trades = data[i];

        const open = trades.open?.toFixed(2);
        const high = trades.high?.toFixed(2);
        const close = trades.close?.toFixed(2);
        const low = trades.low?.toFixed(2);
        if (monthsBack < trades.date * 1000) {
          titleText = "Tesla (TSLA), last 3 months"
          dataseries.push({
            x: new Date(trades.date * 1000).toLocaleDateString("en-us", {
              month: "short",
              day: "2-digit",
            }),
            y: [open, high, low, close],
          });
        }

        if (lastDays < trades.date * 1000) {
          titleText = "Tesla (TSLA), last 3 days"
          dataDaily.push({
            x: new Date(trades.date * 1000).toLocaleDateString("en-us", {
              month: "short",
              day: "2-digit",
            }),
            y: [open, high, low, close],
          });
        }
      }
    setOptions({
      chart: {
        type: "candlestick",
        height: 350,
        toolbar: false,
      },
      title: {
        text: titleText,
        align: "center",
      },
      xaxis: {
        type: "datetime",
        tickAmount: 6,
        opposite: true,
        labels: {
          format: 'dd/MM',
        },
      },
      yaxis: {
        title: {
          text: 'Price',
        },
        opposite: true,
        tooltip: {
          enabled: true,
        },
      },
      legend: {
        show: true,
        position: 'right'
      },
      style: {
        colors: ["#F44336", "#E91E63", "#9C27B0"],
      },
    });

    setMonthData([
      {
        data: dataseries,
      },
    ]);

    setDaysData([
      {
        data: dataDaily,
      },
    ]);

    return () => {};
  }, [data]);
  console.log();

  return (
    <div className="trades">
      <Chart
        options={options}
        series={monthData}
        type="candlestick"
        height={350}
        width={400}
      />
      <Chart
        options={options}
        series={daysData}
        type="candlestick"
        height={350}
        width={400}
      />
    </div>
  );
};

export default memo(Trade);
