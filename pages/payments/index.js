import  React,{ useState,useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";


// Request for payment checkout form
// Wait for payment to be success
// If success display card to user
// Accept the payment from the user

const shopperResultUrl = "http://localhost:3000/status"

export default function Payments(props) {

  // Check to see if payment has been prepared
  const { query } = useRouter();
  const [payID, setPayID] = useState();

  const router = useRouter();
  useEffect(()=>{
      if(!router.isReady) return;

      // codes using router.query
      setPayID(router.query.id);
      //console.log(router.query.id)
      

  }, [router.isReady,setPayID]);


  if (!payID) return <div>Loading...</div>
  /*if (!props.data.id) return (
    <div>Failed to load payments. Please try again</div>
    )*/

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
            document.getElementById('payment-form').src = `https://eu-test.oppwa.com/v1/paymentWidgets.js?checkoutId={query.id}`
          </script>
        </Head>

        
        <script id="payment-form"></script>
       
        <form action={shopperResultUrl} className="paymentWidgets" data-brands="VISA MASTER AMEX"> </form>       
        
        </div>
      )
}