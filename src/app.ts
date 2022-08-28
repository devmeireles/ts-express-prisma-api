import "module-alias/register";
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import * as swagger from "express-jsdoc-swagger";
import { userRouter } from "./routes/user.route";

dotenv.config();

const options = {
  info: {
    version: "1.0.0",
    title: "Rent a House",
    license: {
      name: "MIT",
    },
  },
  security: {
    BasicAuth: {
      type: "http",
      scheme: "basic",
    },
  },
  // Base directory which we use to locate your JSDOC files
  baseDir: __dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: "./**/*.ts",
  // URL where SwaggerUI will be rendered
  swaggerUIPath: "/docs",
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: false,
  // Open API JSON Docs endpoint.
  apiDocsPath: "/v3/docs",
  // Set non-required fields as nullable by default
  notRequiredAsNullable: false,
  // You can customize your UI options.
  // you can extend swagger-ui-express config. You can checkout an example of this
  // in the `example/configuration/swaggerOptions.js`
  swaggerUiOptions: {},
  // multiple option in case you want more that one instance
  multiple: true,
};

class App {
  public express: express.Application;
  public connection: PrismaClient;

  constructor() {
    this.express = express();
    this.connection = new PrismaClient();
    this.middlewares();
    this.routes();
    swagger.default(this.express)(options);
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
