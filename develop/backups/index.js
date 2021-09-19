import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Link from 'next/link';

import { Navbar, Nav, Image } from 'react-bootstrap';
import Hero from '../components/Hero';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Jon Deavers - Portfolio</title>
      </Head>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand>Jon Deavers</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'> Home</Nav.Link>

            <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Hero />
    </div>
  );
}
