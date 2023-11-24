import testRouter from "./test.router";

export default function routes(app) {
  app.use("/test", testRouter);
}
