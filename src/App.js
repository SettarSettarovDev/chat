import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import AppContainer from './pages/AppContainer/AppContainer';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import ChatPage from './pages/ChatPage/ChatPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
import NotificationsPage from './pages/NotificationsPage/NotificationsPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import SignInPage from './pages/SignIn/SignInPage';
import SignUpPage from './pages/SignUp/SignUpPage';
import './App.css';

function App() {
  const { isAuth } = useSelector(state => state.auth);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="sign-in" />} />
        <Route
          path="sign-in"
          element={isAuth ? <Navigate to="/home" /> : <SignInPage />}
        />
        <Route
          path="sign-up"
          element={isAuth ? <Navigate to="/home" /> : <SignUpPage />}
        />
        {isAuth && (
          <Route path="/" element={<AppContainer />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        )}
        <Route
          path="*"
          element={isAuth ? <PageNotFound /> : <Navigate to="sign-in" />}
        />
      </Routes>
    </div>
  );
}

export default App;
