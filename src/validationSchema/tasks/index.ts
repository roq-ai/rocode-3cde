import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  time_spent: yup.number().integer().required(),
  individual_id: yup.string().nullable(),
});
