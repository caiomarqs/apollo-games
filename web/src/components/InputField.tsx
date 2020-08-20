import React from 'react';
import { WrappedFieldProps } from 'redux-form';

interface InputFieldProps extends WrappedFieldProps {
  type: string;
  label: string;
}

export const InputField = ({
  input,
  type,
  label,
  meta: { error, touched },
}: InputFieldProps) => {
  return (
    <>
      <input
        {...input}
        className="inputField"
        type={type}
        placeholder={label}
      />
      <p className="inputError caption-font">{touched && error}</p>
    </>
  );
};
