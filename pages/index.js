import styles from '../styles/Home.module.css';
import { useSession, signIn, signOut, getSession} from "next-auth/react";
import {peachContext} from "../src/contexts/payment/payment"
import  React,{ useContext } from "react";
import { useRouter } from "next/router";
import { Header, Footer, NavBar, SideBar } from '../components/HomePage';


export async function getServerSideProps(context) {

  const session = await getSession(context);
  console.log(session);

  if (!session) return {
    props: {
      balance: "0.00"
    }
  }

  // Fetch user balance info from database API
  // var result = await (await fetch("***")).json(); //input API that fetchs balance
    var result = {
      balance: 300
    }
  return {
    props: {
      balance: result.balance
    }
  }
}



export default function Home(props) {

  // Allow state to be used by any pages in the application
  const {data: session, status} = useSession();

  const {payerName, setPayerName, recipientPaymentEmail, setRecipientPaymentEmail,amount, setAmount} = useContext(peachContext);
  const router = useRouter();
  const user ={
    session: session,
    balance: props.balance
  }

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
      alert(`Not enough money to pay ${recipientPaymentEmail}`);
    }
  }

  return (
    <div className={styles.container}>
      <Header  />

      <main className={"index-page sidebar-collapse"}>
       <NavBar user={user} />
      
        <div className="wrapper">
          <div className="page-header clear-filter" filter-color="orange">
            <div className="page-header-image" data-parallax="true" style={{backgroundImage: "url('/header.jpg');"}}>
            </div>
            <div className="container">
              <div className="content-center brand">
                <h1 className="h1-seo">WASP</h1>
                <h3>A simple way to pay someone</h3>
              </div>
              <div style={{paddingTop: "26rem;"}}>
                  <h3>Pay someone:</h3>
                  <div className="row">
                    <div className="col-lg-6 text-center col-md-8 ml-auto mr-auto">
                      <div className="input-group input-lg">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="now-ui-icons users_circle-08"></i>
                          </span>
                        </div>
                        <input type="text" onChange={event => setPayerName(event.target.value)} style={{background: "white"}} className="form-control" placeholder="Payer's name..." />
                      </div>
                      
                      <div className="input-group input-lg">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="now-ui-icons users_circle-08"></i>
                          </span>
                        </div>
                        <input type="text" onChange={event => setRecipientPaymentEmail(event.target.value)} style={{background: "white"}} className="form-control" placeholder="Recipients payment email..." />
                      </div>

                      <div className="input-group input-lg">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="now-ui-icons users_circle-08"></i>
                          </span>
                        </div>
                        <input type="text" onChange={event => setAmount(event.target.value)} style={{background: "white"}} className="form-control" placeholder="Amount in ZAR..." />
                      </div>
                  
                      <div className="textarea-container" style={{paddingTop: "2rem"}}>
                        <textarea className="form-control" style={{background: "white"}} name="name" rows="4" cols="80" placeholder="Type a message..."></textarea>
                      </div>
                      <div className="send-button" style={{paddingTop: "2rem"}}>
                        <a onClick={Payment} href="#pablo" className="btn btn-primary btn-round btn-block btn-lg">Send Payment</a>
                      </div>
                    </div>
              </div>
              </div>
            </div>

          </div>

          <Footer />
        </div>
      </main>

    </div>
  )
}