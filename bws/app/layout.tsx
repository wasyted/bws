import localFont from 'next/font/local';
import './globals.css';

const circularStd = localFont({
  src: [
    {
      path: '../fonts/circular-std/CircularStd-Book.woff2', // Regular weight
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/circular-std/CircularStd-BookItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/circular-std/CircularStd-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/circular-std/CircularStd-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/circular-std/CircularStd-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-circular-std', 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${circularStd.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}