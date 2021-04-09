import { check } from "express-validator";

// Input Validation /proxy API
const SubscriptionValidation = [
  check("mobile").isNumeric().withMessage("Must Be a Valid Number"),
  check("email").isString().withMessage("Must Be a Valid String"),
  check("medium").isArray().withMessage("Should be an array of values"),
];

export default SubscriptionValidation;
