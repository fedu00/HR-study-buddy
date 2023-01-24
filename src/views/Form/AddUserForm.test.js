import React from "react";
// import FormField from "./FormField";
// import { renderWithThemeProvider } from "../../../helpers/renderWIthThemeProvider";
import { renderWithProviders } from "../../helpers/renderWithProviders";
import AddUserForm from "./AddUserForm";
import { screen, fireEvent } from "@testing-library/react";
import UserList from "../usersList/UsersList";
import "@testing-library/jest-dom";

describe("input with button", () => {
  it("It adds new user to the list", () => {
    renderWithProviders(
      <>
        <AddUserForm />
        <UserList />
      </>
    );
    fireEvent.change(screen.getByTestId("Name"), {
      target: { value: "Borek" },
    });
    fireEvent.change(screen.getByTestId("Attendance"), {
      target: { value: "43%" },
    });
    fireEvent.change(screen.getByTestId("Average"), {
      target: { value: "3.9" },
    });
    fireEvent.click(screen.getByTestId("Consent"));
    fireEvent.click(screen.getByText("Add"));
    screen.getByText("Borek");
  });

  it("Prevents adding new user if the consent not checked", () => {
    renderWithProviders(
      <>
        <AddUserForm />
        <UserList />
      </>
    );
    fireEvent.change(screen.getByTestId("Name"), {
      target: { value: "Borek" },
    });
    fireEvent.change(screen.getByTestId("Attendance"), {
      target: { value: "43%" },
    });
    fireEvent.change(screen.getByTestId("Average"), {
      target: { value: "3.9" },
    });
    fireEvent.click(screen.getByText("Add"));
    const newUser = screen.queryByText("Borek");
    expect(newUser).not.toBeInTheDocument();
  });
});
