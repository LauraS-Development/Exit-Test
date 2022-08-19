import '../styles/globals.css'
import Lo from '../components/Lo'

function MyApp({ Component, pageProps }) {
  return (
      <Lo>
        <Component {...pageProps} />
      </Lo>
  )
}

export default MyApp
