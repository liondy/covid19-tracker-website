# Covid19 Tracker Website

This is a website that displays current covid-19 status in Indonesia. It has mobile version in [here](https://github.com/liondy/Covid19TrackerMobile)

# Dependency

`nodejs`: v10+ (Recommended: v14.15.1 (Current LTS))\
`npm`: v6.14.10 (Current LTS).\
An insight about coding Javascript

# Installed Library

Before you can see the beauty of the webpage, please look at [package.json](https://github.com/liondy/covid19-tracker-website/blob/master/package.json) for the installed library.\
Here's all script to install. You can simply run `npm install` or use this script:

```
npm install axios
npm install bootstrap
npm install reactstrap react react-dom
npm install react-router-dom
npm install semantic-ui-react semantic-ui-css
npm install date-fns
npm install @wojtekmaj/react-daterange-picker
npm install react-countup
npm install --save react-apexcharts apexcharts
npm install highcharts highcharts-react-official @highcharts/map-collection proj4
```

Axios: to process API \
Bootstrap & Reactstrap: enabling React to use Bootstrap via Reactstrap Component \
React Router Dom: enabling React to have multipage. \
Semantic UI React: Dropdown Select. \
Date FNS: to work with dates. \
React DateRange Picker: to make date filtering. \
React Countup: animating numbers. \
React Apex Chart: adding visualization to covid-19 data. \
Highcharts: adding map visualization to Indonesia zone.

## Data Source

Country & World: [Covi19 API](https://documenter.getpostman.com/view/10808728/SzS8rjbc) \
Province Indonesia: [BNPB](https://bnpb-inacovid19.hub.arcgis.com/datasets/data-harian-kasus-per-provinsi-covid-19-indonesia/geoservice) \
City Zone Indonesia: [Satuan Tugas Penanganan COVID-19](https://covid19.go.id/peta-risiko) <sup>1</sup> \
Hospital for Covid-bignote: [Dekontaminasi](https://dekontaminasi.com/api/id/covid19/hospitals) <sup>1</sup>

<sup>1</sup>
CORS Header Problem. \
 Solution: Hosted with Vercel on Node.JS (Serverless) [API](https://serverless-covid19-indonesia-api.liondy.vercel.app/)

## Run Project

To run this project, simply put this command to your terminal

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Screenshot

![Screenshot from 2020-12-11 13-06-10](https://user-images.githubusercontent.com/44316758/101869310-b3662c80-3bb1-11eb-9dce-df5153bd8988.png)
