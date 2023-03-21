import React from "react";
import { render, screen } from "@testing-library/react";
import UserPage from "../../pages/user";

jest.mock("react-router-dom", () => ({
  useParams: () => ({
    name: "string",
  }),
  useSearchParams: () => [
    new URLSearchParams({
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    }),
  ],
}));

describe("User Page", () => {
  test("should render without crash", () => {
    render(<UserPage />);
  });

  test("should show linkedin button", () => {
    render(<UserPage />);
    const linkedinButton = screen.getByText<HTMLAnchorElement>("LinkedIn");
    expect(linkedinButton.href).toBe("https://www.linkedin.com/");
  });

  test("should show github button", () => {
    render(<UserPage />);
    const githubButton = screen.getByText<HTMLAnchorElement>("Github");
    expect(githubButton.href).toBe("https://github.com/");
  });
});
