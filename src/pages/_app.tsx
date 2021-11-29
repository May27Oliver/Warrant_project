import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import 'styles/globals.css';
import Header from 'src/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Header>
      <Component {...pageProps} />
    </Header>
  );
}

export default MyApp;
