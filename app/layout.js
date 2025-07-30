// app/layout.js

export const metadata = {
  title: "GiftBridge",
  description: "Where wishes come true",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}