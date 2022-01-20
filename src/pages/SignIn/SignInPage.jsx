import axios from 'axios';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Popup from '../../components/pop-up/pop-up.component';
import { setIsError, setToken } from '../../redux/authSlice';
import Authentication from '../../components/Authentication/Authentication-component';
import './SignInPage.styles.scss';
import ErrorMessage from '../../components/Error-message/error-message.component';

const SignInPage = () => {
  const dispatch = useDispatch();
  const { isError } = useSelector(state => state.auth);

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      });
      dispatch(setToken(res.data.token));
      setIsOpenPopUp(true);
      dispatch(setIsError(null));
    } catch (e) {
      dispatch(setIsError(e.response.data.message));
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const closePopUp = () => {
    setIsOpenPopUp(false);
  };

  return (
    <Fragment>
      <div className="sign-in">
        <div className="sign-in-container">
          <div className="sign-in__title">
            <span className="sign-in__title--active">Sign In</span>
            <span>/</span>
            <span className="">
              <Link to={'/sign-up'}>Sign Up</Link>
            </span>
          </div>
          <form className="sign-in-form" onSubmit={handleSubmit}>
            <div className="sign-in-form__group">
              <input
                id="email"
                className="sign-in-form__input"
                type="email"
                name="email"
                value={email}
                placeholder="E-Mail"
                onChange={handleChange}
                required
              />
            </div>
            <div className="sign-in-form__group">
              <input
                id="password"
                className="sign-in-form__input"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
            {isError && <ErrorMessage message={isError} />}
            <button className="sign-in-form__button" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
      {isOpenPopUp && (
        <Popup>
          <Authentication
            closePopUp={closePopUp}
            userCredentials={userCredentials}
            fromPage="sign-in"
          />
        </Popup>
      )}
    </Fragment>
  );
};

export default SignInPage;
