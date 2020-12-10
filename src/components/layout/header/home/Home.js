import "./Home.css";
import logo from "../../../logo/covid.svg";
import Navbar from "../../../navigation/home/Menu";

function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo m-5" alt="logo" />
        <Navbar />
      </header>
    </div>
  );
}

export default Home;
