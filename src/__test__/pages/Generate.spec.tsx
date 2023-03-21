import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GeneratePage from "../../pages/generate";

jest.mock("qrcode.react", () => () => (
  <div data-testid="qrCode-image">qrCode</div>
));

interface FromData {
  name: string;
  linkedin: string;
  github: string;
}

const FillFormAndSubmit = (testData: FromData) => {
  const nameInput = screen.getByLabelText<HTMLInputElement>("Name");
  expect(nameInput.value).toBe("");
  fireEvent.change(nameInput, { target: { value: testData.name } });

  const linkedinInput = screen.getByLabelText<HTMLInputElement>("LinkedIn URL");
  expect(linkedinInput.value).toBe("");
  fireEvent.change(linkedinInput, { target: { value: testData.linkedin } });

  const githubInput = screen.getByLabelText<HTMLInputElement>("Github URL");
  expect(githubInput.value).toBe("");
  fireEvent.change(githubInput, { target: { value: testData.github } });

  const submitButton = screen.getByText<HTMLButtonElement>("Generate Image");
  fireEvent.click(submitButton);
};

describe("Generate Page", () => {
  test("should render without crash", () => {
    render(<GeneratePage />);
  });

  test("should show the image", () => {
    const testData = {
      name: "name",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    };
    render(<GeneratePage />);
    let qrCode = screen.queryByTestId("qrCode-image");
    expect(qrCode).toBeFalsy();

    FillFormAndSubmit(testData);

    qrCode = screen.getByTestId("qrCode-image");
    expect(qrCode).toBeTruthy();
  });

  test("should show the linkedin error message", () => {
    const testData = {
      name: "name",
      linkedin: "linkedin",
      github: "https://github.com/",
    };
    render(<GeneratePage />);
    let errorMessage = screen.queryByTestId("invalid linkedin");
    expect(errorMessage).toBeFalsy();

    FillFormAndSubmit(testData);

    errorMessage = screen.queryByText("invalid linkedin");
    expect(errorMessage).toBeTruthy();
  });

  test("should show the github error message", () => {
    const testData = {
      name: "name",
      linkedin: "https://www.linkedin.com/",
      github: "github",
    };
    render(<GeneratePage />);
    let errorMessage = screen.queryByTestId("invalid github");
    expect(errorMessage).toBeFalsy();

    FillFormAndSubmit(testData);

    errorMessage = screen.queryByText("invalid github");
    expect(errorMessage).toBeTruthy();
  });
});
