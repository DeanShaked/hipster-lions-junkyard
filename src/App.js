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
    </div>
  );
}

export default App;
