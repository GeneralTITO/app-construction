import "express-async-errors";
import express, { Application, json } from "express";
import middlewares from "./middlewares";

const app: Application = express();
app.use(json());

app.use(middlewares.handleError);

export default app;
