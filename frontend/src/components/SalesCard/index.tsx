import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "../NotificationButton";
import "./styles.css";

function SalesCard() {
  return (
    <>
      <div className="astrometa-card">
        <h2 className="astrometa-sales-title">Vendas</h2>
        <div>
          <div className="astrometa-form-control-container">
            <DatePicker
              selected={new Date()}
              onChange={(date: Date) => {}}
              className="astrometa-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="astrometa-form-control-container">
            <DatePicker
              selected={new Date()}
              onChange={(date: Date) => {}}
              className="astrometa-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>

        <div>
          <table className="astrometa-sales-table">
            <thead>
              <tr>
                <th className="show992">ID</th>
                <th className="show576">Data</th>
                <th>Vendedor</th>
                <th className="show992">Visitas</th>
                <th className="show992">Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="show992">#268</td>
                <td className="show576">25/08/2022</td>
                <td>Anakin</td>
                <td className="show992">20</td>
                <td className="show992">14</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="astrometa-red-btn-container">
                    <div className="astrometa-red-btn">
                      <NotificationButton />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show992">#268</td>
                <td className="show576">25/08/2022</td>
                <td>Anakin</td>
                <td className="show992">20</td>
                <td className="show992">14</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="astrometa-red-btn-container">
                    <div className="astrometa-red-btn">
                      <NotificationButton />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show992">#268</td>
                <td className="show576">25/08/2022</td>
                <td>Anakin</td>
                <td className="show992">20</td>
                <td className="show992">14</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="astrometa-red-btn-container">
                    <div className="astrometa-red-btn">
                      <NotificationButton />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show992">#268</td>
                <td className="show576">25/08/2022</td>
                <td>Anakin</td>
                <td className="show992">20</td>
                <td className="show992">14</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="astrometa-red-btn-container">
                    <div className="astrometa-red-btn">
                      <NotificationButton />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show992">#268</td>
                <td className="show576">25/08/2022</td>
                <td>Anakin</td>
                <td className="show992">20</td>
                <td className="show992">14</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="astrometa-red-btn-container">
                    <div className="astrometa-red-btn">
                      <NotificationButton />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show992">#268</td>
                <td className="show576">25/08/2022</td>
                <td>Anakin</td>
                <td className="show992">20</td>
                <td className="show992">14</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="astrometa-red-btn-container">
                    <div className="astrometa-red-btn">
                      <NotificationButton />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SalesCard;
