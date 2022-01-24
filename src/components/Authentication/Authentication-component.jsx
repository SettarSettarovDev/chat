import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginByToken,
  loginSecret,
  registerSecret,
  removeError,
} from '../../redux/authSlice';
import './Authentication.styles.scss';
import ErrorMessage from '../Error-message/error-message.component';

const Authentication = ({ closePopUp, userCredentials, fromPage }) => {
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.auth);

  const { email, firstName, lastName, password } = userCredentials;

  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');

  const secretKey = `${value1}${value2}${value3}${value4}${value5}${value6}`;

  const handleSubmit = async e => {
    e.preventDefault();

    if (fromPage === 'sign-up') {
      const userCredentials = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        secretKey: secretKey,
      };

      const res = await dispatch(registerSecret(userCredentials));
      if (res.hasOwnProperty('error')) return;
      if (error) {
        dispatch(removeError());
      }
      await dispatch(loginByToken());
    }

    if (fromPage === 'sign-in') {
      const res = await dispatch(loginSecret({ secretKey }));
      if (res.hasOwnProperty('error')) return;
      if (error) {
        dispatch(removeError());
      }
      await dispatch(loginByToken());
    }
  };

  return (
    <div className="authentication">
      <div className="authentication-container">
        <span className="authentication__title">Authentication</span>
        <form className="authentication-form" onSubmit={handleSubmit}>
          <div className="authentication-form__inputs-group">
            <input
              pattern="[0-9]"
              maxLength="1"
              className="authentication-form__input"
              type="text"
              value={value1}
              onChange={e => setValue1(e.target.value)}
              required
            />
            <input
              pattern="[0-9]"
              maxLength="1"
              className="authentication-form__input"
              type="text"
              value={value2}
              onChange={e => setValue2(e.target.value)}
              required
            />
            <input
              pattern="[0-9]"
              maxLength="1"
              className="authentication-form__input"
              type="text"
              value={value3}
              onChange={e => setValue3(e.target.value)}
              required
            />
            <input
              pattern="[0-9]"
              maxLength="1"
              className="authentication-form__input"
              type="text"
              value={value4}
              onChange={e => setValue4(e.target.value)}
              required
            />
            <input
              pattern="[0-9]"
              maxLength="1"
              className="authentication-form__input"
              type="text"
              value={value5}
              onChange={e => setValue5(e.target.value)}
              required
            />
            <input
              pattern="[0-9]"
              maxLength="1"
              className="authentication-form__input"
              type="text"
              value={value6}
              onChange={e => setValue6(e.target.value)}
              required
            />
          </div>
          {error && <ErrorMessage message={error} />}
          <button className="authentication-form__button" type="submit">
            Confirm
          </button>
        </form>
        <button className="authentication__close-button" onClick={closePopUp}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Authentication;
