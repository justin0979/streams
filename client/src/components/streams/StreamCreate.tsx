import {
  Field,
  WrappedFieldProps,
  InjectedFormProps,
  reduxForm,
} from 'redux-form';

const renderInput = (formProps: WrappedFieldProps) => {
  return (
    <input
      type="text"
      onChange={formProps.input.onChange}
      value={formProps.input.value}
    />
  );
};

const StreamCreate: React.FC<InjectedFormProps> = (props) => {
  return (
    <form>
      <Field name="title" component={renderInput} />
      <Field name="description" component={renderInput} />
    </form>
  );
};

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
