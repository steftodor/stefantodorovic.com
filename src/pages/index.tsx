import Hero from '@/components/home/Hero';
import Contact from '@/components/home/Contact';
import About from '@/components/home/About';
import Experience from '@/components/home/Experience';

import Head from 'next/head';







const Home = () => {
  return (
    <>
      <Head>
        <title>Stefan Todorovic</title>
        <meta name="description" content="Stefan Todorovic" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        {/* <About />  */}
        {/* <Skills />
        <Projects /> */}
        <Experience />
        <Contact />
      </div>
    </>
  );
};

export default Home;

