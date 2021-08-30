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
          "x-rapidapi-key": "30f0eb2486msh77656bcf7757205p18e1c2jsnd30947846b58",
        },
        signal: abort.signal
      }
    )
      .then((res) => {
        console.log(res)
        if (!res.ok) {
          throw Error(`Could not load data for that response, message from API: ${res.statusText}`);
        }
        return res.json()
      })
      .then((response) => {
        if(response.prices){
          for (let i = 0; i < response.prices.length; i++) {
            const el = response.prices[ i ];
            el.daySet = new Date(el.date * 1000);
            el.month = el.daySet.toLocaleString('en-us', { month: 'long' })
          }
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