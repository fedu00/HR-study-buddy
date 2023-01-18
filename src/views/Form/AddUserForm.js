import React, { useContext } from "react";
import { ViewWrapper } from "../../components/molecues/viewWrapper/ViewWrapper";
import { StyledTitle } from "../usersList/UsersList.styles";
import FormField from "../../components/molecues/formField/FormField";
import { Button } from "../../components/atoms/button/Button";
import { UsersContext } from "../../providers/UsersProvider";
import { useForm } from "../../hooks/useForm";

const inicialFormState = {
  name: "",
  attendance: "",
  average: "",
  consent: false,
  error: "",
};

const AddUserForm = () => {
  const { handleAddUser } = useContext(UsersContext);
  const {
    formValues,
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleToggleConsent,
  } = useForm(inicialFormState);

  const handleSubmitUser = (event) => {
    event.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      handleClearForm(inicialFormState);
    } else {
      handleThrowError("You need to give consent");
    }
  };
  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <StyledTitle>Add new Student</StyledTitle>
      <FormField
        label="Name"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <FormField
        label="Attendance"
        id="attendance"
        name="attendance"
        value={formValues.attendance}
        onChange={handleInputChange}
      />
      <FormField
        label="Average"
        id="average"
        name="average"
        value={formValues.average}
        onChange={handleInputChange}
      />
      <FormField
        label="Consent"
        id="consent"
        name="consent"
        type="checkbox"
        value={formValues.average}
        onChange={handleToggleConsent}
      />
      <Button type="submit">Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUserForm;
