import Layout from '../components/layout/layout';
import '../styles/globals.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
      <title>next events</title>
      <meta name='description' content='Next events'/>
        <meta name='viewport' content='initial-scale=1.0, width=device.width'/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
