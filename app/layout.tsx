import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import ResponsiveNav from '../components/Home/Navbar/ResponsiveNav';
import Provider from '@/components/HOC/Provider';

const manropeFont = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Food Order | Singapore',
  description:
    'A food order application created for the ultimate ease in food delivery in Singapore.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${manropeFont.className} antialiased`}>
        <Provider>
          <ResponsiveNav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
