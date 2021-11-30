import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import 'styles/globals.css';
import Layout from 'src/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
