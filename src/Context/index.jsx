import { useContext, createContext, useState, useEffect } from 'react'
import axios from 'axios'
import Alert from '@mui/material/Alert'

const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({})
  const [values, setValues] = useState([])
  const [place, setPlace] = useState('Jaipur')
  const [thisLocation, setLocation] = useState('')
  const [error, setError] = useState(null)

  // fetch api
  const fetchWeather = async () => {
    const options = {
      method: 'GET',
      url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
      params: {
        aggregateHours: '24',
        location: place,
        contentType: 'json',
        unitGroup: 'metric',
        shortColumnNames: 0
      },
      headers: {
        'X-RapidAPI-Key': '9ea4738b88msh473e2c52c11d1c6p18e341jsn8f5f748fdc62',
        'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
      }
    }

    try {
      const response = await axios.request(options)
      // console.log(response.data)
      const thisData = Object.values(response.data.locations)[0]
      setLocation(thisData.address)
      setValues(thisData.values)
      setWeather(thisData.values[0])
      setError(null)
    } catch (e) {
      console.error(e)
      setError('This place does not exist')
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [place])

  useEffect(() => {
    console.log(values)
  }, [values])

  return (
    <StateContext.Provider
      value={{
        weather,
        setPlace,
        values,
        thisLocation,
        place,
        error
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
