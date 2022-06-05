import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useSession, signIn, signOut, getSession} from "next-auth/client";
import {paymentContext} from "../context/payments/paymentContext";
import  React,{ useContext } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {

  const session = await getSession(context);
  console.log(session);

  if (!session) return {
    props: {
      balance: "300.00"
    }
  }

  var result = await (await fetch("***")).json(); //input API that fetchs balance

  return {
    props: {
      balance: result.balance
    }
  }
}



export default function Home(props) {
  // Allow state to be used by any pages in the application
  const [session] = useSession();
  const {payerName, setPayerName, recipientPaymentEmail, setRecipientPaymentEmail,amount, setAmount} = useContext(paymentContext);
  const router = useRouter();

  async function Payment() {
    // Check if user has enough money to send data
    // If enough redirect to page for payment
    // Before redirect, Send the request parameters server-to-server to prepare the payment form.
    
    console.log(`Payment made to ${payerName}, ${recipientPaymentEmail}, ${amount}`);
    if(amount <= props.balance){
      
      const res = await fetch("api/payments/initPayments",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({amount: amount})
      });
      const resJSON = await res.json();
      router.push({
        pathname: '/payments', 
        query: {id: resJSON.payid}
      });
      // set the id and push to card payments page
     
    } else{
      console.log(`Not enough money to pay ${recipientPaymentEmail}`);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <meta charset="utf-8" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>
        Walletdotcom
        </title>
        <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
        <link href="/bootstrap.min.css" rel="stylesheet" />
        <link href="/now-ui-kit.css?v=1.3.0" rel="stylesheet" />
        <link href="/demo.css" rel="stylesheet" />

        <script src="/jquery.min.js" type="text/javascript"></script>
        <script src="/popper.min.js" type="text/javascript"></script>
        <script src="/bootstrap.min.js" type="text/javascript"></script>
        <script src="/bootstrap-switch.js"></script>
        <script src="/nouislider.min.js" type="text/javascript"></script>
        <script src="/bootstrap-datepicker.js" type="text/javascript"></script>
        <script src="/now-ui-kit.js?v=1.3.0" type="text/javascript"></script>
      </Head>

      <main className={"index-page sidebar-collapse"}>
      <nav class="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
    <div class="container">
      <div class="navbar-translate">
        <a class="navbar-brand" href="./index.html" rel="tooltip" data-placement="bottom" target="_blank">
        Walletdotcom
        </a>
        <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-bar top-bar"></span>
          <span class="navbar-toggler-bar middle-bar"></span>
          <span class="navbar-toggler-bar bottom-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="/blurred-image-1.jpg">
        <ul class="navbar-nav">
          <li class="nav-item">
            {
              session ?  (<p class="nav-link">Payment email: {session.user.email}</p>) : (<p class="nav-link">Payment email: ### ### ### ###</p>)
            }
            
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)" onClick="scrollToDownload()">
              <i class="now-ui-icons business_money-coins"></i>
              <p>Balance: R{props.balance}</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)" onClick="scrollToDownload()">
              <i class="now-ui-icons arrows-1_cloud-download-93"></i>
              <p>Withdraw money</p>
            </a>
          </li>
          {
            session ?            
            (<li class="nav-item">
              <a class="nav-link" href="javascript:void(0)" onClick={signOut}>
                <i class="now-ui-icons objects_key-25"></i>
                <p>Logout</p>
              </a>
            </li>) : 
            (<li class="nav-item">
            <a class="nav-link" href="javascript:void(0)" onClick={signIn}>
              <i class="now-ui-icons objects_key-25"></i>
              <p>Login</p>
            </a>
          </li>)  
          }
        </ul>
      </div>
    </div>
  </nav>
  <div class="wrapper">
    <div class="page-header clear-filter" filter-color="orange">
      <div class="page-header-image" data-parallax="true" style={{backgroundImage: "url('/header.jpg');"}}>
      </div>
      <div class="container">
        <div class="content-center brand">
          <h1 class="h1-seo">Walletdotcom</h1>
          <h3>A simple way to pay someone</h3>
        </div>
        <div style={{paddingTop: "26rem;"}}>
            <h3>Pay someone:</h3>
            <div class="row">
              <div class="col-lg-6 text-center col-md-8 ml-auto mr-auto">
                <div class="input-group input-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons users_circle-08"></i>
                    </span>
                  </div>
                  <input type="text" onChange={event => setPayerName(event.target.value)} style={{background: "white"}} class="form-control" placeholder="Payer's name..." />
                </div>
                
                <div class="input-group input-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons users_circle-08"></i>
                    </span>
                  </div>
                  <input type="text" onChange={event => setRecipientPaymentEmail(event.target.value)} style={{background: "white"}} class="form-control" placeholder="Recipients payment email..." />
                </div>

                <div class="input-group input-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons users_circle-08"></i>
                    </span>
                  </div>
                  <input type="text" onChange={event => setAmount(event.target.value)} style={{background: "white"}} class="form-control" placeholder="Amount in ZAR..." />
                </div>
             
                <div class="textarea-container" style={{paddingTop: "2rem"}}>
                  <textarea class="form-control" style={{background: "white"}} name="name" rows="4" cols="80" placeholder="Type a message..."></textarea>
                </div>
                <div class="send-button" style={{paddingTop: "2rem"}}>
                  <a onClick={Payment} href="#pablo" class="btn btn-primary btn-round btn-block btn-lg">Send Message</a>
                </div>
              </div>
        </div>
        </div>
      </div>

    </div>
  
    <footer class="footer" data-background-color="black">
      <div class=" container ">
          Coded by
          <a href="https://getsimplewebsolutions.com/" target="_blank">Simple Web Solutions</a>.
        </div>
    </footer>
  </div>
      </main>

    </div>
  )
}
