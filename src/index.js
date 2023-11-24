import "dotenv/config";
import ExpressServer from "./Helpers/server";
import routes from "./Routes";
export default new ExpressServer().router(routes).listen(process.env.PORT);
