import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1300,
    margin: "auto",
    marginTop: "2rem",
    marginBottom: "5rem",
    padding: "2rem",
  },
  titleBar: {
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
    background: `linear-gradient(120deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
  },
  sectionHeader: {
    fontFamily: "Poppins",
    fontWeight: 400,
    color: "white",
    fontSize: "1.4rem",
    marginLeft: 37,
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: 20,
    },
  },
  code: {
    fontSize: "1.4rem",
    lineHeight: 1.5,
    color: theme.palette.primary.dark,
  },
  codeblock: {
    width: "min-content",
    padding: "4rem",
    background: "rgba(0,0,0, 0.01)",
    borderRadius: 7,
  },
}))

const PublicAPI = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.titleBar}>
        <div className={classes.sectionHeader}>Public REST API</div>
      </div>
      <div className={classes.container}>
        <h1>Public REST API</h1>
        <br />
        <br />
        <h2>REQUEST STRUCTURE</h2>
        <br />
        <br />
        <h3>GET request to:</h3>
        <code>ROOT ENDPOINT/FACTOR/QUERY</code>
        <br />
        <br />
        <small>Examlpes:</small>
        <pre>
          <code>
            https://climatemonitor.info/api/public/v1/co2/daily <br />
            https://climatemonitor.info/api/public/v1/co2/monthly <br />
            https://climatemonitor.info/api/public/v1/co2/annual <br />
            https://climatemonitor.info/api/public/v1/co2/for/2019 <br />
            https://climatemonitor.info/api/public/v1/co2/for/20116-04-15 <br />
          </code>
        </pre>
        <br />
        <br />
        <div className={classes.codeblock}>
          <pre>
            <code className={classes.code}>
              {`
{
  "status": "success",
  "data": {
    "label": "2012-09-03",
    "value": 389.43,
    "unit": "ppm"
  }
}
                `}
            </code>
          </pre>
        </div>

        {/* 
##### 



### ROOT ENDPOINT

<code>
https://climatemonitor.info/api/public/v1
</code>

### FACTOR

#### Availaible factors:

Earth atmospheric carbon dioxide (CO2)

<code></code>
<ROOT ENDPOINT>/co2/<QUERY>
<code></code>

Earth atmospheric methane (CH4)

<code></code>
<ROOT ENDPOINT>/ch4/<QUERY>
<code></code>

Earth atmospheric sulfur hexafluoride (SF6)

<code></code>
<ROOT ENDPOINT>/sf6/<QUERY>
<code></code>

Earth atmospheric dinitrogen oxide (N2O)

<code></code>
<ROOT ENDPOINT>/n2o/<QUERY>
<code></code>

Earth average temperatures and temperature anomalies

<code></code>
<ROOT ENDPOINT>/temperature/<QUERY>
<code></code>

Arctica's and Antarctica's glaciers mass loss

<code></code>
<ROOT ENDPOINT>/glaciers/<QUERY>
<code></code>

Sea level trends and global ocean mass

<code></code>
<ROOT ENDPOINT>/ocean/<QUERY>
<code></code>

### QUERY

#### GET FULL DATASET

Depending on datasets availaible for chosen FACTOR
link>> all available endpoints

<code></code>
/daily
/monthly
/annual
/monthly_ml
/annual_gl
<code></code>

Examples:

<code></code>
https://climatemonitor.info/api/public/v1/ch4/monthly
https://climatemonitor.info/api/public/v1/sf6/annual
https://climatemonitor.info/api/public/v1/co2/monthly_ml
<code></code>

#### GET SINGLE READING

Structure:

<code></code>
/for/<DATE>
<code></code>

Depending on datasets availaible for chosen FACTOR

<code></code>
/for/YYYY-MM-DD
<code></code>

will return daily readings,

<code></code>
/for/YYY-MM
<code></code>

will return monthly average,

<code></code>
/for/YYYY
<code></code>

will return annual average.

Examlpes:

<code></code>
https://climatemonitor.info/api/public/v1/co2/for/2018-05-12
https://climatemonitor.info/api/public/v1/co2/for/2012
<code></code>

---

## RESPONSE STRUCTURE

Response from API is provided in JSend format with possible outcomes:
success, fail and error.

### Success response

Requested data is always provided in `data` object.

<code></code>json
{
  "status": "success",
  "data": {
    "label": "2012-09-03",
    "value": 389.43,
    "unit": "ppm"
  }
}
<code></code>

Response containing full datatset:

<code></code>json
{
  "status": "success",
  "data": {
    "title": "Annual CO2 global",
    "description": "Temporary description",
    "readings": [
      {
        "label": "1980",
        "value": 338.91
      },
      {
        "label": "2020",
        "value": 412.46
      }
    ],
    "unit": "ppm",
    "source": "www.climatemonitor.info",
    "sourceUrl": "https://climatemonitor.info",
    "lastUpdate": "2021-04-24T18:24:25.789Z"
  }
}
<code></code>

### Fail response

Response status 4xx, client-side errors, e.g. invalid request.

<code></code>json
{
  "status": "fail",
  "message": "Requested date is outside of dataset scope: 2011-01-01 - 2021-04-26"
}
<code></code>

### Error response

Response status 5xx, server-side errors

<code></code>json
{
  "status": "error",
  "message": "Internal server error ;)"
}
<code></code>

---

## ALL AVAILABLE ENDPOINTS

GET requests to root endpoint:

<code></code>
https://climatemonitor.info/api/public/v1
<code></code>

#### Earth atmospheric CO2

Latest available daily CO2 reading from Mauna Loa Observatory, Hawaii:

<code></code>
/co2/latest
<code></code>

Earth daily CO2:

<code></code>
/co2/daily
<code></code>

Earth CO2 weekly average from Mauna Loa Observatory, Hawaii:

<code></code>
/co2/weekly_ml
<code></code>

Earth CO2 weekly global average:

<code></code>
/co2/weekly_gl
<code></code>

Earth CO2 monthly average from Mauna Loa Observatory, Hawaii:

<code></code>
/co2/monthly_ml
<code></code>

Earth CO2 monthly global average:

<code></code>
/co2/monthly_gl
<code></code>

Earth CO2 annual global average:

<code></code>
/co2/annual_gl
<code></code>

Earth CO2 annual average from Mauna Loa Observatory, Hawaii:

<code></code>
/co2/annual_ml
<code></code>

Annual global CO2 increase:

<code></code>
/co2/increase_gl
<code></code>

Annual CO2 increase, Mauna Loa Observatory, Hawaii:

<code></code>
/co2/increase_ml
<code></code>

Earth CO2 reading for the date:

<code></code>
/co2/for/2016-04-102
<code></code>

Earth CO2 monthly average:

<code></code>
/co2/for/2016-04
<code></code>

Earth co2 annaul average:

<code></code>
/co2/for/2016
<code></code>

#### Earth atmospheric methane (CH4)

Monthly global atmospheric CH4:

<code></code>
/ch4/monthly
<code></code>

Annual global atmospheric CH4:

<code></code>
/ch4/annual
<code></code>

Annual atmospheric CH4 growth rate:

<code></code>
/ch4/growth
<code></code>

#### Earth atmospheric sulfur hexafluoride (SF6)

Monthly global atmospheric SF6:

<code></code>
/sf6/monthly
<code></code>

Annual global atmospheric SF6:

<code></code>
/sf6/annual
<code></code>

Annual atmospheric SF6 growth rate:

<code></code>
/sf6/growth
<code></code>

#### Earth atmospheric dinitrogen oxide (N2O)

Monthly global atmospheric N2O:

<code></code>
/n2o/monthly
<code></code>

Annual global atmospheric N2O:

<code></code>
/n2o/annual
<code></code>

Annual atmospheric N2O growth rate:

<code></code>
/n2o/growth
<code></code>

#### Global ocean levels

Global ocean mass:

<code></code>
/ocean/mass
<code></code>

Ocean level variation:

<code></code>
/ocean/level
<code></code>

#### Arctica and Antarctica mass loss

Antarctica ice mass:

<code></code>
/glaciers/antarctica
<code></code>

Greenland ice mass:

<code></code>
/glaciers/greenland
<code></code>

#### Temperatures

Annual land surface average:

<code></code>
/temp/annual_avg
<code></code>

<code></code>
/temp/annual_min
<code></code>

<code></code>
/temp/annual_max
<code></code>

Average annual land surface anomaly:

<code></code>
/temp/annual_anomaly_min
<code></code>

<code></code>
/temp/annual_anomaly_avg
<code></code>

<code></code>
/temp/annual_anomaly_max
<code></code>

Annual land and ocean combined temperature anomaly:

<code></code>
/temp/annual_anomaly_loc
<code></code>

Annual land and ocean combined average temperature:

<code></code>
/temp/annual_loc
<code></code>

Monthly land surface average:

<code></code>
/temp/monthly_min
<code></code>

<code></code>
/temp/monthly_avg
<code></code>

<code></code>
/temp/monthly_max
<code></code>

Average monthly land surface anomaly:

<code></code>
/temp/monthly_anomaly_min
<code></code>

<code></code>
/temp/monthly_anomaly_avg
<code></code>

<code></code>
/temp/monthly_anomaly_max
<code></code>

Monthly land and ocean combined temperature anomaly:

<code></code>
/temp/monthly_anomaly_loc
<code></code>

Monthly land and ocean combined average temperature:

<code></code>
/temp/monthly_loc
<code></code>

Daily land surface average temperature anomaly (last ten years of availaible records):

<code></code>
/temp/daily_min
<code></code>

<code></code>
/temp/daily_avg
<code></code>

<code></code>
/temp/daily_max
<code></code> */}
      </div>
    </>
  )
}

export default PublicAPI
