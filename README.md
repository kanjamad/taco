
![screenshot](taco.gif "screenshot")

# Demo : 
https://react-taco-truck-kanjamad.herokuapp.com/

# Setup project
carete React app
```javascript
npx create-react-app nameapp
```
Install dependencies
```javascript
yarn add @react-google-maps/api bootstrap react-bootstrap react-icons axios

```

# Running Locally 
Google Maps API Key: Create a new API key from the Google developer console, making sure that Maps JavaScript API has been enabled. Copy that key into your .env.local file creating an ENV var with the name REACT_APP_GOOGLE_MAPS_API_KEY.

# Create Google Maps API KEY
If you have a google map API key, You can display google maps sections on your web page very professionally.
1. Firstly Go to Google Maps - https://console.cloud.google.com/
2. Sign In with your Google account and agree with the terms and conditions
3.Create a project and name it as you want
4. Select the project and click on it
5. Navigate to APIs and Services and  click on Libraries
6. Enable the following Libraries one by one 
     1. Google Javascript API 
     2. Google Place API 

7. Navigate to APIs and Services and  click on Credentials 
8. Click on Create Credentials and then the API key and it will show up a screen with API Key
9. Now you can optionally restrict the API key.
# calculate distance between two coordinates
https://www.npmjs.com/package/haversine-distance
You can use the haversine-distance module to do this so you won't need to handle the calculations on your own

```javascript
yarn add haversine-distance
```
* You can use the module as follows:
```javascript
var haversine = require("haversine-distance");

//First point in your haversine calculation
var point1 = { lat: 6.1754, lng: 106.8272 }

//Second point in your haversine calculation
var point2 = { lat: 6.1352, lng: 106.8133 }

var haversine_m = haversine(point1, point2); //Results in meters (default)
var haversine_km = haversine_m /1000; //Results in kilometers

console.log("distance (in meters): " + haversine_m + "m");
console.log("distance (in kilometers): " + haversine_km + "km");
```

# Get Directions
https://developers.google.com/maps/documentation/urls/get-started#directions-examples




# Example Using Classes

``` javascript
import React from "react";
import CardList from "./components/card-list/CardList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      places: [],
    };
  }

  componentDidMount() {
    fetch("https://my.api.mockaroo.com/locations.json?key=a45f1200")
      .then((response) => response.json())
      // .then((data) => console.log(data));
      .then((data) => this.setState({ places: data }));
  }

  render() {
    return (
      <div className="App">
        <CardList places={this.state.places} />
      </div>
    );
  }
}

export default App;

```
# Example Using Hooks
``` javascript
import React, { useState, useEffect } from "react";
import CardList from "./components/card-list/CardList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    fetch("https://my.api.mockaroo.com/locations.json?key=a45f1200")
      .then((response) => response.json())
      // .then((data) => console.log(data));
      .then((data) => {
        setPlaces(data);
      });
  }, []);

  return !places.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="App">
      <CardList places={places} />
    </div>
  );
};

export default App;


```

# Get geolocation api

```javascript
  const [currentPosition, setCurrentPosition] = useState({});

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);
```
> destructure it
```javascript
const [currentPosition, setCurrentPosition] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCurrentPosition({ lat: latitude, lng: longitude });
      }
    );
  }, []);
```


##  Fetching Data with Fetch API 
> app.js
```javascript
  useEffect(() => {
    // Update the document title using the browser API
    fetch("https://my.api.mockaroo.com/locations.json?key=a45f1200")
      .then((response) => response.json())
      // .then((data) => console.log(data));
      .then((data) => {setPlaces(data)});

  }, []);
```
## Fetching Data with Axios library
* It does the same job as Fetch, but the main difference is that it already returns the result as JSON object, so we don't need to convert it.
>src/api/index.js
```javascript
import axios from "axios";

export const getPlacesData = async () => {
  try {
    // request
    const { data } = await axios.get(
      "https://my.api.mockaroo.com/locations.json?key=a45f1200"
    );
    // console.log(response.data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

```
> app.js
```javascript
import { getPlacesData } from "./api";
...
 useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, []);
```

### Ways of Fetching Data
There are many ways to extract data from API in React:

* using Fetch API
* using Axios library
* using async-await syntax
* using custom hooks
* using React Query library
* using GrapthQL API