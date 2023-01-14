import React from "react";
// import FormField from "./FormField";
// import { renderWithThemeProvider } from "../../../helpers/renderWIthThemeProvider";
import { renderWithProviders } from "../../helpers/renderWithProviders";
import AddUserForm from "./AddUserForm";
import { screen, fireEvent } from "@testing-library/react";
import UserList from "../usersList/UsersList";

describe("input with button", () => {
  it("render the component", () => {
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
    screen.getByText("Borek");
  });
});
