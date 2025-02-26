import Header from "@/marcham/components/header/Header";
import "./globals.css";
import "./typography.css";
import "./media.css";
import Footer from "@/marcham/components/footer/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
