import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ironcorefitness.com'),
  title: {
    default: 'IronCore Fitness | High-Performance Strength & Powerlifting Center',
    template: '%s | IronCore Fitness',
  },
  description: '25,000 sqft elite powerlifting and athletic conditioning facility featuring Eleiko platforms, velocity-based training (VBT), InBody 770 scanning, and sauna recovery.',
  keywords: ['Powerlifting', 'Eleiko Equipment', 'Strength Gym', 'Velocity Based Training', 'USAPL Coaching', 'InBody 770'],
  openGraph: {
    title: 'IronCore Fitness | Elite Powerlifting & Strength Facility',
    description: 'Train on competition platforms with CSCS certified powerlifting and athletic conditioning coaches.',
    url: 'https://ironcorefitness.com',
    siteName: 'IronCore Fitness Gym',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IronCore Strength & Fitness',
    description: 'Elite powerlifting and strength training facility.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0d0d0d] text-white antialiased selection:bg-red-500 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
