import React from "react";
import { ViewWrapper } from "../../components/molecues/viewWrapper/ViewWrapper";
import { StyledTitle } from "../usersList/UsersList.styles";
import FormField from "../../components/molecues/formField/FormField";
import { Button } from "../../components/atoms/button/Button";

const Form = ({ handleAddUser, formValue, handleInputChange }) => {
  return (
    <ViewWrapper as="form" onSubmit={handleAddUser}>
      <StyledTitle>Add new Student</StyledTitle>
      <FormField
        label="Name"
        id="name"
        name="name"
        value={formValue.name}
        onChange={handleInputChange}
      />
      <FormField
        label="Attendance"
        id="attendance"
        name="attendance"
        value={formValue.attendance}
        onChange={handleInputChange}
      />
      <FormField
        label="Average"
        id="average"
        name="average"
        value={formValue.average}
        onChange={handleInputChange}
      />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default Form;
