import * as swagger from "express-jsdoc-swagger";

export const swaggerOptions: swagger.Options  = {
  info: {
    version: "1.0.0",
    title: "Rent a House",
    license: {
      name: "MIT",
    },
  },
  security: {
    BasicAuth: {
      type: 'http',
      scheme: 'basic',
    },
    BearerAuth: {
      type: "http",
      scheme: "Bearer",
    }
  },

  baseDir: __dirname,
  filesPattern: "../**/*.ts",
  swaggerUIPath: "/docs",
  exposeSwaggerUI: true,
  exposeApiDocs: false,
  apiDocsPath: "/v3/docs",
  notRequiredAsNullable: false,
  swaggerUiOptions: {},
};