import React from "react";
import { FormInputContaier } from "./form-input.style";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <FormInputContaier>
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`} >
          {label}
        </label>
      ) : null}
    </FormInputContaier>
  );
};

export default FormInput;
