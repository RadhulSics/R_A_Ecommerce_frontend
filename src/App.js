import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import NavAdmin from './components/NavbarAdmin.js';
import Register from './components/Registration.js';
import Navbaruser from './components/Navbaruser.js';
import FullProdAdmin from './components/FullProductsAdmin.js'
import FullproductsUser from './components/FullproductsUser.js'
import Ban from './components/BanAdmin.js'
import OrderDetails from './components/OrderDetailsAdmin.js'
import ProfUser from './components/ProfileUser.js'
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Indproducts from './components/Indproducts.js';
import Selleruser from './components/Selleruser.js';
import ProductApproval from './components/Productapproval.js';
import ProfileeditUser from './components/ProfeditUser.js'
import IndProductsU from './components/IndProductsUser.js';
import ProdApproval from './components/Productapproval.js'
import OrderDetailsUSer from './components/orderHistory.js'
import NavbarSeller from './components/NavbarSeller.js';
import ProfileSeller from './components/profileSeller.js';
import IndProductsSeller from './components/IndProductsSeller.js';
import FullProductsAdmin from './components/FullProductsAdmin.js';
import FullProductsSeller from './components/FullProductsSeller.js';
import OrderdetailsSeller from './components/OrderdetailsSeller.js';
import NavbarAdmin from './components/NavbarAdmin.js';
import NewprodSeller from './components/NewprodSeller.js';
import IndProductsUser from './components/IndProductsUser.js'
import BuyingprodUser from './components/BuyingprodUser.js'
import OwnprodSeller from './components/ownprodSeller.js';
import ProfileeditSeller from './components/ProfeditSeller.js'


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Login/>]} />
      <Route path='/Register' element={[<Register/>]} />
      <Route path='/Admin' element={[<NavAdmin/>,<FullProdAdmin/>]} />
      <Route path='/Ban' element={[<NavAdmin/>,<Ban/>]} />
      <Route path='/OrderDetails' element={[<NavAdmin/>,<OrderDetails/>]}/>
      <Route path='/ProdApproval' element={[<NavAdmin/>,<ProdApproval/>]} />
      <Route path='/UserAdmin' element={[<NavAdmin/>,<Selleruser/>]} />
      <Route path='/SellerAdmin' element={[<NavAdmin/>,<Selleruser/>]} />
      <Route path='/User' element={[<Navbaruser/>,<FullproductsUser/>]} />
      <Route path='/ProfileUser' element={[<Navbaruser/>,<ProfUser/>]} />
      <Route path='/OrderDetailsUSer' element={[<Navbaruser/>,<OrderDetailsUSer/>]} />
      <Route path='/Seller' element={[<NavbarSeller/>,<FullProductsSeller/>]} />
      <Route path='/IndProductsSeller' element={[<NavbarSeller/>,<IndProductsSeller/>]} />
      <Route path='/OrderDetailsSeller' element={[<NavbarSeller/>,<OrderdetailsSeller/>]} />
      <Route path='/ProfileSeller' element={[<NavbarSeller/>,<ProfileSeller/>]} />
      <Route path='/NewprodSeller' element={[<NavbarSeller/>,<NewprodSeller/>]} />
      <Route path='/IndProductsAdmin' element={[<NavbarAdmin/>,<Indproducts/>]} />
      <Route path='/IndProductsUser' element={[<Navbaruser/>,<IndProductsUser/>]} />
      <Route path='/BuyingprodUser' element={[<Navbaruser/>,<BuyingprodUser/>]} />
      <Route path='/ProfileeditUser' element={[<Navbaruser/>,<ProfileeditUser/>]} />
      <Route path='/OwnprodSeller' element={[<NavbarSeller/>,<OwnprodSeller/>]} />
      <Route path='/ProfileeditSeller' element={[<NavbarSeller/>,<ProfileeditSeller/>]} />
      
      


    </Routes>
    </BrowserRouter>
  );
}

export default App;