import React from 'react';
import { WrappedFieldProps } from 'redux-form';

interface RenderFieldProps extends WrappedFieldProps {
  type: 'text' | 'email' | null;
  label: string;
  field: 'input' | 'textarea';
  className: string;
}

export const RenderField = ({
  input,
  type,
  label,
  field,
  className,
  meta: { error, touched },
}: RenderFieldProps) => {
  const Field = field;

  return (
    <>
      <Field
        {...input}
        className={className}
        {...(type ? { type } : null)}
        placeholder={label}
      ></Field>
      <p className="inputError caption-font">{touched && error}</p>
    </>
  );
};
