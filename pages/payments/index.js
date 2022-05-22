import {paymentContext} from "../../context/payments/paymentContext";
import  React,{ useContext } from "react";
import { checkout, statusPayment } from "../../lib/modules/payments"
import Head from "next/head";
import Script from 'next/script'


// Request for payment checkout form
// Wait for payment to be success
// If success display card to user
// Accept the payment from the user

export async function getServerSideProps(context) {

  // Get payment

  const url='https://eu-test.oppwa.com/v1/checkouts';
	const data = 'entityId=8a8294174e735d0c014e78cf26461790&amount=92.00&currency=ZAR&paymentType=DB';

	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': data.length,
			'Authorization':'Bearer OGE4Mjk0MTc0ZTczNWQwYzAxNGU3OGNmMjY2YjE3OTR8cXl5ZkhDTjgzZQ=='
		}
	};

  const response = await fetch(url,{
    method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': data.length,
			'Authorization':'Bearer OGE4Mjk0MTc0ZTczNWQwYzAxNGU3OGNmMjY2YjE3OTR8cXl5ZkhDTjgzZQ=='
		},
    body: data
  });

  const responseJSON = await response.json();
  
  return {
    props: {
      data: responseJSON
    }
  }
}


export default function Payments(props) {

  const shopperResultUrl = "http://localhost:3000"

  //const {payerName, setPayerName, recipientPaymentEmail, setRecipientPaymentEmail,amount, setAmount} = useContext(paymentContext);

    return (
        
        <div className="peach-payments" > 
        <Head>
          <meta charset="utf-8" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <title>
          Walletdotcom
          </title>
          <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
          <script>
            document.getElementById('payment-form').src = `https://eu-test.oppwa.com/v1/paymentWidgets.js?checkoutId={props.data.id}`
          </script>
        </Head>

        
        <script id="payment-form"></script>
       
        <form action={shopperResultUrl} className="paymentWidgets" data-brands="VISA MASTER AMEX"> </form>       
        
        </div>
      )
}