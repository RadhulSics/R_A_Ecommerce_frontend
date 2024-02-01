import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import NavAdmin from './components/NavbarAdmin.js';
import Register from './components/Registration.js';
import Navbaruser from './components/Navbaruser.js';
import FullProdAdmin from './components/FullProductsAdmin.js'
import Ban from './components/BanAdmin.js'
import OrderDetails from './components/OrderDetailsAdmin.js'
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Indproducts from './components/Indproducts.js';
import Selleruser from './components/Selleruser.js';
import ProductApproval from './components/Productapproval.js';


function App() {
  return (
    <div>
      <Navbaruser/>
      <Indproducts/>
      {/* <Selleruser/> */}
      {/* <ProductApproval/> */}
    </div>

    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<><NavAdmin/><FullProdAdmin/></>} />
    //   <Route path='/Ban' element={<><NavAdmin/><Ban/></>} />
    //   <Route path='OrderDetails' element={<><NavAdmin/><OrderDetails/></>}/>
    // </Routes>
    // </BrowserRouter>
  );
}

export default App;
