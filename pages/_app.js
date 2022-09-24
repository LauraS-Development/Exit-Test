import "../styles/master.css";
import "../styles/layout.css";
import "../styles/navbar.css";
import Lo from "../components/Lo";

function MyApp({ Component, pageProps }) {
  return (
    <Lo>
      <Component {...pageProps} />
    </Lo>
  );
}

export default MyApp;
