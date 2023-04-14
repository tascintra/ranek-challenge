import { useCallback, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://ranekapi.origamid.dev/json/api";

const useAxios = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const requestData = useCallback(async (axiosParams) => {
    try {
      const response = await axios.request(axiosParams);
      setData(response.data);
    } catch (err) {
      setError(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, error, loading, requestData };
};

export default useAxios;
