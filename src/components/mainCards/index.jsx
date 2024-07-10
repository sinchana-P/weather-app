import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { useStateContext } from '../../Context/index.jsx'
import CurrentWeatherCard from './CurrentWeatherCard.jsx'
import tempIcon from '../../images/temp.svg'
import Thermometer from '../../images/Thermometer.png'
import humidity from '../../images/humidity.svg'
import precip from '../../images/precip.svg'
import storm from '../../images/storm.png'
import sunnyRainy from '../../images/sunnyRainy.png'
import ForecastCard from './ForecastCard.tsx'

const CurrentWeather = () => {
  const weatherConditions = [
    'Temperature',
    'Humidity',
    'Wind Speed',
    'Precipitation',
    'Heat Index',
    'Condition'
  ]

  const { weather, values } = useStateContext()

  const forecastSevenDays = values.slice(0, 7)

  const today = new Date()
  const year = today.getFullYear()
  const month = (today.getMonth() + 1).toString().padStart(2, '0')
  const day = today.getDate().toString().padStart(2, '0')

  const formattedDateMMDDYYYY = `${month}/${day}/${year}`

  return (
    <Box sx={{ width: '100%', padding: '0rem' }}>
      <Grid container spacing={2} sx={{ padding: '1.3rem 0' }}>
        <Grid item xs={12} md={5}>
          <Box
            sx={{ background: '#222222', padding: '1rem', marginLeft: '0rem' }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography
                variant='h6'
                component='div'
                sx={{
                  marginLeft: '0.5rem',
                  fontFamily: 'Poppins',
                  color: '#817f82'
                }}
              >
                Today's Weather
              </Typography>
              <Typography
                variant='body1'
                component='div'
                sx={{
                  marginRight: '1rem',
                  fontFamily: 'Poppins',
                  color: '#817f82'
                }}
              >
                {formattedDateMMDDYYYY}
              </Typography>
            </Box>
            <Grid container spacing={1} sx={{ marginTop: '1rem' }}>
              {weatherConditions.map(condition => (
                <Grid item xs={6} md={4} key={condition}>
                  {(() => {
                    switch (condition) {
                      case 'Temperature':
                        return (
                          <CurrentWeatherCard
                            attribute={condition}
                            value={weather.temp}
                            image={tempIcon}
                          />
                        )
                      case 'Humidity':
                        return (
                          <CurrentWeatherCard
                            attribute={condition}
                            value={weather.humidity}
                            image={humidity}
                          />
                        )
                      case 'Wind Speed':
                        return (
                          <CurrentWeatherCard
                            attribute={condition}
                            value={weather.wspd}
                            image={storm}
                          />
                        )
                      case 'Precipitation':
                        return (
                          <CurrentWeatherCard
                            attribute={condition}
                            value={weather.precip}
                            image={precip}
                          />
                        )
                      case 'Heat Index':
                        return (
                          <CurrentWeatherCard
                            attribute={condition}
                            value={weather.heatindex}
                            image={Thermometer}
                          />
                        )
                      case 'Condition':
                        return (
                          <CurrentWeatherCard
                            attribute={condition}
                            value={weather.conditions}
                            image={sunnyRainy}
                          />
                        )
                      default:
                        return null
                    }
                  })()}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              background: '#222222',
              padding: '1rem',
              marginTop: { xs: '1rem', md: '0' },
              padding: '1rem 1rem'
            }}
          >
            <Typography
              variant='h6'
              component='div'
              sx={{
                marginLeft: '0.5rem',
                fontFamily: 'Poppins',
                color: '#817f82',
                paddingTop: '1rem',
                paddingBottom: '2.7rem'
              }}
            >
              7 Days Weather Forecast
            </Typography>
            <ForecastCard />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CurrentWeather
