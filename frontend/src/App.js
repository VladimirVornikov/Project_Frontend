import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import NotFound from './components/pages/notFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <NotFound/>
      <Footer/>
    </div>
  );
}

export default App;
