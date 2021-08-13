import express, { Request, Response, NextFunction } from 'express';
import { generateName } from './TrackFeatures';

const app = express();

const port = 5000 || process.env.PORT;

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(port, () => {
    console.log(`server started and listening on port: ${port}.`);
});

app.post('/name', generateName );
