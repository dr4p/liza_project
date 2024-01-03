import express, { Express, Request, Response} from "express";
//import express from 'express';
import cors from 'cors';



const port = 3000;


const app: Express = express();


app.get('/weather', async (req: Request, res: Response) => {
    const { lat, lon } = req.params;
    //const url: string = `https://api.weather.yandex.ru/v2/forecast/?lat=${lat}&lon=${lon}&lang=ru_RU`
    const url: string = `https://api.weather.yandex.ru/v2/forecast/?lat=55.7522&lon=37.6156&lang=ru_RU`
    const data = await fetch(url, { method: 'GET',
    headers: {
      Accept: 'application/json',
      'X-Yandex-API-Key': '248ad155-70ec-4e55-9a6f-624bbaae8de3'
    }, 
})
    const jsonData = await data.json()
    console.log(jsonData)
    res.send(jsonData)
});

app.listen(port, () => {
    console.log(port)
})