import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../../components/Input";

describe("Input", () => {
  test("should render without crash", () => {
    const testIdName = "input";
    render(<Input label={testIdName} data-testid={testIdName} />);
    const element = screen.getByTestId(testIdName);
    expect(element).toBeTruthy();
  });

  test("should render input label", () => {
    const testIdName = "input";
    render(
      <Input label={testIdName} data-testid={testIdName} id="testInput" />
    );
    const element = screen.getByLabelText(testIdName);
    expect(element).toBeTruthy();
  });

  test("should render change input value", () => {
    const testIdName = "input";
    const testValue = "testValue";
    render(<Input label={testIdName} data-testid={testIdName} />);
    const element = screen.getByTestId<HTMLInputElement>(testIdName);
    expect(element.value).toBe("");
    fireEvent.change(element, { target: { value: testValue } });
    expect(element.value).toBe(testValue);
  });
});
