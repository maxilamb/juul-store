import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Context from '../../../context';

const validationSchema = Yup.object().shape({
  fullname: Yup.string().min(6, 'Введите свои ФИО как в паспорте').required('Обязательное поле'),
  street: Yup.string().min(3, 'Укажите улицу').required('Обязательное поле'),
  house: Yup.number().min(1, 'Укажите действительный адрес').required('Обязательное поле'),
  country: Yup.string().required(),
  region: Yup.string().min(3, '* Укажите край/область/регион если это необходимо'),
  city: Yup.string().min(3, 'Укажите город').required('Обязательное поле'),
  postalCode: Yup.number().min(1, 'Укажите корректный почтовый код').required('Обязательное поле'),
  phone: Yup.string().required('Обязательное поле'),
  email: Yup.string().email('Укажите действительный email').required('Обязательное поле'),
});

export default function StepSecond() {
  const { dispatch, store } = useContext(Context);

  const formik = useFormik({
    initialValues: store,
    validationSchema,
    onSubmit: (data) => {
      dispatch({
        type: 'SET_USER_DATA',
        payload: data,
      });
      dispatch({
        type: 'CHANGE_FORM_STAGE',
        payload: 3,
      });
    },
  });

  const { errors, touched } = formik;

  return (
    <div className='step-second'>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <input
            className='form-control rounded-pill'
            type='text'
            name='fullname'
            value={formik.values.fullname}
            onChange={formik.handleChange}
            placeholder='Получатель'
          />
          <small className='text-muted'>* Данные должны совпадать с паспортными</small>
          {errors.fullname && touched.fullname ? (
            <p className='text-danger text-center'>{errors.fullname}</p>
          ) : null}
        </div>
        <div className='form-group'>
          <input
            className='form-control rounded-pill'
            type='text'
            name='street'
            value={formik.values.street}
            onChange={formik.handleChange}
            placeholder='Улица'
          />
          {errors.street && touched.street && (
            <p className='text-danger text-center'>{errors.street}</p>
          )}
        </div>
        <div className='form-group'>
          <input
            className='form-control rounded-pill'
            type='number'
            name='house'
            value={formik.values.house}
            onChange={formik.handleChange}
            placeholder='Дом, квартира и т. п.'
          />
          {errors.house && touched.house && (
            <p className='text-danger text-center'>{errors.house}</p>
          )}
        </div>
        <div className='form-group'>
          <input
            className='form-control rounded-pill'
            type='text'
            name='country'
            value={formik.values.country}
            onChange={formik.handleChange}
            placeholder='Страна'
            disabled
          />
          {errors.country && touched.country && (
            <p className='text-danger text-center'>{errors.country}</p>
          )}
        </div>
        <div className='form-group'>
          <input
            className='form-control rounded-pill'
            type='text'
            name='region'
            value={formik.values.region}
            onChange={formik.handleChange}
            placeholder='Край/Область/Регион'
          />
          {errors.region && touched.region && (
            <p className='text-danger text-center'>{errors.region}</p>
          )}
        </div>
        <div className='form-group'>
          <input
            className='form-control rounded-pill'
            type='text'
            name='city'
            value={formik.values.city}
            onChange={formik.handleChange}
            placeholder='Город'
          />
          {errors.city && touched.city && <p className='text-danger text-center'>{errors.city}</p>}
        </div>
        <div className='form-group'>
          <input
            className='form-control rounded-pill'
            type='number'
            name='postalCode'
            value={formik.values.postalCode}
            onChange={formik.handleChange}
            placeholder='Почтовый индекс'
          />
          {errors.postalCode && touched.postalCode && (
            <p className='text-danger text-center'>{errors.postalCode}</p>
          )}
        </div>
        <div className='form-group'>
          <input
            className='form-control rounded-pill'
            type='phone'
            name='phone'
            value={formik.values.phone}
            onChange={formik.handleChange}
            placeholder='Номер мобильного'
          />
          {errors.phone && touched.phone && (
            <p className='text-danger text-center'>{errors.phone}</p>
          )}
        </div>
        <div className='form-group'>
          <input
            className='form-control rounded-pill'
            type='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder='Email'
          />
          <small className='text-muted'>* Мы будем присылать информацию о статусе заказе</small>
          {errors.email && touched.email && (
            <p className='text-danger text-center'>{errors.email}</p>
          )}
        </div>
        <button
          className='btn btn-outline-danger btn-lg btn-block rounded-pill py-3 action'
          type='submit'
        >
          Перейти к оплате
        </button>
        <Link to='/' onClick={() => dispatch({ type: 'CHANGE_FORM_STAGE', payload: 1 })}>
          Назад
        </Link>
      </form>
    </div>
  );
}
