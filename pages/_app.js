import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { PeachProvider } from "../src/contexts/payment/providers/peach"

function MyApp({ 
  Component,
  pageProps: { session, ...pageProps }
 } ) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <PeachProvider>
        <Component {...pageProps} />
      </PeachProvider>
    </SessionProvider>
  )
}

export default MyApp
