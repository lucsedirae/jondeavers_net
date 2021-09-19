import styles from '../styles/Home.module.scss';

import CardArray from '../components/CardArray';
import ContactCard from '../components/ContactCard';
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
