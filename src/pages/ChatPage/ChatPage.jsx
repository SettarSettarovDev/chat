import { ReactComponent as AttachIcon } from '../../assets/attach-icon.svg';
import { ReactComponent as MoreIcon } from '../../assets/more-vertical-icon.svg';
import { ReactComponent as AddIcon } from '../../assets/plus-icon.svg';
import { ReactComponent as SendIcon } from '../../assets/navigation-2-icon.svg';
import { ReactComponent as SmileIcon } from '../../assets/smile-icon.svg';

import './ChatPage.styles.scss';

const ChatPage = () => {
  return (
    <div className="chats-container">
      <div className="chats">Chats</div>
      <div className="messages">
        <div className="messages-header">
          <img src={require('../../assets/user-photo-1.png')} alt="user" />
          <div className="messages-header__user">
            <span className="messages-header__user-name">Nika Jerrardo</span>
            <span className="messages-header__user-status">
              last online 5 hours ago
            </span>
          </div>
          <div className="messages-header__icon">
            <AttachIcon />
          </div>
          <div className="messages-header__icon">
            <MoreIcon />
          </div>
        </div>
        <div className="messages-main">
          <div className="messages-main__body">1</div>
          <div className="messages-main__input">
            <div className="messages-main__input-icon">
              <AddIcon />
            </div>

            <input type="text" placeholder="Type a message here" />
            <div className="messages-main__input-icon messages-main__input-icon--smile">
              <SmileIcon />
            </div>

            <div className="messages-main__input-icon">
              <SendIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatPage;
