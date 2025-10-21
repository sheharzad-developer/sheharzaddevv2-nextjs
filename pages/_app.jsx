import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import DefaultLayout from '../components/layout/DefaultLayout';
import { LanguageProvider } from '../context/LanguageContext';
import useScrollToTop from '../hooks/useScrollToTop';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function MyApp({ Component, pageProps, router }) {
  useScrollToTop(); // Call the hook here

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <LanguageProvider>
      <AnimatePresence exitBeforeEnter>
        <div key={router.route} className="bg-secondary-light dark:bg-primary-dark transition duration-300">
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </div>
      </AnimatePresence>
    </LanguageProvider>
  );
}

export default MyApp;
