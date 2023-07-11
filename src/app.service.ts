
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  private readonly apiKey = '6d055e39ee237af35ca066f35474e9df';
  private readonly kelvin = 273;

  async getWeather(latitude: number, longitude: number): Promise<any> {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`;

    try {
      const response = await axios.get(url);
      const data = response.data;

      const temperature = Math.floor(data.main.temp - this.kelvin) + '°C';
      const summary = data.weather[0].description;
      const location = data.name + ', ' + data.sys.country;
      const icon = `<img src="icons/${data.weather[0].icon}.svg" style="height:10rem" />`;

      return { temperature, summary, location, icon };
    } catch (error) {
      // Handle error
      throw error;
    }
  }
}

