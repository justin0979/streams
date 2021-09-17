import {
  Field,
  WrappedFieldProps,
  InjectedFormProps,
  reduxForm,
} from 'redux-form';

interface CustomFormProps extends WrappedFieldProps {
  label?: string;
}

const renderInput = (formProps: CustomFormProps) => {
  console.log(formProps);
  return (
    <div className="form__field">
      <label>{formProps.label}</label>
      <input type="text" {...formProps.input} />
    </div>
  );
};

const StreamCreate: React.FC<InjectedFormProps> = (props) => {
  return (
    <form className="form">
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
    </form>
  );
};

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
