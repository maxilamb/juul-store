import React from 'react';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './style.sass';

const validationSchema = yup.object().shape({
  fullname: yup.string().required('Это обязательное поле'),
  email: yup.string().email('Укажите email').required('Это обязательное поле'),
  message: yup
    .string()
    .min(10, 'Минимальное количество символов - 10')
    .required('Это обязательное поле'),
});

export default function FeedBack() {
  let { pathname } = useLocation();
  pathname = pathname.replace('/', '');
  const isContactForm = pathname === 'contact';

  const formik = useFormik({
    initialValues: {
      fullname: '',
      'track-code': '',
      email: '',
      message: '',
    },
    validationSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log('submit --->', values);
    },
  });
  const { errors, touched } = formik;

  return (
    <div id='feedback' className='min-vh-100 d-flex justify-content-center align-items-center'>
      <form className='shadow' onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <input
            className='form-control badge-pill'
            type='text'
            name='fullname'
            value={formik.values.fullname}
            onChange={formik.handleChange}
            placeholder='Представьтесь пожалуйста'
          />
          {errors.fullname && touched.fullname && (
            <p className='text-center text-danger'>{errors.fullname}</p>
          )}
        </div>
        {!isContactForm && (
          <div className='form-group'>
            <input
              className='form-control badge-pill'
              type='text'
              name='track-code'
              value={formik.values['track-code']}
              onChange={formik.handleChange}
              placeholder='Укажите ваш трек-код'
            />
          </div>
        )}
        <div className='form-group'>
          <input
            className='form-control badge-pill'
            type='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder='Укажите контактный email'
          />
          {errors.email && touched.email && (
            <p className='text-center text-danger'>{errors.email}</p>
          )}
        </div>
        <div className='form-group'>
          <textarea
            className='form-control badge-pill'
            name='message'
            value={formik.values.message}
            onChange={formik.handleChange}
            placeholder={isContactForm ? 'Ждём ваше сообщение' : 'Укажите причину возврата'}
          />
          {errors.message && touched.message && (
            <p className='text-center text-danger'>{errors.message}</p>
          )}
        </div>
        <button type='submit' className='btn btn-outline-success btn-block btn-lg rounded-pill'>
          Отправить
        </button>
      </form>
    </div>
  );
}
