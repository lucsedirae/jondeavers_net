//* Dependencies
import Head from 'next/head';

//* Custom components
import Navibar from './Navibar';
import Footer from './Footer';
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Jon Deavers - Portfolio</title>
      </Head>

      <Navibar />
      {children}
      <Footer />
    </div>
  );
}
