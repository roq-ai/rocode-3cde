import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  evaluation: yup.string().required(),
  individual_id: yup.string().nullable(),
});
