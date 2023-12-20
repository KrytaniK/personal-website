import "./globals.css";

export const metadata = {
  title: "KrytaniK - Projects",
  description: "A brief overview of completed and work in progress projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
