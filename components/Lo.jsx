import Head from "next/head";
import Navbar from "./navbar";
import Header from "./Header";
import Footer from "./Footer";
export default function Lo({ children }) {
  return (
    <div>
      <Head>
        <title>ClubRadio Hof</title>
      </Head>
      <div>
        <Navbar />
      </div>
      {children}
      <div>
        <Footer />
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    </div>
  );
}
