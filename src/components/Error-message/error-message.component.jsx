import './error-message.style.scss';

const ErrorMessage = ({ message }) => {
  return <div className="error">{message}</div>;
};

export default ErrorMessage;
