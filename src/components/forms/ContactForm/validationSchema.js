import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Za krótkie')
    .max(50, 'Za długie')
    .required('Imię jest wymagane!'),
  email: Yup.string()
    .email('Wpisz prawidłowy email!')
    .required('Email jest wymagany!'),
  message: Yup.string()
    .required('Wiadomość jest wymagana!'),
})

export default validationSchema
