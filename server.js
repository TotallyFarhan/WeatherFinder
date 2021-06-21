const express = require('express');
const request = require('request');
const app = express();

const apiKey = 'b5f468b90b5cd3279bda6f9124c1f6fe';

const PORT = 5000;

app.get('/:city', (req, res) => {
    const city = req.params['city'];
    request(`http://api.weatherstack.com/forecast?access_key=${apiKey}&query=${city}`, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const parsedBody = JSON.parse(body);
            const weather = {
                temperature: parsedBody["current"]["temperature"],
                weather_descriptions: parsedBody["current"]["weather_descriptions"],
                weather_icons: parsedBody["current"]["weather_icons"]
            }
            const location = {
                name: parsedBody["location"]["name"],
                state: parsedBody["location"]["region"],
                country: parsedBody["location"]["country"]
            }
            const data = {
                location: location,
                weather: weather
            }
            res.send({data})
        }
        else {
            res.sendStatus(404);
        }
    })
})

/*
app.get('/joggers', (req, res) => {
    request(`http://api.weatherstack.com/forecast?access_key=${apiKey}&query=Woodbridge`, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const parsedBody = JSON.parse(body);
            const weather = {
                temperature: parsedBody["current"]["temperature"],
                weather_descriptions: parsedBody["current"]["weather_descriptions"],
                weather_icons: parsedBody["current"]["weather_icons"]
            }
            const location = {
                name: parsedBody["location"]["name"],
                state: parsedBody["location"]["region"],
                country: parsedBody["location"]["country"]
            }
            const info = {
                location: location,
                weather: weather
            }
            res.send({info})
        }
        else {
            res.sendStatus(404);
        }
    })
})
*/

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})