import icon from '../../assets/imgs/notification-icon.svg'

import './styles.css'

function NotificationButton() {
  return (
    <>
      <div className="astrometa-red-btn">
        <img src={icon} alt="Notificar" />
      </div>
    </>
  );
}

export default NotificationButton;
