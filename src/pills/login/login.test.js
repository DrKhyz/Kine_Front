import { UPDATE_USER, updateUser } from "./login.actions";
import login from "./login.reducer";
import {
  getUuidSelector,
  getTokenSelector,
  getStatusCodeSelector
} from "./login.selectors";

describe("# Login", () => {
  describe("## action", () => {
    it("should create an action to update username", () => {
      const uuid = "aaaa-1111-aaaa";
      const name = "Chuck Norris";
      const email = "bestman@gmail.com";
      const token = "myToken";
      const expectedAction = {
        type: UPDATE_USER,
        payload: { uuid, name, email, token }
      };
      expect(updateUser(uuid, name, email, token)).toEqual(expectedAction);
    });
  });

  describe("## reducer", () => {
    it("should return inital state", () => {
      expect(login({ user: "" }, {})).toEqual({ user: "" });
    });

    it("should handle UPDATE_USERNAME", () => {
      const uuid = "aaaa-1111-aaaa";
      const name = "Chuck Norris";
      const email = "bestman@gmail.com";
      const token = "myToken";
      expect(
        login(
          {
            uuid: "",
            name: "",
            email: "",
            token: "",
            statusCode: 200
          },
          { type: UPDATE_USER, payload: { uuid, name, email, token } }
        )
      ).toEqual({
        uuid: "aaaa-1111-aaaa",
        name: "Chuck Norris",
        email: "bestman@gmail.com",
        token: "myToken",
        statusCode: 200
      });
    });
  });

  describe("## selector", () => {
    describe("Should return 1111-aaaaa-1111 as uuid", () => {
      const store = { Login: { uuid: "1111-aaaaa-1111" } };
      expect(getUuidSelector(store)).toEqual("1111-aaaaa-1111");
    });
    describe("Should return 00tfhz555z00z198zdiznd as token", () => {
      const store = { Login: { token: "00tfhz555z00z198zdiznd" } };
      expect(getTokenSelector(store)).toEqual("00tfhz555z00z198zdiznd");
    });
    describe("Should return 00tfhz555z00z198zdiznd as token", () => {
      const store = { Login: { statusCode: 200 } };
      expect(getStatusCodeSelector(store)).toEqual(200);
    });
  });
});
