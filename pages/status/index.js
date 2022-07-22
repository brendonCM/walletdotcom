import Head from "next/head";
import  React,{ useContext, useEffect, useState } from "react";
import {paymentContext} from "../../context/payments/paymentContext";
import { useRouter } from 'next/router'



async function getStatus(path){
  const res = await fetch("api/payments/statusPayments",{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({path: path})
  });
  const resJSON = await res.json();
  return resJSON;
}

export default function PaymentStatus(props) {

  const [statusMessage, setStatusMessage] = useState({})
  
  const router = useRouter();

  useEffect(()=>{
    if(!router.isReady) return;

    async function getStatus(){
      const res = await fetch("api/payments/statusPayments",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({path: router.query.resourcePath})
      });
      const resJSON = await res.json();
      setStatusMessage(resJSON);
    }
    getStatus();

    //const status = getStatus(router.query.resourcePath);
    //console.log(status)
    //setStatusMessage(status)
    

  }, [router.isReady]);
  //console.log(statusMessage["amount"]);
  const status = JSON.stringify(statusMessage);
  console.log(status)


  if(statusMessage.id){
    return (
      <div className="peach-payments-status" > 
      <Head>
        <meta charset="utf-8" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>
        Walletdotcom
        </title>
        <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
      </Head>

       <h1>Payment Succesful</h1>

       <p> The payment of {statusMessage.amount} to Brendon was succesful.</p>

       <script>
          setTimeout( function() {
            console.log("test")
            
          }, 5);
        </script>
      
      </div>
    )
  }

  return (
    <div className="peach-payments-status" > 
      <Head>
        <meta charset="utf-8" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>
        Wasp
        </title>
        <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
      </Head>

        <h1> Please do not refresh the page. Your payment is being processed.</h1>
        
      
      </div>
  )
    
  
      
}