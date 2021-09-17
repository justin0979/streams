import { useCallback } from 'react';
import {
  Field,
  WrappedFieldProps,
  InjectedFormProps,
  reduxForm,
  FormSubmitHandler,
} from 'redux-form';

interface CustomFormProps extends WrappedFieldProps {
  label?: string;
}

const StreamCreate: React.FC<InjectedFormProps> = (props) => {
  const renderInput = useCallback(
    (formProps: CustomFormProps) => {
      return (
        <div className="form__field">
          <label>{formProps.label}</label>
          <input type="text" {...formProps.input} />
        </div>
      );
    },
    [],
  );

  const onSubmit: FormSubmitHandler = (formValues) => {
    console.log(formValues);
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

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
