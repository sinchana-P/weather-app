import React from 'react'
import Card from '@mui/material/Card'
import { Box, Typography } from '@mui/material'

const CurrentWeatherCard = props => {
  const { attribute, value, image } = props

  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '4rem', md: '6rem', lg: '8.5rem' },
        height: { xs: '100%', sm: '4rem', md: '6rem', lg: '8.5rem' },
        margin: '0.5rem',
        padding: '0.9rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.6rem',
        backgroundColor: '#dbdad9'
      }}
    >
      <Typography
        variant='h6'
        component='div'
        sx={{
          fontWeight: '500',
          fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' }
        }}
      >
        {attribute}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            paddingTop: '5px',
            paddingBottom: '15px'
          }}
        >
          <img
            src={image}
            alt='Temperature Icon'
            style={{
              width: '3rem',
              height: '3rem'
            }}
          />
        </Box>
        <Typography
          variant='body1'
          component='div'
          sx={{
            fontWeight: '600',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
          }}
        >
          {value}
        </Typography>
      </Box>
    </Card>
  )
}

export default CurrentWeatherCard
