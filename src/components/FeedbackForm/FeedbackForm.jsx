import * as Yup from 'yup';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './FeedbackForm.module.css';

const initialValues = {
  username: '',
  email: '',
  message: '',
  level: 'good',
};

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Must be a valid email!')
    .required('Required')
    .matches(/^a/, 'Email must start with "a"!'),
  message: Yup.string()
    .min(3, 'Too short')
    .max(256, 'Too long')
    .required('Required'),
  level: Yup.string().oneOf(['good', 'neutral', 'bad']).required('Required'),
});

const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const messageFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}>Username</label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={nameFieldId}
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>

        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div>
          <label htmlFor={messageFieldId}>Message</label>
          <Field
            className={css.field}
            as="textarea"
            name="message"
            id={messageFieldId}
          />
          <ErrorMessage className={css.error} name="message" component="span" />
        </div>

        <div>
          <label htmlFor={levelFieldId}>Service satisfaction level</label>
          <Field as="select" name="level" id={levelFieldId}>
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
          </Field>
          <ErrorMessage className={css.error} name="level" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
