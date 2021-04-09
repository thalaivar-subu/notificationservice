import logger from "../../utils/logger";
import { MONGO_URI } from "../../lib/constants";
import { connect, connection } from "mongoose";

const Init = async () => {
  try {
    await connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("Connected to Mongo");
  } catch (error) {
    logger.error("Error while connecting to Mongo -> ", error);
  }
};

const db = connection;

const closeMongo = () => {
  db.close().then(() => logger.info("Mongo Connection Closed"));
};

export { Init, closeMongo };
