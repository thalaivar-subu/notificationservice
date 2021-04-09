import logger from "../../utils/logger";
import { Client } from "../../db/mongo/models";
import { generateToken } from "./helper";

const subscriptionHandler = async (req, res) => {
  logger.info({ requestBody: req.body });
  let response = {};
  try {
    const { mediums, email, mobile } = req.body;
    const record = await Client.create({
      email,
      mediums,
      subscriptionStatus: true,
      token: generateToken(),
      mobile,
    });
    response = {
      status: 200,
      data: {
        message: `${record.email} subscribed successfully`,
        token: record.token,
      },
    };
  } catch (error) {
    logger.error("Error while subscribing", error);
    response = { status: 500, data: { message: error.message } };
  }
  res.status(response.status).json(response.data);
};

export default subscriptionHandler;
