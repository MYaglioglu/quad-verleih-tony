import logo from './logo.svg';
import './App.css';
import HeaderComponent from './shared/header/headerComponent';
import HeroComponent from './components/hero/heroComponent';
import BannerComponent from './components/banner/bannerComponent';
import AboutComponent from './components/about/aboutComponent';
import ContactComponent from './components/contact/contactComponent';
import FooterComponent from './shared/footer/footerComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <BannerComponent />
      <HeroComponent />
      <AboutComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
