import { useCallback } from 'react';
import {
  Field,
  WrappedFieldProps,
  WrappedFieldMetaProps,
  InjectedFormProps,
  reduxForm,
  FormSubmitHandler,
} from 'redux-form';
import { SubmitFormValues } from '&src/CustomTypes';
import { useActions } from '&hooks';

interface CustomFormProps extends WrappedFieldProps {
  label?: string;
}

const StreamCreate: React.FC<InjectedFormProps> = (props) => {
  const { createStream } = useActions();
  const renderError = ({
    error,
    touched,
  }: WrappedFieldMetaProps): JSX.Element | undefined => {
    if (touched && error) {
      return (
        <div className="message message__error">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = useCallback(
    (formProps: CustomFormProps) => {
      const styleInput = `input ${
        formProps.meta.touched && formProps.meta.error
          ? 'input__error'
          : ''
      }`;
      return (
        <div className="form__field">
          <input
            className={styleInput}
            {...formProps.input}
            placeholder={formProps.label}
            autoComplete="off"
          />
          <label className="input__label">
            {formProps.label &&
              formProps.label.split(' ').splice(1, 2).join('')}
          </label>
          {renderError(formProps.meta)}
        </div>
      );
    },
    [],
  );

  const onSubmit = (formValues: SubmitFormValues) => {
    createStream(formValues);
  };

  return (
    <form
      onSubmit={props.handleSubmit(onSubmit)}
      className="form"
    >
      <Field
        name="title"
        component={renderInput}
        label="Enter Title"
      />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <button className="btn btn--primary">Submit</button>
    </form>
  );
};

const validate = (
  formValues: SubmitFormValues,
): SubmitFormValues => {
  const errors: SubmitFormValues = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate: validate,
})(StreamCreate);
