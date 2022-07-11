import './App.css';
import Head from './components/Head'
import Body from './components/Body'
import img1 from './images/ironhack-logo-xs.png'
import img2 from './images/menu-top-xs.png'

import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

function App() {
  return (
    <div className="App">
      <Head 
      imagen1={img1}
      imagen2={img2}
      />
      <Body 
        icon1 = {icon1}
        icon2 = {icon2}
        icon3 = {icon3}
        icon4 = {icon4}
      />

    </div>
  );
}

export default App;
