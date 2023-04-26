import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { TASK_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import Input from '../Input';
import styles from './TaskForm.module.sass';
import { createTasksThunk } from '../../../store/slices/tasksSlice';

function TaskForm ({ create }) {
  const initialValues = {
    body: '',
    isDone: false,
    deadline: '',
    userId: '',
  };

  const handleSubmit = (values, formikBag) => {
    if (!values.deadline) {
      delete values.deadline;
    }
    create(values);
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={TASK_VALIDATION_SCHEMA}
    >
      {formikProps => (
        <Form className={styles.form}>
          <Input
            label='Body:'
            type='text'
            name='body'
            placeholder='Task body'
            autoFocus
            classes={classes}
          />
          <label>
            isDone:
            <Field type='checkbox' name='isDone' classes={classes} />
          </label>
          <Input
            label='Deadline:'
            type='date'
            name='deadline'
            classes={classes}
          />
          <Input label='User Id:' type='text' name='userId' classes={classes} />
          <button type='submit'>Save</button>
        </Form>
      )}
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  create: values => dispatch(createTasksThunk(values)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
