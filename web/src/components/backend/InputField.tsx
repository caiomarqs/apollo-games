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
    <div>
      <label>{label}</label>
      <div>
        <input {...input} style={{ marginBottom: '5px' }} type={type} />
        <div className="red-text" style={{ marginBottom: '20px' }}>
          {touched && error}
        </div>
      </div>
    </div>
  );
};
