import { TEST_URL } from "../app/lib/constants";
import { post } from "axios";

const testConfig = [
  {
    mediums: ["Email"],
    email: "vesubramanian1996@gmail.com",
    mobile: 9952152705,
  },
  {
    mediums: ["Email"],
    email: "abcde@gmail.com",
    mobile: 9952152705,
  },
  {
    mediums: ["Email"],
    email: "ijklmn@gmail.com",
    mobile: 9952152705,
  },
];

describe("Subscription Test Cases", () => {
  for (let i = 0; i < testConfig.length; i++) {
    const { email } = testConfig[i];
    it(`${email} Subscription`, async (done) => {
      const {
        status,
        data: { message },
      } = await post(`${TEST_URL}/subscribe`, testConfig[i], {
        headers: { "Content-Type": "application/json" },
      });
      expect(status).toBe(200);
      expect(message).toBe(`${email} subscribed successfully`);
      done();
    });
  }
});
