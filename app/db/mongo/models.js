import { model, Schema } from "mongoose";

// Client Collection
const clientSchema = new Schema({
  subscriptionStatus: { type: Boolean, defaults: false },
  mediums: { type: [String], defaults: ["E-Mail"] },
  token: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: Number, required: true },
});
const Client = model("Client", clientSchema);

// Notification Collection
const notificationSchema = new Schema({
  message: { type: String, defaults: "" },
  status: { type: String, defaults: "To Do" },
  token: { type: String, required: true, unique: true },
  medium: { type: String, required: true },
});
const Notification = model("Notification", notificationSchema);

export { Client, Notification };
