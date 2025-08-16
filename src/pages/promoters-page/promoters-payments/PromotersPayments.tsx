// src/components/PromotersPayments.jsx
import "./promoterspayments.scss";
import { FaCheckCircle } from "react-icons/fa";

const paymentProofs = [
  {
    id: 1,
    promoterName: "Carlos M.",
    country: "Colombia",
    flag: "🇨🇴",
    amount: 12.50,
    currency: "USDC",
    date: "2025-08-14T14:32:00Z",
    transactionId: "BP-8F2A6C",
    note: "Pago por promoción de reto #45"
  },
  {
    id: 2,
    promoterName: "María G.",
    country: "México",
    flag: "🇲🇽",
    amount: 20.00,
    currency: "USDC",
    date: "2025-08-14T09:15:00Z",
    transactionId: "BP-7E9B4K",
    note: "Pago por referidos activos"
  },
  {
    id: 3,
    promoterName: "Andrés P.",
    country: "Argentina",
    flag: "🇦🇷",
    amount: 8.75,
    currency: "USDC",
    date: "2025-08-13T18:47:00Z",
    transactionId: "BP-4C1D9M",
    note: "Bonificación por tráfico en reto #38"
  },
  {
    id: 4,
    promoterName: "Lucía R.",
    country: "España",
    flag: "🇪🇸",
    amount: 15.30,
    currency: "USDC",
    date: "2025-08-13T11:02:00Z",
    transactionId: "BP-3A6F7X",
    note: "Pago semanal de comisiones"
  },
  {
    id: 5,
    promoterName: "David L.",
    country: "Perú",
    flag: "🇵🇪",
    amount: 11.00,
    currency: "USDC",
    date: "2025-08-12T16:20:00Z",
    transactionId: "BP-1H9P4V",
    note: "Premio por alcanzar meta de visualizaciones"
  }
];

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString("es-ES", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function PromotersPayments() {
  return (
    <div className="promoters-payments">
      <h2 className="title">¡Pagos A Promotores Completados!</h2>
      <ul className="payments-list">
        {paymentProofs.map((payment) => (
          <li key={payment.id} className="payment-item">
            <div className="payment-left">
              <span className="check"><FaCheckCircle /></span>
              <span className="flag">{payment.flag}</span>
              <div className="user">
                <span className="name">{payment.promoterName}</span>
                <span className="user-id">{"@user_id213"}</span>
              </div>
            </div>
            <div className="payment-center">
              <span className="note">{payment.note}</span>
              <span className="date">{formatDate(payment.date)}</span>
            </div>
            <div className="payment-right">
              <span className="amount">
                ${payment.amount.toFixed(2)} <span>({payment.currency} - Polygon)</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PromotersPayments;
