import Head from "next/head";
import  React,{ useContext } from "react";
import {paymentContext} from "../../context/payments/paymentContext";
import { useRouter } from 'next/router'

export async function getStatus(path) {

    const url=`https://eu-test.oppwa.com${path}`;
    url += '?entityId=8a8294174e735d0c014e78cf26461790';

    const response = await fetch(url,{
        headers: {
            'Authorization':'Bearer OGE4Mjk0MTc0ZTczNWQwYzAxNGU3OGNmMjY2YjE3OTR8cXl5ZkhDTjgzZQ=='
        }
      });

    const responseJSON = await response.json();

    return responseJSON;

}


export default function PaymentStatus(props) {
  
  const router = useRouter()
  const {resourcePath} = router.query;
  if (typeof resourcePath === "undefined"){
      // do nothing
  } else {
    let status = getStatus(resourcePath);
    if(typeof (status.result) === "undefined"){
      return(
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

          <h1> loading...</h1>
        
        </div>
      )
    }else {
      return(
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

          <h1> succesful...</h1>
        
        </div>
      )
    }
  }


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
  
            <h1> loading...</h1>
          
          </div>
      )
    
  
      
}