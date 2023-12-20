import testRouter from "./test.router";
import dbRouter from "./db.router";

export default function routes(app) {
  app.use("/test", testRouter);
  app.use("/bd", dbRouter);
}
