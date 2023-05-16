// api/auth.js

export default (axios) => ({
    getCityWeather(params) {
        // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
        return axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                ...params,
                appid: process.env.VUE_APP_WEATHER_API_KEY || '3cf051cfa4a585ae345bb84553c4a1fe',
                units: 'imperial',
            },
        });
    },
});
