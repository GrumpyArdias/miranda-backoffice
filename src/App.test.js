import React from "react";
import { render, screen } from "@testing-library/react";
import { SubmitButton } from "./components/styles/NewUser.Styles";

describe("SubmitButton", () => {
  test("Check if the button is rendered", () => {
    render(<SubmitButton />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  test("Button Color change", () => {
    const dyeButton = "rgb(173, 157, 130)";
    render(<SubmitButton color={dyeButton} />);
    const button = screen.getByRole("button");
    const styledButton = window.getComputedStyle(button);
    expect(styledButton.backgroundColor).toBe(dyeButton);
  });
});
