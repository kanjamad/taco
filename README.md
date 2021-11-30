
![screenshot](tacotrack.gif "screenshot")
# Setup project

carete React app
```javascript
npx create-react-app nameapp
```
Install dependencies
```javascript
yarn add @react-google-maps/api bootstrap react-bootstrap react-icons 

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
      3. Google Direction  API 
     4. Google Geolocation API 
     5. Google Geocoding  API

7. Navigate to APIs and Services and  click on Credentials 
8. Click on Create Credentials and then the API key and it will show up a screen with API Key
9. Now you can optionally restrict the API key.
# calculate distance between two coordinates
https://www.npmjs.com/package/haversine-distance
You can use the haversine-distance module to do this so you won't need to handle the calculations on your own

```javascript
yarn add haversine-distance
```
# Get Directions
https://developers.google.com/maps/documentation/urls/get-started#directions-examples


# fetch data using axios
