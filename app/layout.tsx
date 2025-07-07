import './globals.css';

export const metadata = {
  title: 'Infinite Tsukuyomi',
  description: 'Enter your fantasy world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}