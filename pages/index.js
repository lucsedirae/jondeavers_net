//* Dependencies
import styles from '../styles/Home.module.scss';

//* Custom components
import CardArray from '../components/CardArray';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
export default function Home() {
  return (
    <Layout>
      <Hero />
      {/* //! Replace contact card with card array component that gives grid to the cards */}
      <CardArray />
    </Layout>
  );
}
