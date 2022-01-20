import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, setIsError } from '../../redux/authSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { token, isAuth } = useSelector(state => state.auth);

  useEffect(() => {
    console.log(isAuth);
    if (isAuth) {
      (async () => {
        try {
          const { data: currentUser } = await axios.get(
            'http://localhost:5000/find',
            {
              headers: {
                Authorization: token,
              },
            }
          );
          dispatch(setCurrentUser(currentUser));
        } catch (e) {
          dispatch(setIsError(e.response.data.message));
        }
      })();
    }
  }, [dispatch, isAuth, token]);

  return <div>HomePage</div>;
};
export default HomePage;
