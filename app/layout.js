import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/navbar';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import Footer from '@/components/ui/footer';
import Head from 'next/head';
import icon from '/public/favicon.ico';

const inter = Inter({ subsets: ['latin'] });

const anderson = localFont({
  src: [
    {
      path: '../public/fonts/AndersonGrotesk-Bold.otf',
      weight: '700',
    },
  ],
  variable: '--font-anderson',
});

const clash = localFont({
  src: '../public/fonts/ClashDisplay-Variable.ttf',
  variable: '--font-clash',
});

const satoshi = localFont({
  src: '../public/fonts/Satoshi-Variable.ttf',
  variable: '--font-satoshi',
});

export const metadata = {
  title: 'Data at UCI',
  description: 'Data-Science Club at UCI',
  applicationName: 'Data at UCI',
  creator: 'Data at UCI',
  keywords: ['Data', 'UCI', 'Data Science', 'Club'],
  icons: [
    {
      url: '/icons/data-icon.png',
      sizes: '64x64',
      type: 'image/png',
    },
  ],
};

export default function RootLayout({ children }) {
  const navItems = [
    {
      name: 'Datathon',
      link: '/datathon',
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'About',
      link: '/about',
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Meet Us',
      link: '/meet-us',
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Contact',
      link: 'https://linktr.ee/DataAtUCIrvine',
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Apply',
      link: '/apply',
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href={icon} />
      </Head>
      <body
        className={`${anderson.variable} font-anderson ${clash.variable} ${satoshi.variable}`}
      >
        <FloatingNav navItems={navItems}></FloatingNav>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
