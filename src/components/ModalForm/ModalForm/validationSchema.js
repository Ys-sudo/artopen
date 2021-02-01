import * as Yup from 'yup'


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object().shape({
  maski: Yup.string(),
  przylbice: Yup.string(),
  dezynfekcja: Yup.string(),
  imię: Yup.string()
    .min(2, 'Za krótkie')
    .max(50, 'Za długie')
    .required('Imię jest wymagane!'),
  email: Yup.string()
    .email('Wpisz prawidłowy email!')
    .required('Email jest wymagany!'),
  telefon: Yup.string()
    .matches(phoneRegExp, 'Numer telefonu jest nieprawidłowy!')
    .required('Numer telefonu jest wymagany!'),
  wiadomość: Yup.string()
    .required('Wiadomość jest wymagana!'),
})

export default validationSchema
