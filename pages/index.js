import Head from "next/head";
import Image from "next/image";
// import Exits from "../components/Exits";

export default function Home() {
  return (
    <div className="section main master">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="section col heading_img span_12_of_12">
        {/*<Exits />*/}
        <div className="section">
          <div className="col span_6_of_12">
            <div className="heading text-center">
              <span className="orange">
                ClubRadio Hof <br />
              </span>
              <span className="outline">
                Die Clubsounds <br />
              </span>
              <span className="orange">
                f&uuml;r Hof, Bayern <br /> und ganz Deutschland <br />
              </span>
            </div>
          </div>
          <div className="col span_6_of_12"></div>
        </div>
        <div className="section">
          <div className="col span_6_of_12 b1 text-center">
            <button className="button-64 text-center" role="button">
              <span className="text">
                <a href="//laut.fm/edm-sounds" rel="noreferrer" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-drweb icon-drweb-player-play"
                    width="28"
                    height="28"
                    viewBox="0 0 20 21"
                    stroke-width="2"
                    stroke="red"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 4v16l13 -8z" />
                  </svg>
                  EDM-Sounds by. ClubRadio Hof
                </a>
              </span>
            </button>
          </div>
        </div>
        <div className="section">
          <h4 className="text-center">
            Unser Stream wird zur verfügunggestellt durch laut.fm <br />{" "}
            Deswegen ist unser Angebot Werbefinanziert. (Es wird bei den Hörern
            unterschiedliche Werbung ausgestrahlt)
          </h4>
        </div>
      </main>
    </div>
  );
}
