import "express-async-errors";
import express, { Application, json } from "express";
import middlewares from "./middlewares";
import { inputRouter, userRouter } from "./routers";
import { sessionRouter } from "./routers/session.router";

const app: Application = express();
app.use(json());

app.use("/user", userRouter);
app.use("/login", sessionRouter);
app.use("/pregao", inputRouter);

app.use(middlewares.handleError);

export default app;
