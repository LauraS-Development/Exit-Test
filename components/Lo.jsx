import Head from "next/head";
import Navbar from "../components/navbar";
import Header from "./Header";
import Footer from "./Footer";
export default function Lo({ children }) {
  return (
    <div>
      <Head>
        <title>Exits</title>
      </Head>
      <div>
        <Header />
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
