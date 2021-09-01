import React, { memo, useContext } from "react";
import { useFetch, useChart } from "hooks";
import "./trade.css";
import { TradeChart, SymbolProfile, Button } from "components";
import AppContext from "context/store";

const Trade = () => {
  const { err, data, isLoading } = useFetch(
    "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=TSLA&region=US"
  );

  const { modalState } = useContext(AppContext);

  const { monthData, daysData, monthOptions, dayOptions } = useChart(
    data?.prices
  );

  const clickEvent = (event, action) => {
    event.preventDefault();
    if (action === "link") {
      window.open("https://www.etoro.com/markets/tsla", "_blank");
    }

    if (action === "modal") {
      modalState.setModal({...modalState.modal, state: 'content' })
    }
  };
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

      <section className="btn-groups">
        <Button
          value="Statistical Odd"
          clickEvent={clickEvent}
          action="modal"
        />
        <Button value="Trade on eToro" clickEvent={clickEvent} action="link" />
      </section>
    </div>
  );
};

export default memo(Trade);
