import '../styles/globals.css'
import {Provider } from "next-auth/client";
import {PaymentProvider} from "../context/payments/paymentProvider";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session = {pageProps.session}>
      <Component {...pageProps} />
    </Provider>,
    <PaymentProvider>
    <Component {...pageProps} />
  </PaymentProvider>
  )
}

export default MyApp
