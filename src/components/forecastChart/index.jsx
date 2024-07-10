import { Box, Card, Divider, Typography } from '@mui/material'
import React from 'react'
import { useStateContext } from '../../Context'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const data = [
  {
    name: 'Day 1',
    uv: 4000,
    temp: 2400,
    amt: 2400
  },
  {
    name: 'Day 2',
    uv: 3000,
    temp: 1398,
    amt: 2210
  },
  {
    name: 'Day 3',
    uv: 2000,
    temp: 9800,
    amt: 2290
  },
  {
    name: 'Day 4',
    uv: 2780,
    temp: 3908,
    amt: 2000
  },
  {
    name: 'Day 5',
    uv: 1890,
    temp: 4800,
    amt: 2181
  },
  {
    name: 'Day 6',
    uv: 2390,
    temp: 3800,
    amt: 2500
  },
  {
    name: 'Day 7',
    uv: 3490,
    temp: 4300000,
    amt: 2100
  }
]

const ForecastChart = () => {
  const { weather, thisLocation, values, setPlace, place } = useStateContext()

  const forecastSevenDays = values.slice(0, 7)

  // Function to format datetimeStr to "Day Mon"
  function formatDay (dateStr) {
    const date = new Date(dateStr)
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' })
    return dayOfWeek
  }

  // Map over forecastSevenDays to format data suitable for the chart
  const forecast = forecastSevenDays.map((dayData, index) => ({
    name: `Day ${index + 1}`,
    day: formatDay(dayData.datetimeStr),
    temp: dayData.temp,
    precip: dayData.precip
  }))

  console.log(forecast)

  return (
    <Box
      sx={{
        background: '#222222',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        width: '100%'
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '1200px' }}>
        <ResponsiveContainer width='100%' aspect={4}>
          <LineChart
            data={forecast}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <XAxis dataKey='day' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='temp'
              stroke='red'
              activeDot={{ r: 8 }}
            />
            <Line type='monotone' dataKey='precip' stroke='skyblue' />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}

export default ForecastChart
