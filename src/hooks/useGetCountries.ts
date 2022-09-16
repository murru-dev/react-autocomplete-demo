import { useState, useEffect } from "react";

// Type definition
export type TApiResponse = {
  status: Number; // For status code
  statusText: String; // For status text state
  data: any; // To set data from response
  error: any; // To set any error the request returns
  loading: Boolean; // To work with data only when it's fetched completely.
};

// Hook definition
export const useGetCountries = (): TApiResponse => {

	const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>('');
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

	const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch('https://restcountries.com/v3.1/all');
      const json = await apiResponse.json();
			setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
			setError(error);
    } finally {
			setLoading(false);
		}
  };

	useEffect(() => {
    getAPIData();
  }, []);

  return { status, statusText, data, error, loading };
};