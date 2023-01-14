import React from "react";
import FormField from "./FormField";
import { renderWithProviders } from "../../../helpers/renderWithProviders";

describe("input with button", () => {
  it("render the component", () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
