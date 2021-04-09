import crypto from "crypto";
import { generate } from "randomstring";

const generateToken = () => {
  return crypto
    .createHash("sha256")
    .update(generate(7))
    .digest("hex")
    .slice(0, 7);
};

export { generateToken };
