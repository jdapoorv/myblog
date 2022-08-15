import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/global.css';



function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
    
  )
}

export default App