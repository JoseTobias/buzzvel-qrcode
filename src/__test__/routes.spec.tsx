import React from "react";
import { render } from "@testing-library/react";
import Routes from "../routes";

describe("Routes", () => {
  test("should render without crash", () => {
    const testIdName = "button";
    render(<Routes data-testid={testIdName} />);
  });
});
