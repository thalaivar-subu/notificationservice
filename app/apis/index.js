import SubscriptionHandler from "./subscription/handler";
import SubscriptionValidation from "./subscription/validation";
import SendNotificationHandler from "./sendnotification/handler";
import UnsubscribeHandler from "./unsubscribe/handler";

const RestRoutes = async (app) => {
  app.post("/subscribe", SubscriptionValidation, SubscriptionHandler);
  app.post("/sendNotification", SendNotificationHandler);
  app.post("/unsubscribe", UnsubscribeHandler);
};

export default RestRoutes;
