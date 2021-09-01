import React from "react";
import { SymbolProfile } from "components";
import Emoji from "a11y-react-emoji";
import "./content.css";
import pngImage from "assets/3a1345a586f9e3a8eef35.png";
import signal from "assets/f2fb34a64086c1d440d0e.png";
import linear from "assets/45beaf0e9f6bf83e2b12d.png";
import graphImage from "assets/7d29ebf77d6fab2882aa0.png";
import tabularImage from "assets/b1b3c8250220ca762f847.png";
import tabular from "assets/df7e3e53fe4095b603710.png";
import linearGraph from "assets/8d5b85d9e4882549b873a.png";
import legende from "assets/d3462e83bd8b0414a66a9.png";
import Canva from "components/canva/Canva";

const Content = () => {
  return (
    <div className="showModal">
      <div className="content">
        <h1>Trading Signal for TSLA - Statistical Odds</h1>
        <small>OLTO Trading Mentor - July 29, 2021</small>
        <section>
          <h2>1. Signal</h2>
          <SymbolProfile />
          <Canva
            image={pngImage}
            caption="Left: TSLA chart for the last 3 months. The green dashed horizontal line is the optimal take profit for the signal, the red dashed line is the optimal stop loss for the signal. Right: TSLA chart for the last 3 days, on the basis of which the signal was formed."
          />
        </section>
        <section>
          <h2>2. What does "Exit from a narrowing range" signal mean?</h2>
          <p>
            Exit from a narrowing range: The range of the last candle is
            completely inside the range of the penultimate one and the price
            moves out of this range up or down.{" "}
          </p>
          <ul>
            <li>
              A signal for price movement upward occurs when the price breaks
              the high of the penultimate candlestick.
            </li>
            <li>
              A signal for price movement downward occurs when the price breaks
              the low of the penultimate candlestick.
            </li>
          </ul>
        </section>
        <section>
          <Canva
            image={signal}
            caption={`Left: "Exit from a narrowing range" pattern generates a Long signal. Right: "Exit from a narrowing range" pattern generates a Short signal
  `}
          />
          <h2>3. Statistical Odds for "Exit from a narrowing range" signal</h2>
          <h3>
            3.1. Search for the optimal maximum position holding period for TSLA
          </h3>
          <p>
            For the generated signal, we conducted an MFE/MAE test (see
            definition here) in order to understand the most advantageous
            position holding time (in days), if this signal is followed. The
            higher the values of the MFE/MAE curve of 1, the more chances of
            getting the greatest return in relation to risk for a given position
            holding time (in days).
          </p>

          <p>
            The maximum value of the MAE/MAE curve (see the figure below)
            corresponds to the duration of holding an open position for{" "}
            <span>6 days</span>.
          </p>
          <Canva
            image={linear}
            caption={`MAE/MFE curve for the "Exit from a narrowing range" signal for the TSLA instrument. If the ratio MFE/MAE > 1, then the entry point has an advantage and gives a better chance to enter a trade with less risk.`}
          />
          <h3>3.2. Probability of a positive signal outcome for TSLA</h3>
          <p>
            We found all the same signals in the period from 2010-07-06 to
            2021-07-22 (there were 164 of them) and calculated the probability
            of positive outcomes after 6 day(s) and other characteristics in
            case of following such signals.
          </p>
          <p>
            <Emoji symbol="🔄" label="Refresh" /> <strong>Total number of signals</strong>: 164
          </p>
          <p>
            <Emoji symbol="🎲" label="Refresh" /><strong> Probability of positive outcomes:</strong> 59.15%
          </p>
          <p>
            <Emoji symbol="📈" label="Linear" /><strong>Signal average profit: </strong>7.379%
          </p>
          <p>
            <Emoji symbol="📉" label="Linear" /><strong>Signal average loss:</strong> -4.8%
          </p>
          <p>
            <Emoji symbol="🍏" label="Apple" /><strong> Signal average return (expectancy): </strong>2.403%
          </p>

          <h3>
            3.3. What happened to the TSLA price after generating the same
            signals in the past?
          </h3>
          <p>
            We generated 10 of the same signals in the past and tried to
            simulate what happened to the price for the next day, the next 2
            days, 3 days, 1 week, 2 weeks, 1 month and 3 months (price change as
            a percentage of the price value at which the signals were
            generated). From the table below, you can see that 10 signals were
            generated during the period from 2020-11-17 to 2021-06-23. Green
            blocks mean that the price has increased over a certain period. Red
            blocks mean that the price has decreased over a certain period. The
            percentage of price change is indicated inside the cell.
          </p>
          <Canva
            image={legende}
            caption={`What happened to the TSLA price after generating the same 10 signals in the past between 2020-11-17 and 2021-06-23?`}
          />
          <p>
            We also generated 10 trajectories with a duration of 10 days of TSLA
            price movement after each of the 10 signals was generated (see the
            picture below). The red line is the average for all such
            trajectories and describes how the TSLA price has changed on average
            after generating the same signals in the past.
          </p>
          <Canva
            image={tabular}
            caption={`10 trajectories of the TSLA price movement within 10 days and their average (red line) after generating 10 of the same signals in the past
  `}
          />
          <h3>3.4. Optimal stop loss and take profit for the signal</h3>
          <p>
            We tested the TSLA for the period from 2010-07-06 to 2021-07-22 to
            find the best combination of stop loss and take profit levels for
            the “Exit from a narrowing range” signal.
          </p>

          <p>
            We used 2 models for setting a stop loss: by the size of the
            candlestick pattern, relative to which the signal is generated, and
            by ATR (
            <a
              href="https://school.stockcharts.com/doku.php?id=technical_indicators:average_true_range_atr"
              target="_blank"
              rel="noreferrer"
            >
              Average True Range
            </a>
            ). The stop loss level is additionally varied by multiplying its
            size by a coefficient from the interval from 0.5 to 3.5. The take
            profit level is calculated relative to the size of the stop loss and
            additionally varies by multiplying the size of the stop loss by a
            coefficient from the interval from 0.5 to 5.
          </p>
          <p>
            The criterion for the optimal combination of stop loss and take
            profit was maximization of the average return on the signal for the
            period from 2010-07-06 to 2021-07-22.
          </p>
          <p>For the model of setting a stop loss relative to the size of the signal candlestick pattern, we got the following result:</p>
          <Canva
          image={tabularImage}
          caption={`"Stop Loss and Take Profit Test" for the "Exit from a narrowing range" signal for the TSLA instrument using candlestick model size. The size of the optimal distance for placing a protective stop order and take profit from the signal generation point is determined by the maximum value (average return if the signal is executed) inside the table cell.`}
        />
          <p>For the model of setting a stop loss relative to the ATR value at the signal generation point, we got the following result:</p>
          <Canva
          image={graphImage}
          caption={`"Stop Loss and Take Profit Test" for the "Exit from a narrowing range" signal for the TSLA instrument using ATR. The size of the optimal distance for placing a protective stop order and take profit from the signal generation point is determined by the maximum value (average return if the signal is executed) inside the table cell.`}
        />
        <p>The tests showed that we will get the following optimal parameters</p>
        <p><Emoji symbol="✴" label="Star" /></p>
        <p><Emoji symbol="🍏" label="Apple" /></p>
        <p><Emoji symbol="⛔" label="No Entry" /></p>
        <p><Emoji symbol="✅" label="Check" /></p>

        <h3>3.5. Same Stop and Take Profit Test</h3>
        <p>See "Same Stop and Take Profit Test" definition here: <a href="https://medium.com/@ExtremeTrading/how-to-find-a-good-entry-point-part-2-d55f5f4a5e54" target="_blank" rel="noreferrer">Same Stop and Take Profit Test</a> </p>
        <p>For the generated signal, we additionally carried out the "Same Stop and Take Profit Test". We have modeled the percentage of profitable trades when placing a protective stop order and take profit at the same distance from the signal generation point. For testing, we used 2 types of stop order distance from the signal generation point, multiplied by a factor from 0.5 to 3.5 with a step of 0.5: a distance equal to the size of the candlestick pattern and a distance equal to the ATR for the TSLA instrument at the moment of signal generation.</p>

        <Canva
          image={linearGraph}
          caption={`"Same Stop and Take Profit Test" for the "Exit from a narrowing range" signal for the TSLA instrument. The percentage of positive signal outcomes is indicated inside the cells of the table.`}
        />
        </section>
      </div>
    </div>
  );
};

export default Content;
