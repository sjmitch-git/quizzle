import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/index.css";
import {APP_DESCRIPTION, APP_NAME} from '@/utils/constants'
import {TriviaProvider} from '@/contexts/TriviaContext'

import Header from './header'
import Footer from './footer'
import Container from './container'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen flex-col`}>
        <TriviaProvider>
            <Header />
            <Container className='flex-grow max-w-md lg:max-w-2xl'>{children}</Container>
            <Footer />
          </TriviaProvider>
				</body>
    </html>
  );
}
