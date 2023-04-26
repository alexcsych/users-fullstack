import * as yup from 'yup';
import CONSTANTS from '../../constants';

const { GENDERS } = CONSTANTS;

// TODO password regexp

const NAME_VALIDATION_SCHEMA = yup
  .string()
  .trim()
  .min(2)
  .max(64)
  .matches(/^[A-Z][a-z]+$/)
  .required();

export const USER_VALIDATION_SCHEMA = yup.object({
  firstName: NAME_VALIDATION_SCHEMA,
  lastName: NAME_VALIDATION_SCHEMA,
  email: yup.string().email().required(),
  passwordHash: yup.string().required(),
  birthday: yup.date().max(new Date()),
  gender: yup.string().oneOf(GENDERS),
  userPhoto: yup.mixed(),
});

export const TASK_VALIDATION_SCHEMA = yup.object({
  body: yup.string().trim().min(2).max(64).required(),
  isDone: yup.bool(),
  deadline: yup.date().min(new Date()),
  userId: yup.number().min(1).required(),
});
