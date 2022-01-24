import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.styles.scss';
import { useDispatch } from 'react-redux';
import { register, removeError } from '../../redux/authSlice';
import Authentication from '../../components/Authentication/Authentication-component';
import Popup from '../../components/pop-up/pop-up.component';
import { useSelector } from 'react-redux';
import ErrorMessage from '../../components/Error-message/error-message.component';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.auth);

  const [userCredentials, setUserCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  const { email, password, firstName, lastName } = userCredentials;

  useEffect(() => {
    if (error) {
      dispatch(removeError());
    }
  }, [dispatch]);

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await dispatch(register(email));

    if (error) {
      dispatch(removeError());
    }

    if (res.hasOwnProperty('error')) return;
    setIsOpenPopUp(true);
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const closePopUp = () => {
    setIsOpenPopUp(false);
    dispatch(removeError());
  };

  return (
    <Fragment>
      <div className="sign-up">
        <div className="sign-up-container">
          <div className="sign-up__title">
            <span className="">
              <Link to={'/sign-in'}>Sign In</Link>
            </span>
            <span>/</span>
            <span className="sign-up__title--active">Sign Up</span>
          </div>
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <div className="sign-up-form__group">
              <input
                id="firstName"
                className="sign-up-form__input"
                type="text"
                name="firstName"
                value={firstName}
                placeholder="First name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="sign-up-form__group">
              <input
                id="lastName"
                className="sign-up-form__input"
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Last name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="sign-up-form__group">
              <input
                id="email"
                className="sign-up-form__input"
                type="email"
                name="email"
                value={email}
                placeholder="E-Mail"
                onChange={handleChange}
                required
              />
            </div>
            <div className="sign-up-form__group">
              <input
                id="password"
                className="sign-up-form__input"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
            {error && <ErrorMessage message={error} />}
            <button className="sign-up-form__button" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
      {isOpenPopUp && (
        <Popup>
          <Authentication
            closePopUp={closePopUp}
            userCredentials={userCredentials}
            fromPage="sign-up"
          />
        </Popup>
      )}
    </Fragment>
  );
};

export default SignUpPage;
