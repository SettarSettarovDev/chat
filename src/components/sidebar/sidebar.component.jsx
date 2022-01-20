import { NavLink } from 'react-router-dom';
import './sidebar.styles.scss';
import { ReactComponent as HomeIcon } from '../../assets/home-icon.svg';
import { ReactComponent as ChatIcon } from '../../assets/chat-icon.svg';
import { ReactComponent as ContactIcon } from '../../assets/contact-icon.svg';
import { ReactComponent as NotificationsIcon } from '../../assets/notifications-icon.svg';
import { ReactComponent as CalendarIcon } from '../../assets/calendar-icon.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings-icon.svg';
import { ReactComponent as LogoutIcon } from '../../assets/logout-icon.svg';
import { ReactComponent as ArrowDown } from '../../assets/arrow-down.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img
          src={require('../../assets/user-photo.png')}
          alt="user"
          className="sidebar__logo-img"
        />
        <div className="sidebar__logo-name">
          <p className="sidebar__logo-text">Henry Jabbawockiez</p>
          <ArrowDown />
        </div>
      </div>
      <div className="sidebar__options">
        <NavLink className="sidebar__options-item" to="/home">
          <HomeIcon className="sidebar__options-icon" />
          <p className="sidebar__options-text">Home</p>
        </NavLink>
        <NavLink className="sidebar__options-item" to="/chat">
          <ChatIcon className="sidebar__options-icon" />
          <p className="sidebar__options-text">Chat</p>
        </NavLink>
        <NavLink className="sidebar__options-item" to="/contact">
          <ContactIcon className="sidebar__options-icon" />
          <p className="sidebar__options-text">Contact</p>
        </NavLink>
        <NavLink className="sidebar__options-item" to="/notifications">
          <NotificationsIcon className="sidebar__options-icon" />
          <p className="sidebar__options-text">Notifications</p>
        </NavLink>
        <NavLink className="sidebar__options-item" to="/calendar">
          <CalendarIcon className="sidebar__options-icon" />
          <p className="sidebar__options-text">Calendar</p>
        </NavLink>
        <NavLink className="sidebar__options-item" to="/settings">
          <SettingsIcon className="sidebar__options-icon" />
          <p className="sidebar__options-text">Settings</p>
        </NavLink>
        <NavLink className="sidebar__options-item" to="/sign-in">
          <LogoutIcon className="sidebar__options-icon" />
          <p className="sidebar__options-text">Log out</p>
        </NavLink>
      </div>
    </div>
  );
};
export default Sidebar;
