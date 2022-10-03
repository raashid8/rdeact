import '../styles/globals.css'
import Navbar from './home/nav'

function MyApp({ Component, pageProps }) {

  return<>
  <Navbar/>
  <Component {...pageProps} />
  </> 
}

export default MyApp
