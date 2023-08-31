import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Work from './components/Work/Work';
import Project from './components/Project/Project';
import Design from './components/Design/Design';
import Clients from './components/Clients/Clients';
import Asked from './components/Asked/Asked';
import Steller from './components/Steller/Steller';
import Blog from './components/Blog/Blog';
import FooterOne from './components/FooterOne/FooterOne';
import FooterTwo from './components/FooterTwo/FooterTwo';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Work></Work>
      <Project></Project>
      <Design></Design>
      <Clients></Clients>
      <Asked></Asked>
      <Steller></Steller>
      <Blog></Blog>
      <FooterOne></FooterOne>
      <FooterTwo></FooterTwo>
    </div>
  );
}

export default App;
