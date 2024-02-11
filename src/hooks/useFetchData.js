import axios from 'axios';
import { useState } from 'react';
import baseUrl from '../data/baseUrl';

export default function useFetchData(endPoint, query = '') {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  async function fetchData() {
    try {
      const response = await axios(`${baseUrl}/${endPoint}/?${query}`);
      setData(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return { fetchData, data, isLoading, isError };
}
