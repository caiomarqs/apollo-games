import React from 'react';
import { WrappedFieldProps } from 'redux-form';

interface SelectFieldProps extends WrappedFieldProps {
  type: string;
  label: string;
  items: SelectItem[];
}

export interface SelectItem {
  value: string;
  text: string;
  label?: string;
  name?: string;
  type?: string;
  renderField?: Function;
}

export const SelectField = ({
  input,
  label,
  meta: { touched, error },
  items,
}: SelectFieldProps) => {
  return (
    <div className="field">
      <select {...input} placeholder={label}>
        <option value="0">{label}</option>
        {items.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  );
};
