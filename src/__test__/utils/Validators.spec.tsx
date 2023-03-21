import { isURL } from "../../utils";

describe("Validators", () => {
  test("should verify the url", () => {
    const url = "http://localhost:8000";
    expect(isURL(url)).toBeTruthy();
  });

  test("should fail if the value isn't an url", () => {
    const url = "teste";
    expect(isURL(url)).toBeFalsy();
  });
});
