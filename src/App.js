import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import ReactGA from "react-ga";

function App() {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID, {
    debug: process.env.NODE_ENV === 'development',
  });
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
