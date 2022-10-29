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

//24 y stop working just watching next and understanding
//keep working on API route 
// that all video done wtaching and if after need i will  try to implement if needed