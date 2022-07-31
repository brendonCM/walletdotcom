import  { useState } from "react";
import {peachContext} from '../payment';

export function PeachProvider({ children }) {
    const [payerName, setPayerName] = useState('');
    const [recipientPaymentEmail, setRecipientPaymentEmail] = useState('');
    const [amount, setAmount] = useState(0);
    const [paymentId,setPaymentId] = useState('');
    return (
      <peachContext.Provider 
      value={{payerName, setPayerName,
      recipientPaymentEmail, setRecipientPaymentEmail,
      amount, setAmount, 
      paymentId, setPaymentId}}>{children}
        </peachContext.Provider>
    );
  }