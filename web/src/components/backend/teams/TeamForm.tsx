import React from 'react';
import { InjectedFormProps, reduxForm, Field, FormSection } from 'redux-form';
import _ from 'lodash';

import { formFields } from '../formFields';
import { SelectItem } from '../SelectField';
import { TeamState } from '../../../actions';

interface TeamFormProps {
  onSubmit(formValues: TeamState): void;
  buttonLabel: string;
}

class _TeamForm extends React.Component<
  TeamFormProps & InjectedFormProps<TeamState, TeamFormProps>
> {
  renderContacts = (items: SelectItem[]) => {
    return _.map(items, ({ name, renderField, type, label }) => {
      return (
        <Field
          key={name}
          component={renderField}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  };

  renderFields = () => {
    return _.map(
      formFields,
      ({
        name,
        label,
        type,
        renderField,
        items,
        accept,
      }: {
        name: string;
        accept: string;
        label: string;
        type: string;
        renderField: Function;
        items: SelectItem[];
      }) => {
        if (type === 'file')
          return (
            <Field
              key={name}
              component={renderField}
              type={type}
              label={label}
              name={name}
              accept={accept}
              value={[]}
            />
          );
        if (type === 'select')
          return (
            <Field
              key={name}
              component={renderField}
              type={type}
              label={label}
              name={name}
              items={items}
            />
          );
        if (name === 'contacts')
          return (
            <div key={name}>
              {label}
              <FormSection name={name}>
                {this.renderContacts(items)}
              </FormSection>
            </div>
          );

        return (
          <Field
            key={name}
            component={renderField}
            type={type}
            label={label}
            name={name}
          />
        );
      }
    );
  };

  render() {
    const { handleSubmit, onSubmit, pristine, submitting } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          {this.renderFields()}

          <button disabled={pristine || submitting} type="submit">
            {this.props.buttonLabel}
          </button>
        </form>
      </div>
    );
  }
}

const validate = (values: any) => {
  const errors = {} as any;
  if (values.team === '0') errors.team = 'Campo obrigatório';

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) errors[name] = noValueError;
  });

  return errors;
};

export const TeamForm = reduxForm<TeamState, TeamFormProps>({
  validate,
  form: 'teamForm',
})(_TeamForm);
