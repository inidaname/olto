import React, { memo } from "react";
import { useFetch, useChart } from "hooks";
import "./trade.css";
import { TradeChart, SymbolProfile, Button } from "components";

const Trade = () => {
  const { err, data, isLoading } = useFetch(
    "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=TSLA&region=US"
  );

  const { monthData, daysData, monthOptions, dayOptions } = useChart(data?.prices);
  return (
    <div className="trades">
      {isLoading && <p>Data is loading</p>}
      {err && <p>{err.message}</p>}
      {data && (
        <section className="charts">
          <TradeChart data={monthData} options={monthOptions} />
          <TradeChart data={daysData} options={dayOptions} />
        </section>
      )}

      <SymbolProfile />

      <section>
        <Button value="Statistic Odd" />
      </section>
    </div>
  );
};

export default memo(Trade);
