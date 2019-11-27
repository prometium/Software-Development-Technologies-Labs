import React from 'react';
import receiveData from '../helpers/receiveData';

export default function useData(endpoint, quantity = 3) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    receiveData(endpoint, quantity, data => {
      setData(data.slice(0, quantity));
    });
  }, []);

  return data;
}
