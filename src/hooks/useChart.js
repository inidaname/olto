import { useEffect, useState } from 'react';

const useChart = (data) => {
  const [ monthData, setMonthData ] = useState([]);
  const [ daysData, setDaysData ] = useState([]);
  const [ monthOptions, setMonthOptions ] = useState({ });
  const [ dayOptions, setDayOptions ] = useState({ });

  useEffect(() => {
    let dataseries = [];
    let dataDaily = [];
    let today = new Date();
    const lastDays = new Date().setDate(today.getDate() - 3);
    const monthsBack = new Date().setMonth(today.getMonth() - 3); // to get 3 months ago
    if (data)
      for (let i = 0; i < data.length; i++) {
        const trades = data[ i ];

        const open = trades.open?.toFixed(2);
        const high = trades.high?.toFixed(2);
        const close = trades.close?.toFixed(2);
        const low = trades.low?.toFixed(2);
        if (monthsBack < trades.date * 1000) {
          dataseries.push({
            x: new Date(trades.date * 1000).toLocaleDateString("en-us", {
              month: "short",
              day: "2-digit",
            }),
            y: [ open, high, low, close ],
          });
        }

        if (lastDays < trades.date * 1000) {
          dataDaily.push({
            x: new Date(trades.date * 1000).toLocaleDateString("en-us", {
              month: "short",
              day: "2-digit",
            }),
            y: [ open, high, low, close ],
          });
        }
      }
    setMonthOptions({
      chart: {
        type: "candlestick",
        height: 350,
        toolbar: false,
      },
      title: {
        text: "Tesla (TSLA), last 3 months",
        align: "center",
      },
      xaxis: {
        type: "datetime",

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
        colors: [ "#F44336", "#E91E63", "#9C27B0" ],
      },
    });

    setDayOptions({
      chart: {
        type: "candlestick",
        height: 350,
        toolbar: false,
      },
      title: {
        text: "Tesla (TSLA), last 3 Days",
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
        colors: [ "#F44336", "#E91E63", "#9C27B0" ],
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

    return () => { };
  }, [ data ]);

  return { monthData, daysData, monthOptions, dayOptions }

}

export default useChart