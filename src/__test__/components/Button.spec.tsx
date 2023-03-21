import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../../components/Button";

describe("Button", () => {
  test("should render without crash", () => {
    const testIdName = "button";
    render(<Button data-testid={testIdName} />);
    const element = screen.getByTestId(testIdName);
    expect(element).toBeTruthy();
  });
});
