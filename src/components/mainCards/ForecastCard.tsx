import React from "react";
import Card from "@mui/material/Card";
import { Box, Typography, Divider, Grid } from "@mui/material";
import { useStateContext } from "../../Context";

const ForecastCard = () => {
  const { values } = useStateContext();

  const forecastSevenDays = values.slice(0, 7);

  // Utility function to convert datetimeStr to the day of the week
  const getDayOfWeek = (datetimeStr) => {
    const date = new Date(datetimeStr);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  return (
    <Box
      sx={{
        background: "#222222",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Card
            sx={{
              borderRadius: "1.5rem",
              background: "#cacfde",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "1.4rem 1rem",
              gap: "1rem",
              color: "#232325",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: "Poppins",
              }}
            >
              DAY
            </Typography>

            <Divider
              style={{
                border: "1px solid #818085",
                width: "100%",
                margin: "0px",
              }}
            />

            {/* <img alt="" /> */}

            <Box>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  letterSpacing: "0px",
                  lineHeight: "",
                  fontWeight: "600",
                  padding: "10px 0",
                  fontFamily: "Poppins",
                }}
              >
                Temp
              </Typography>

              <Typography
                variant="body1"
                component="div"
                sx={{
                  letterSpacing: "0px",
                  lineHeight: "",
                  fontWeight: "600",
                  padding: "10px 0",
                  fontFamily: "Poppins",
                }}
              >
                Precipitation
              </Typography>

              <Typography
                variant="body1"
                component="div"
                sx={{
                  letterSpacing: "0px",
                  lineHeight: "",
                  fontWeight: "600",
                  padding: "10px 0",
                  fontFamily: "Poppins",
                }}
              >
                Humidity
              </Typography>

              <Typography
                variant="body1"
                component="div"
                sx={{
                  letterSpacing: "0px",
                  lineHeight: "",
                  fontWeight: "600",
                  padding: "10px 0",
                  fontFamily: "Poppins",
                }}
              >
                Wind Speed
              </Typography>

              <Typography
                variant="body1"
                component="div"
                sx={{
                  letterSpacing: "0px",
                  lineHeight: "",
                  fontWeight: "600",
                  padding: "10px 0",
                  fontFamily: "Poppins",
                }}
              >
                Heat Index
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "1rem",
            }}
          >
            {forecastSevenDays.map((forecast, index) => (
              <Card
                key={index}
                sx={{
                  borderRadius: "1.5rem",
                  background: "#1e1e1e",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1.5rem 1rem",
                  gap: "1rem",
                  color: "#818085",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontFamily: "Poppins",
                  }}
                >
                  {getDayOfWeek(forecast.datetimeStr)}
                </Typography>

                <Divider
                  style={{
                    border: "1px solid lightgrey",
                    width: "100%",
                    margin: "0px",
                  }}
                />

                {/* <img alt="" /> */}

                <Box>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      letterSpacing: "0px",
                      lineHeight: "",
                      fontWeight: "600",
                      padding: "10px 0",
                      fontFamily: "Poppins",
                    }}
                  >
                    {forecast.temp}°C
                  </Typography>

                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      letterSpacing: "0px",
                      lineHeight: "",
                      fontWeight: "600",
                      padding: "10px 0",
                      fontFamily: "Poppins",
                    }}
                  >
                    {forecast.precip}
                  </Typography>

                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      letterSpacing: "0px",
                      lineHeight: "",
                      fontWeight: "600",
                      padding: "10px 0",
                      fontFamily: "Poppins",
                    }}
                  >
                    {forecast.humidity}
                  </Typography>

                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      letterSpacing: "0px",
                      lineHeight: "",
                      fontWeight: "600",
                      padding: "10px 0",
                      fontFamily: "Poppins",
                    }}
                  >
                    {forecast.wspd}
                  </Typography>

                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      letterSpacing: "0px",
                      lineHeight: "",
                      fontWeight: "600",
                      padding: "10px 0",
                      fontFamily: "Poppins",
                    }}
                  >
                    {forecast.heatindex}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForecastCard;
