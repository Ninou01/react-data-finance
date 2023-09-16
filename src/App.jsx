import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Trials from "./components/Trials";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Dashboard/>
      <Newsletter/>
      <Trials/>
      <Footer/>
    </div>
  );
}

export default App;
