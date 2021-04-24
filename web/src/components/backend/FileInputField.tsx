import React from 'react';
import { WrappedFieldProps } from 'redux-form';

interface FileInputFieldProps extends WrappedFieldProps {
  type: string;
  label: string;
  value: string;
  accept?: string;
}

export const FileInputField = ({
  input,
  type,
  label,
  meta: { error, touched },
  value,
  accept,
}: FileInputFieldProps) => {
  return (
    <>
      <input
        {...input}
        value={value}
        className="inputField"
        type={type}
        placeholder={label}
        accept={accept}
      />
      <p className="inputError caption-font">{touched && error}</p>
    </>
  );
};
