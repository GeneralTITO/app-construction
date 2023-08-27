import "express-async-errors";
import express, { Application, json } from "express";
import middlewares from "./middlewares";
import { inputRouter, userRouter } from "./routers";
import { sessionRouter } from "./routers/session.router";
var cors = require("cors");

const app: Application = express();
app.use(cors());
app.use(json());

app.use("/user", userRouter);
app.use("/login", sessionRouter);
app.use("/pregao", inputRouter);

app.use(middlewares.handleError);

export default app;
