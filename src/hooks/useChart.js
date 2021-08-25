import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const useChart = (data) => {
  const [dataS, setdataS] = useState({})
  useEffect(() => {
    let dataSets = {}
    let months = []
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const month = data[i].month;
        if (months.indexOf(month) === -1) {
          months.push(month);
        }
      }
      dataSets = {
        labels: months,
        label: 'Rainfall',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 54, 34]
      }
    }

    setdataS(dataSets)
    return () => {}
  }, [data])

  // console.log(dataS)

  return dataS
}

export default useChart