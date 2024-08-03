import './App.css';
import Banner from './Components/Banner';
import Carosal from './Components/Carosal';
import ContactUs from './Components/ContactUs';
import FAQ from './Components/FAQ';

import Navbar from './Components/Navbar';


function App() {
  return (
    <div >
      <Navbar/>
      <Carosal/>
       <div> <Banner/></div>
       <div>
       
       <FAQ/>
       <ContactUs/>
       </div>
       
        
    </div>

  );
}

export default App;
