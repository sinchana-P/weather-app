import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Card } from '@mui/material'
import { useStateContext } from './Context'
import Header from './components/header'
import CurrentWeather from './components/mainCards'
import ForecastChart from './components/forecastChart'
import Divider from '@mui/material/Divider'
import './App.css'

function App () {
  return (
    <div
      className='App'
      style={{
        flexGrow: 1,
        padding: '20px 30px',
        background: '',
        margin: '0',
        color: 'black',
        fontFamily: 'Poppins',
        backgroundColor: '#111015',
        color: '#E5E5E5'
      }}
    >
      <Header />
      <Divider />
      <CurrentWeather />
      <ForecastChart />
    </div>
  )
}

export default App
