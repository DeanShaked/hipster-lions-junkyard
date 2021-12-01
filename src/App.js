import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">
          <Navbar />
        </div>
        <div className="main">
          <Intro />
          <About />
          <Join />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
