import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Join from "./components/Join/Join";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Intro />
        <About />
        {/* <Join /> */}
      </div>
      <footer>
        Created by Hipster Lions Junkyard with special ♥️ to our partners and
        the support from the community, our friends, families, and loved ones.
      </footer>
    </div>
  );
}

export default App;
