import React, { memo, useEffect, useRef } from "react";
import * as d3 from "d3";

const Trade = () => {

  const ref = useRef('')


  useEffect(() => {
    const divContent = d3.select(ref.current).append("svg").attr("width", 600)
    .attr("height", 400)
    .style("border", "1px solid black")

    divContent.selectAll("rect")
    .data([1,2,3,4,5]).enter()
         .append("rect")
         .attr('width', 40)
         .attr('height', (datapoint) => datapoint * 20)
         .attr("fill", "orange")
    console.log(ref)

  }, [ref])

  fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=TSLA&region=US", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      "x-rapidapi-key": "E3YEmAuxF5mshIu7U5SGXncdziaWp1yvknEjsn00H5Lky4QjE7"
    }
  })
  .then(res => res.json())
  .then(response => {
    for (let i = 0; i < response.prices.length; i++) {
      const el = response.prices[i];
      el.date = new Date(el.date * 1000).toUTCString()
    }

    for (let i = 0; i < response.prices.length; i++) {
      const avarage = response.prices[i];
      avarage.avarage = (avarage.open + avarage.close) / 2
    }
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });

  return (<div ref={ref} className="charts">Trades</div>);
};


export default memo(Trade)