import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return ( 
  <main className={styles.container}>
    <Sidebar className={styles.sidebar}/>
    <Component {...pageProps} />
  </main>)
        
   
}

export default MyApp
