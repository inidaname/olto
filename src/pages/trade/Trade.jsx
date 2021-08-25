import React, { memo, useContext, useEffect, useState } from "react";
import { useFetch, useChart } from "hooks/";
import Chart from "react-apexcharts";

const Trade = ({ data }) => {
  const [chartData, setChartData] = useState([]);
  const [options, setOptions] = useState({});
  const [months, setMonths] = useState([]);
  const [average, setAverage] = useState([]);

  useEffect(() => {
    let dataseries = [];
    let today = Date.now()
    console.log(today)
    if (data)
      for (let i = 0; i < data.length; i++) {
        const trades = data[i];
        const open = trades.open?.toFixed(2);
        const high = trades.high?.toFixed(2);
        const close = trades.close?.toFixed(2)
        const low = trades.low?.toFixed(2)
        dataseries.push({
          x: new Date(trades.date * 1000),
          y: [open, high, low, close],
        });
      }
    setOptions({
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "CandleStick Chart",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
      style: {
        colors: ['#F44336', '#E91E63', '#9C27B0']
     }
    });

    setChartData([
      {
        data: dataseries,
      },
    ]);

    return () => {};
  }, [data]);

  console.log(chartData.series);
  return (
    <Chart
      options={options}
      series={chartData}
      type="candlestick"
      height={350}
      width={675}
    />
  );
};

export default memo(Trade);
