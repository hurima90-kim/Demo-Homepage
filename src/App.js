import './App.css';
import About from './components/About';
import Demo from './components/Demo';
import Footer from './components/Footer';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Trending from './components/Trending';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="container">
      <Header />
      <Welcome />
      <Trending />
      <Showcase />
      <Demo />
      <About />
      <Footer />
    </div>
  );
}

export default App;
