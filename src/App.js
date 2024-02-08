import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import NavAdmin from './components/NavbarAdmin.js';
import Register from './components/Registration.js';
import Navbaruser from './components/Navbaruser.js';
import FullProdAdmin from './components/FullProductsAdmin.js'
import Ban from './components/BanAdmin.js'
import OrderDetails from './components/OrderDetailsAdmin.js'
import ProfUser from './components/ProfileUser.js'
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Indproducts from './components/Indproducts.js';
import Selleruser from './components/Selleruser.js';
import ProductApproval from './components/Productapproval.js';
import ProfeditU from './components/ProfeditUser.js'
import IndProductsU from './components/IndProductsUser.js';
import ProdApproval from './components/Productapproval.js'
import NavbarSeller from './components/NavbarSeller.js';
import ProfileUser from './components/ProfileUser.js';
import ProfileSeller from './components/profileSeller.js';
import BuyingprodUser from './components/BuyingprodUser.js';
function App() {
  return (
    <div>
      {[<Navbaruser/>,<BuyingprodUser/>]}
    </div>

    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={[<NavAdmin/>,<FullProdAdmin/>]} />
    //   <Route path='/Ban' element={[<NavAdmin/>,<Ban/>]} />
    //   <Route path='/OrderDetails' element={[<NavAdmin/>,<OrderDetails/>]}/>
    //   <Route path='/ProdApproval' element={[<NavAdmin/>,<ProdApproval/>]} />
    //   <Route path='/UserAdmin' element={[<NavAdmin/>,<Selleruser/>]} />
    //   <Route path='/SellerAdmin' element={[<NavAdmin/>,<Selleruser/>]} />
    // </Routes>
    // </BrowserRouter>
  );
}

export default App;
