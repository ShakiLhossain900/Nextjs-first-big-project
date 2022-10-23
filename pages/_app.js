import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {" "}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;


//019 adding custom components and adding css module done
