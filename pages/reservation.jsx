import Head from 'next/head'
import Image from 'next/image'
import image1 from "../public/reservation-1.jpg";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Réservation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles['a-propos']}>
        <Image src={image1} alt='reservation'/>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gridTemplateRows:'1fr'}}>
            <div style={{backgroundColor:'var(--orange)', height:'100%', display:'flex', justifyContent:'space-evenly', flexDirection:'column', alignItems:'center'}}>
              <h2>Coaching individuel</h2>
              <button>Réserver</button>
            </div>
            <div style={{backgroundColor:'var(--light-grey)', height:'100%', display:'flex', justifyContent:'space-evenly', flexDirection:'column', alignItems:'center'}}>
              <h2>Coaching de groupe </h2>
              <button>Réserver</button>
            </div>
            <div style={{backgroundColor:'var(--grey)', height:'100%', display:'flex', justifyContent:'space-evenly', flexDirection:'column', alignItems:'center'}}>
              <h2>Coaching entreprise</h2>
              <button>Réserver</button>
            </div>
          </div>
      </section>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
