import React from "react";
import { render, screen } from "@testing-library/react";
import LinkButton from "../../components/LinkButton";

describe("LinkButton", () => {
  test("should render without crash", () => {
    const testIdName = "button";
    render(<LinkButton data-testid={testIdName} />);
    const element = screen.getByTestId(testIdName);
    expect(element).toBeTruthy();
  });
});
