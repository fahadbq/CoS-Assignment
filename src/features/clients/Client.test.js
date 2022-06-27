import React from "react";
import { render, screen } from "../../utils/test.util";
import userEvent from "@testing-library/user-event";
import ClientsList from "../clients/ClientsList";

test("First name should render, be empty and accept text input", async () => {
  render(<ClientsList />);

  const firstNameNode = screen.getByLabelText(/First Name/i);

  expect(firstNameNode).toBeInTheDocument();
  expect(firstNameNode.value).toBe("");

  await userEvent.type(firstNameNode, "Adam11");
  expect(firstNameNode.value).toBe("Adam11");
});

test("Last name should render, be empty and accept text input", async () => {
  render(<ClientsList />);

  const lastNameNode = screen.getByLabelText(/Last Name/i);

  expect(lastNameNode).toBeInTheDocument();
  expect(lastNameNode.value).toBe("");

  await userEvent.type(lastNameNode, "ronen");
  expect(lastNameNode.value).toBe("ronen");
});

test("Gender should render, be empty and accept text input", async () => {
  render(<ClientsList />);

  const genderNode = screen.getByLabelText(/Gender/i);

  expect(genderNode).toBeInTheDocument();
  expect(genderNode.value).toBe("");

  await userEvent.type(genderNode, "ronen");
  expect(genderNode.value).toBe("ronen");
});

test("Email should render, be empty and accept text input", async () => {
  render(<ClientsList />);

  const emailNode = screen.getByLabelText(/Email/i);

  expect(emailNode).toBeInTheDocument();
  expect(emailNode.value).toBe("");

  await userEvent.type(emailNode, "Adam!@gmail.com");
  expect(emailNode.value).toBe("Adam!@gmail.com");
});

test("Date of Birth should render, be empty and accept text input", async () => {
  render(<ClientsList />);

  const dobNode = screen.getByLabelText(/Date of Birth/i);

  expect(dobNode).toBeInTheDocument();
  expect(dobNode.value).toBe("");

  await userEvent.type(dobNode, "1998-11-24");
  expect(dobNode.value).toBe("1998-11-24");
});

test("Phone Number should render, be empty and accept text input", async () => {
  render(<ClientsList />);

  const phoneNumberNode = screen.getByLabelText(/Phone Number 1/);

  expect(phoneNumberNode).toBeInTheDocument();
  expect(phoneNumberNode.value).toBe("");

  await userEvent.type(phoneNumberNode, "8988122341");
  expect(phoneNumberNode.value).toBe("8988122341");
});

test("Address should render, be empty and accept text input", async () => {
  render(<ClientsList />);

  const AddressNode = screen.getByLabelText(/Address 1/);

  expect(AddressNode).toBeInTheDocument();
  expect(AddressNode.value).toBe("");

  await userEvent.type(AddressNode, "#404 7th abc 99");
  expect(AddressNode.value).toBe("#404 7th abc 99");
});

test("Zip Code should render, be empty and accept text input", async () => {
  render(<ClientsList />);

  const zipCodeNode = screen.getByLabelText(/Zip Code/);

  expect(zipCodeNode).toBeInTheDocument();
  expect(zipCodeNode.value).toBe("");

  await userEvent.type(zipCodeNode, "120023");
  expect(zipCodeNode.value).toBe("120023");
});

test("City should render, be empty and accept text input", async () => {
  render(<ClientsList />);

  const CityNode = screen.getByLabelText(/City/);

  expect(CityNode).toBeInTheDocument();
  expect(CityNode.value).toBe("");

  await userEvent.type(CityNode, "buffalo");
  expect(CityNode.value).toBe("buffalo");
});

test("State should render, be empty and accept text input", async () => {
  render(<ClientsList />);

  const StateNode = screen.getByLabelText(/State/);

  expect(StateNode).toBeInTheDocument();
  expect(StateNode.value).toBe("");

  await userEvent.type(StateNode, "New york");
  expect(StateNode.value).toBe("New york");
});

test("Emergency Contact should render, be empty and accept text input", async () => {
  render(<ClientsList />);

  const EmergencyContactNode = screen.getByLabelText(/Emergency Contact/);

  expect(EmergencyContactNode).toBeInTheDocument();
  expect(EmergencyContactNode.value).toBe("");

  await userEvent.type(EmergencyContactNode, "9901124432");
  expect(EmergencyContactNode.value).toBe("9901124432");
});
