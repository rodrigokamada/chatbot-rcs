const dotenv = require('dotenv');
const express = require('express');
const got = require('got');

dotenv.config();

const app = express();
app.use(express.json());

app.post('*', async (req, res) => {
  const contentReceived = req.body;
  console.log(`Content Received [${JSON.stringify(contentReceived)}]`);

  res.sendStatus(200);

  if (!contentReceived || !contentReceived.message || !contentReceived.message.contents) {
    return;
  }

  if (contentReceived.type === 'MESSAGE') {
    let content = {
      type: 'text',
      text: 'Testado',
    };

    if (contentReceived.message.contents[0].type === 'location') {
      const weather = await getWeather(contentReceived.message.contents[0].latitude, contentReceived.message.contents[0].longitude);
      content = {
        type: 'card',
        text: `📍 Tempo em ${weather.name}\n\nTemperatura: ${weather.temperature}º\nTemperatura Mínima: ${weather.temperatureMinimum}º\nTemperatura Máxima: ${weather.temperatureMaximum}º\nUmidade: ${weather.humidity}%`,
        media: {
          url: weather.url,
          disposition: 'ON_THE_LEFT',
        },
      };
    }

    await got.post('https://api.zenvia.com/v2/channels/rcs/messages', {
      responseType: 'json',
      resolveBodyOnly: true,
      json: {
        from: contentReceived.message.to,
        to: contentReceived.message.from,
        contents: [{...content}],
      },
      headers: {
        'X-API-TOKEN': process.env.ZENVIA_TOKEN,
      },
    });

    console.log(`Content Sent [${JSON.stringify(content)}]`);
  }
});

app.listen(3000);

console.log('Listening...');

const getWeather = async (latitude, longitude) => {
  const response = await got.post(`https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPENWEATHERMAP_TOKEN}&units=metric&lat=${latitude}&lon=${longitude}`, {
    responseType: 'json',
    resolveBodyOnly: true,
  });

  return {
    name: response.name,
    temperature: response.main.temp,
    temperatureMinimum: response.main.temp_min,
    temperatureMaximum: response.main.temp_max,
    humidity: response.main.humidity,
    url: `https://rodrigokamada.github.io/openweathermap/images/${response.weather[0].icon}_w@4x.png`,
  };
};
