import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            />
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
