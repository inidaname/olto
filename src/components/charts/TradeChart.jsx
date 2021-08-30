import { memo } from "react";
import Chart from "react-apexcharts";

const TradeChart = ({data, options}) => {

  return (
    <Chart
    options={options}
    series={data}
    type="candlestick"
    height={350}
    width={400}
  />
  )
}

export default memo(TradeChart)