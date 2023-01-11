import React from "react";
import PropTypes from "prop-types";
import { Input } from "../../atoms/input/Input";
import { Label } from "../../atoms/label/Label";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormField = ({
  value,
  onChange,
  label,
  name,
  id,
  type = "text",
  ...props
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
};

export default FormField;
