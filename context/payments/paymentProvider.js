import  { useState } from "react";
import {paymentContext} from './paymentContext';

export function PaymentProvider({ children }) {
    const [payerName, setPayerName] = useState('');
    const [recipientPaymentEmail, setRecipientPaymentEmail] = useState('');
    const [amount, setAmount] = useState(0);
    return (
      <paymentContext.Provider 
      value={{payerName, setPayerName,recipientPaymentEmail, setRecipientPaymentEmail,amount, setAmount}}>{children}
        </paymentContext.Provider>
    );
  }