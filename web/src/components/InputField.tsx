import React from 'react';
import { WrappedFieldProps } from 'redux-form';

interface InputFieldProps extends WrappedFieldProps {
  type: string;
  label: string;
}

export const InputField = ({ input, type, label, meta: { error, touched } }: InputFieldProps) => {
  return (
    <div>
      <div>
        <input {...input} className='loginInputField' type={type} placeholder={label} />
        <div className="inputError">
          {touched && error}
        </div>
      </div>
    </div>
  )
}