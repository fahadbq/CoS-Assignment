import React from "react";
import { render, screen } from "../../test.util";
import userEvent from "@testing-library/user-event";
import AdminsList from "./AdminsList";

test("First name should accept text input", async () => {
  render(<AdminsList />);

  const firstNameInput = screen.getByLabelText(/First Name/i);

  expect(firstNameInput.value).toMatch("");

  await userEvent.type(firstNameInput, "Adam");

  expect(firstNameInput.value).toMatch("Adam");
});

test("Last name should accept text input", async () => {
  render(<AdminsList />);
  const lastNameInput = screen.getByLabelText(/Last Name/i);

  expect(lastNameInput.value).toMatch("");
  await userEvent.type(lastNameInput, "smith");

  expect(lastNameInput.value).toMatch("smith");
});

test("Phone Number should accept text input", async () => {
  render(<AdminsList />);
  const phoneNumberInput = screen.getByLabelText(/Phone Number/i);

  expect(phoneNumberInput.value).toMatch("");
  await userEvent.type(phoneNumberInput, "9888891123");

  expect(phoneNumberInput.value).toMatch("9888891123");
});

test("Extension should accept text input", async () => {
  render(<AdminsList />);
  const extensionInput = screen.getByLabelText(/Extension/i);

  expect(extensionInput.value).toMatch("");
  await userEvent.type(extensionInput, "1104");

  expect(extensionInput.value).toMatch("1104");
});

test("Title should accept text input", async () => {
  render(<AdminsList />);
  const titleInput = screen.getByLabelText(/Title/i);

  expect(titleInput.value).toMatch("");
  await userEvent.type(titleInput, "Executive");

  expect(titleInput.value).toMatch("Executive");
});

test("HireDate should accept text input", async () => {
  render(<AdminsList />);
  const hireDateInput = screen.getByLabelText(/Hire Date/i);

  expect(hireDateInput.value).toMatch("");
  await userEvent.type(hireDateInput, "2022-06-01");

  expect(hireDateInput.value).toMatch("2022-06-01");
});

test("Email should accept text input", async () => {
  render(<AdminsList />);
  const emailInput = screen.getByLabelText(/Email/i);
  const submitInput = screen.getByRole("button", { name: /submit/i });

  expect(emailInput.value).toMatch("");
  await userEvent.type(emailInput, "Adam144@gmail.com");

  expect(emailInput.value).toMatch("Adam144@gmail.com");
  await userEvent.click(submitInput);
});

test("Secret should accept text input", async () => {
  render(<AdminsList />);

  const secretInput = screen.getByLabelText(/Secret/i);
  const submitInput = screen.getByRole("button", { name: /submit/i });

  expect(secretInput.value).toMatch("");
  await userEvent.type(secretInput, "secret1234");

  expect(secretInput.value).toMatch("secret1234");
  await userEvent.click(submitInput);
});

test("Id should accept text input", async () => {
  render(<AdminsList />);

  const idInput = screen.getByLabelText(/Role Id/i);
  const submitInput = screen.getByRole("button", { name: /submit/i });

  expect(idInput.value).toMatch("0");
  await userEvent.type(idInput, "1");

  expect(idInput.value).toMatch("1");
  await userEvent.click(submitInput);
});
