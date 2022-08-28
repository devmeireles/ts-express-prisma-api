import "module-alias/register";
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import * as swagger from "express-jsdoc-swagger";

import { userRouter } from "./routes/user.route";
import { swaggerOptions } from "@config/swagger";

dotenv.config();

class App {
  public express: express.Application;
  public connection: PrismaClient;

  constructor() {
    this.express = express();
    this.connection = new PrismaClient();
    this.middlewares();
    this.routes();
    swagger.default(this.express)(swaggerOptions);
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  public getConnection() {
    return this.connection;
  }

  private routes(): void {
    this.express.use("/user", userRouter);
  }
}

export default new App().express;
