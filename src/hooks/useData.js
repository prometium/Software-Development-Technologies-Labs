import React from 'react';
import api from '../helpers/api';

export default function useData(endpoint, quantity = 3) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    api(endpoint)
      .then(data => {
        setData(data.slice(0, quantity));
      })
      .catch(() => {
        /*die*/
      })
      .finally(() => {
        /*die*/
      });
  }, []);

  return data;
}
