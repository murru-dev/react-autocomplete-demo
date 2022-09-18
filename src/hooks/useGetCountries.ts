import { useEffect, useState } from 'react'

type Response = {
  flag: string
  name: {
    official: string
  }
}

export const useGetCountries = () => {

  const [data, setData] = useState([])

  useEffect( () => {
    const getAPIData = async () => {
      try {
        const apiResponse = await fetch('https://restcountries.com/v3.1/all')
        const json = await apiResponse.json()
        const formated = json.map( ( response: Response ) => ({
          flag: response.flag,
          name: response.name.official,
        }))
        setData(formated)
      } catch (error) {
      }
    }
  
    getAPIData();
  }, [])

  return { data }
}