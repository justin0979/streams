import {
  Field,
  WrappedFieldProps,
  InjectedFormProps,
  reduxForm,
} from 'redux-form';

const StreamCreate: React.FC<InjectedFormProps> = (props) => {
  const renderInput = (formProps: WrappedFieldProps) => {
    return (
      <input
        type="text"
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    );
  };

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
