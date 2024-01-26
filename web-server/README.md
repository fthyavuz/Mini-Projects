# Web-Server

This application helps retrieve weather information via a browser by entering a location. The application communicates with two different public APIs: [weatherstack.com](https://weatherstack.com/) for weather information and [mapbox.com](https://www.mapbox.com/) for obtaining latitude and longitude information regarding the user-entered location.

## Run it locally

1. Install packages
   `npm install`
2. Run the server
   `npm run dev`
3. Open in your browser
   [http://localhost:3000/](http://localhost:3000/)

### Run it for real results

1. Open the `dev.env` file found in the config directory at the root of the project.

2. Specify a port and add API tokens obtained from [weatherstack.com](https://weatherstack.com/) (for weather information) and [mapbox.com](https://www.mapbox.com/) (for location information).

```
ACCESS_KEY_WEATHER=your_weatherstack_token
ACCESS_KEY_MAP=your_mapbox_token
PORT=your_specified_port
```

3. Save the changes and run the server again.
   `npm run dev`

Make sure to replace "your_weatherstack_token," "your_mapbox_token," and "your_specified_port" with the actual tokens and port values.

### Get Tokens

- For weather information: [weatherstack.com](https://weatherstack.com/)
- For location information: [mapbox.com](https://www.mapbox.com/)

Free signup is available on both platforms to obtain the required tokens.

Note: The "default" values in the `dev.env` file are placeholders and should be replaced with the actual tokens obtained from the respective platforms.
