import React from 'react';
import { WrappedFieldProps } from 'redux-form';

interface FileInputFieldProps extends WrappedFieldProps {
  type: string;
  label: string;
  value: string;
}

export const FileInputField = ({
  input,
  type,
  label,
  meta: { error, touched },
  value,
}: FileInputFieldProps) => {
  return (
    <>
      <input
        {...input}
        value={value}
        className="inputField"
        type={type}
        placeholder={label}
      />
      <p className="inputError caption-font">{touched && error}</p>
    </>
  );
};
