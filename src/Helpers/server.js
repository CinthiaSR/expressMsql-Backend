import Express from "express";
import * as http from "http";
import errorHandler from "../Middlewares/error.Handler";

const app = new Express();

export default class ExpressServer {
  router(routes) {
    routes(app);
    app.use(errorHandler);
    return this;
  }

  listen(networkPort = process.env.PORT) {
    console.log(`Listening on port http://localhost:${networkPort}`);
    http.createServer(app).listen(networkPort);
    return app;
  }
}
