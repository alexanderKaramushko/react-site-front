import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Введите пароль!'),
  username: Yup.string()
    .required('Введите логин!'),
});
