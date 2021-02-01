import Head from 'next/head'
import styles from '../styles/Home.module.css'
import products from '../products.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Space Jelly Shop
        </h1>

        <p className={styles.description}>
          The best Space Jelly items around!
        </p>

        <ul className={styles.grid}>
          {products.map(product => (
            <li key={product?.id} className={styles.gridItem}>
              <a href={product?.href} className={styles.card}>
                <h3>{product?.name}</h3>
                <p>{`£${product?.price}`}</p>
                <img src={product?.src} alt={product?.alt}/>
                <p>{product?.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
        </a>
      </footer>
    </div>
  )
}
