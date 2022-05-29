import  { useState } from "react";
import {paymentContext} from './paymentContext';

export function PaymentProvider({ children }) {
    const [payerName, setPayerName] = useState('');
    const [recipientPaymentEmail, setRecipientPaymentEmail] = useState('');
    const [amount, setAmount] = useState(0);
    const [paymentId,setPaymentId] = useState('');
    return (
      <paymentContext.Provider 
      value={{payerName, setPayerName,
      recipientPaymentEmail, setRecipientPaymentEmail,
      amount, setAmount, 
      paymentId, setPaymentId}}>{children}
        </paymentContext.Provider>
    );
  }