import axios from 'axios';
import icon from '../../assets/imgs/notification-icon.svg'
import { BASE_URL } from '../../utils/request';

import './styles.css'

type Props = {
  saleId: number;
}

function handleClick(id : number) {
  axios(`${BASE_URL}/sales/${id}/notification`).then(response => {
    console.log("SUCESSO");
  })
}

function NotificationButton( {saleId} : Props ) {
  return (
    <>
      <div className="astrometa-red-btn" onClick={() => handleClick(saleId)}>
        <img src={icon} alt="Notificar" />
      </div>
    </>
  );
}

export default NotificationButton;
