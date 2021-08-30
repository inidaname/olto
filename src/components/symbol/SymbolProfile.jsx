import React, { memo } from "react";
import Emoji from "a11y-react-emoji";
import './symbol.css';

const SymbolProfile = () => {

  const today = new Date();
  return (
    <section className="dataInfo">
      <p>
        <Emoji symbol="⬆️" label="Arrow Up" />
        <span>Signal type:</span> Long
      </p>
      <p>
        <Emoji symbol="🎲" label="Dice" />
        <span>Probability:</span> 58.9%
      </p>
      <p>
        <Emoji symbol="📝" label="Note" />
        <span>Name:</span> Exit from a narrow range up
      </p>
      <p>
        <Emoji symbol="⚒️" label="Hammer" />
        <span>Instrument:</span> Tesla (TSLA)
      </p>
      <p>
        <Emoji symbol="✝️" label="Cross" />
        <span>Timeframe:</span> D1
      </p>
      <p>
        <Emoji symbol="⏰" label="Alarm Clock" />
        <span>Current Time (American/New York):</span> {today.toLocaleDateString('en-us', {
          month: '2-digit',
          year: 'numeric',
          day: '2-digit',
          hour: '2-digit',
          minute:'2-digit',
          second: '2-digit',
          timeZone: 'America/New_York',
          formatMatcher: 'best fit'
        })}
      </p>
      <p>
        <Emoji symbol="📌" label="PushPin" />
        <span>Current Price:</span> 668.86 USD
      </p>
      <p>&nbsp;</p>
      <p>
        <Emoji symbol="📅" label="Calendar" />
        <span>Optimal maximum holding period:</span> until {new Date(today.setDate(today.getDate() + 6)).toLocaleDateString()} (6 days)
      </p>
      <p>
        <Emoji symbol="⛔" label="No Entry" />
        <span>Optimal stop loss:</span> 543.54 USD (3.0 model)
      </p>
      <p>
        <Emoji symbol="✅" label="Check Mark" />
        <span>Optimal take profit:</span> 914.67 (2.0 stop loss volume)
      </p>
    </section>
  );
};

export default memo(SymbolProfile);
