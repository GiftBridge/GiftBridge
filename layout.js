export const metadata = {
  title: 'GiftBridge',
  description: 'Grant wishes for $3',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}