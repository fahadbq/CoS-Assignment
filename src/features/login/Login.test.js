import React from "react";
import { render, screen } from "../../utils/test.util";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Testing login form component", () => {
  test("Email should render, be empty and accept text input", async () => {
    render(<Login />);

    const emailNode = screen.getByPlaceholderText("Enter your Email");

    expect(emailNode).toBeInTheDocument();

    expect(emailNode.value).toBe("");

    await userEvent.type(emailNode, "Testing!@gmail.com");

    expect(emailNode.value).toBe("Testing!@gmail.com");
  });

  test("Password should render, be empty and accept text input", async () => {
    render(<Login />);

    const passwordNode = screen.getByPlaceholderText("Enter your Password");

    expect(passwordNode).toBeInTheDocument();

    expect(passwordNode.value).toBe("");

    await userEvent.type(passwordNode, "secret@123");
    expect(passwordNode.value).toBe("secret@123");
  });

  test("Login button should be enabled if there are input values", async () => {
    render(<Login />);

    const emailNode = screen.getByPlaceholderText("Enter your Email");
    const passwordNode = screen.getByPlaceholderText("Enter your Password");
    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toBeDisabled();

    await userEvent.type(emailNode, "Testing@gmail.com");
    await userEvent.type(passwordNode, "secret@123");

    expect(loginButton).toBeEnabled();
    await userEvent.click(loginButton);
  });
});
