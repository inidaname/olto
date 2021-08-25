import { useEffect, useState } from 'react';
// "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=TSLA&region=US"
const useFetch = (url) => {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ data, setData ] = useState()
  const [ err, setErr ] = useState(null)

  useEffect(() => {
    const abort = new AbortController();
    fetch(
      url,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
          "x-rapidapi-key": "E3YEmAuxF5mshIu7U5SGXncdziaWp1yvknEjsn00H5Lky4QjE7",
        },
        signal: abort.signal
      }
    )
      .then((res) => {
        if (!res.status) {
          throw Error("Could not load data for that response");
        }
        return res.json()
      })
      .then((response) => {
        for (let i = 0; i < response.prices.length; i++) {
          const el = response.prices[ i ];
          el.daySet = new Date(el.date * 1000);
          el.month = el.daySet.toLocaleString('en-us', { month: 'long' })
          // el.open = el.open.toFixed(2)
          // el.high = el.high.toFixed(2)
          // el.close = el.close.toFixed(2)
          // el.low = el.low.toFixed(2)
        }
        setIsLoading(false)
        setData(response)
      })
      .catch((err) => {
        setIsLoading(false)
        setErr(err)
      });

    return () => abort.abort();

  }, [ url ])

  return { err, data, isLoading }
}

export default useFetch