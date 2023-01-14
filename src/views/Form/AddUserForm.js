import React, { useState, useContext } from "react";
import { ViewWrapper } from "../../components/molecues/viewWrapper/ViewWrapper";
import { StyledTitle } from "../usersList/UsersList.styles";
import FormField from "../../components/molecues/formField/FormField";
import { Button } from "../../components/atoms/button/Button";
import { UsersContext } from "../../providers/UsersProvider";

const inicialFormState = {
  name: "",
  attendance: "",
  average: "",
};

const AddUserForm = () => {
  const [formValue, setFormValueformValue] = useState(inicialFormState);
  // const context = useContext(UsersContext); ponizej jest skrócona forma
  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e) => {
    setFormValueformValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUser = (event) => {
    event.preventDefault();
    handleAddUser(formValue);
    // context.handleAddUser(formValue);
    setFormValueformValue(inicialFormState);
  };
  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
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

export default AddUserForm;
