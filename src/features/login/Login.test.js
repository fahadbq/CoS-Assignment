import React from "react";
import { render, screen, fireEvent } from "../../test.util";
import Login from "./Login";

describe("Testing login form component", () => {
  test("Email should have place holder", () => {
    render(<Login />);

    const inputNode = screen.getByPlaceholderText("Enter your Email");

    expect(inputNode.getAttribute("name")).toBe("email");
  });

  test("Email input should accept text", () => {
    render(<Login />);

    const emailInputNode = screen.getByPlaceholderText("Enter your Email");

    expect(emailInputNode.value).toMatch("");
    fireEvent.change(emailInputNode, { target: { value: "testing" } });
    expect(emailInputNode.value).toMatch("testing");
  });

  test("Login button should be enabled if there are input values", () => {
    render(<Login />);

    const emailInputNode = screen.getByPlaceholderText("Enter your Email");
    const passwordInputNode = screen.getByPlaceholderText(
      "Enter your Password"
    );
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(emailInputNode, {
      target: { value: "Testing@gmail.com" },
    });
    fireEvent.change(passwordInputNode, { target: { value: "secret@123" } });

    expect(loginButton).toBeEnabled();
    fireEvent.click(loginButton);
  });
});
