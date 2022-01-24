import React from 'react';
import validate from './validate';
import useForm from './useForm';
import PhoneInput from "react-phone-number-input";
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  
  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Register For the Events
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your Name'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your Email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Phone Number</label>
          <input
            className='form-input'
            type='tel'
            name='phonenumber'
            placeholder='Enter your Phone Number'
            value={values.phonenumber}
            onChange={handleChange}
          />
          {errors.phonenumber && <p>{errors.phonenumber}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor="event" className='form-label'>Event name</label>
          <input
            className='form-input'
            list='events'
            name='event'
            id='event'
            placeholder='Choose the Event'
            value={values.event}
            onChange={handleChange}
          />
          <datalist id='events'>
            <option value="Coding">Coding</option>
            <option value="Quizzing">Quizzing</option>
            <option value="webd">WEbd</option>
            <option value="workshop">Workshop</option>
          </datalist>
          {errors.event && <p>{errors.event}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Register
        </button>
        {/* <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span> */}
      </form>
    </div>
    
  );
};

export default FormSignup;