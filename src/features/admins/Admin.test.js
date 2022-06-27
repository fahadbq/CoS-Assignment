import React from "react";
import { render, screen } from "../../utils/test.util";
import userEvent from "@testing-library/user-event";
import AdminsList from "./AdminsList";

test("First name should render, be empty and accept text input", async () => {
  render(<AdminsList />);

  const firstNameNode = screen.getByLabelText(/First Name/i);

  expect(firstNameNode).toBeInTheDocument();

  expect(firstNameNode.value).toBe("");

  await userEvent.type(firstNameNode, "Adam");
  expect(firstNameNode.value).toBe("Adam");
});

test("Last name should render, be empty and accept text input", async () => {
  render(<AdminsList />);
  const lastNameNode = screen.getByLabelText(/Last Name/i);

  expect(lastNameNode).toBeInTheDocument();

  expect(lastNameNode.value).toBe("");

  await userEvent.type(lastNameNode, "smith");
  expect(lastNameNode.value).toBe("smith");
});

test("Phone Number should render, be empty and accept text input", async () => {
  render(<AdminsList />);
  const phoneNumberNode = screen.getByLabelText(/Phone Number/i);

  expect(phoneNumberNode).toBeInTheDocument();

  expect(phoneNumberNode.value).toBe("");

  await userEvent.type(phoneNumberNode, "9888891123");
  expect(phoneNumberNode.value).toBe("9888891123");
});

test("Extension should render, be empty and accept text input", async () => {
  render(<AdminsList />);
  const extensionNode = screen.getByLabelText(/Extension/i);

  expect(extensionNode).toBeInTheDocument();

  expect(extensionNode.value).toBe("");

  await userEvent.type(extensionNode, "1104");
  expect(extensionNode.value).toBe("1104");
});

test("Title should render, be empty and accept text input", async () => {
  render(<AdminsList />);
  const titleNode = screen.getByLabelText(/Title/i);

  expect(titleNode).toBeInTheDocument();

  expect(titleNode.value).toBe("");

  await userEvent.type(titleNode, "Executive");
  expect(titleNode.value).toBe("Executive");
});

test("HireDate should render, be empty and accept text input", async () => {
  render(<AdminsList />);
  const hireDateNode = screen.getByLabelText(/Hire Date/i);

  expect(hireDateNode.value).toBe("");
  await userEvent.type(hireDateNode, "2022-06-01");

  expect(hireDateNode.value).toBe("2022-06-01");
});

test("Email should render, be empty and accept text input", async () => {
  render(<AdminsList />);
  const emailNode = screen.getByLabelText(/Email/i);

  expect(emailNode).toBeInTheDocument();

  expect(emailNode.value).toBe("");
  await userEvent.type(emailNode, "Adam144@gmail.com");

  expect(emailNode.value).toBe("Adam144@gmail.com");
});

test("Secret should render, be empty and accept text input", async () => {
  render(<AdminsList />);

  const secretNode = screen.getByLabelText(/Secret/i);

  expect(secretNode).toBeInTheDocument();

  expect(secretNode.value).toBe("");
  await userEvent.type(secretNode, "secret1234");

  expect(secretNode.value).toBe("secret1234");
});

test("Id should render, be empty and accept text input", async () => {
  render(<AdminsList />);

  const idNode = screen.getByLabelText(/Role Id/i);

  expect(idNode).toBeInTheDocument();

  expect(idNode.value).toBe("0");
  await userEvent.type(idNode, "1");

  expect(idNode.value).toBe("1");
});
