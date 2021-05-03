import React, { FC, ReactElement } from 'react';
import { Button, TextField, Box } from '@material-ui/core';
import { Formik, Form, Field, FieldProps } from 'formik';

import { AuthRequestPayload } from '../../../api/AuthService/types';
import { Props } from './types';

import { validationSchema } from './validation';

import styles from './style.scss';

const SignInForm: FC<Props> = (props): ReactElement => {
  const { authenticate } = props;
  const initialValues = {
    password: '',
    username: '',
  };

  function handleSubmit(authRequestPayload: AuthRequestPayload): void {
    authenticate(authRequestPayload);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.form}>
        <Box mb={1}>
          <Field name="username">
            {({ meta, field }: FieldProps<AuthRequestPayload>): ReactElement => (
              <TextField
                label="Логин"
                error={meta.error && meta.touched}
                helperText={meta.touched && meta.error}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...field}
              />
            )}
          </Field>
        </Box>
        <Box mb={2}>
          <Field name="password">
            {({ meta, field }: FieldProps<AuthRequestPayload>): ReactElement => (
              <TextField
                label="Пароль"
                error={meta.error && meta.touched}
                helperText={meta.touched && meta.error}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...field}
              />
            )}
          </Field>
        </Box>
        <Box justifyContent="right">
          <Button type="submit" variant="outlined">Войти</Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default SignInForm;
