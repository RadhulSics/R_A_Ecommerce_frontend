import logo from './logo.svg';
import './App.css';

import NavAdmin from './components/NavbarAdmin.js';
import Navbaruser from './components/Navbaruser.js';
import FullProdAdmin from './components/FullProductsAdmin.js'
import FullproductsUser from './components/FullproductsUser.js'
import Ban from './components/BanAdmin.js'
import ProfUser from './components/ProfileUser.js'
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import ProfileeditUser from './components/ProfeditUser.js'
import OrderHistory from './components/orderHistory.js';
import NavbarSeller from './components/NavbarSeller.js';
import ProfileSeller from './components/profileSeller.js';
import FullProductsSeller from './components/FullProductsSeller.js';
import OrderdetailsSeller from './components/OrderdetailsSeller.js';
import OrderDetailsUSer from './components/orderHistory.js'
import NavbarAdmin from './components/NavbarAdmin.js';
import NewprodSeller from './components/NewprodSeller.js';
import IndProductsUser from './components/IndProductsUser.js'
import BuyingprodUser from './components/BuyingprodUser.js';
import OwnprodSeller from './components/ownprodSeller.js';
import ProfileeditSeller from './components/ProfeditSeller.js'
import CartUser from './components/CartUser.js';
import SellerList from './components/SellerList.js';
import Homepage from './components/Homepage.js';
import NavbarHomepage from './components/NavbarHomepage.js';
import AboutUs from './components/AboutUs.js';
import ContactUs from './components/ContactUs.js';
import FooterHomepage from './components/Footerhomepage.js';
import RegisterSeller from './components/RegisterSeller.js';
import Registration from './components/CustomerRegistration.js';
import Login from './components/LoginCustomer.js';
import LoginSeller from './components/LoginSeller.js';
import ForgotpassSeller from './components/ForgotpassSeller.js';
import Forgotpass from './components/forgotpassUser.js';
import UserList from './components/UserList.js';
import SellerApproval from './components/SellerApproval.js';
import CartBUy from './components/CartBuy.js';
import OrderDetails from './components/OrderDetailsAdmin.js';


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<NavbarHomepage/>,<Homepage/>,<FooterHomepage/>]}/>

     
      <Route path='/about' element={[<NavbarHomepage/>,<AboutUs/>,]}/>
      <Route path='/contact' element={[<NavbarHomepage/>,<ContactUs/>,<FooterHomepage/>]}/>




      <Route path='/Admin' element={[<NavAdmin/>,<FullProdAdmin/>]} />
      <Route path='/Ban' element={[<NavAdmin/>,<Ban/>]} />
      <Route path='/UserAdmin' element={[<NavAdmin/>,<UserList/>]}/>
      <Route path='/sellerApproval' element={[<NavbarAdmin/>,<SellerApproval/>]} />
      <Route path='/orderhistory' element={[<NavbarAdmin/>,<OrderHistory/>]} />
      <Route path='/SellerAdmin' element={[<NavAdmin/>,<SellerList/>]} />


      
      <Route path='/RegisterCustomer' element={[<Registration/>]} />
      <Route path='/Customerlogin' element={[<Login/>]} />
      <Route path='/ForgotpassUser' element={[<Forgotpass/>]} />
      <Route path='/User' element={[<Navbaruser/>,<FullproductsUser/>]} />
      <Route path='/ProfileUser' element={[<Navbaruser/>,<ProfUser/>]} />
      <Route path='/OrderDetailsUser' element={[<Navbaruser/>,<OrderDetailsUSer/>]} />
      <Route path='/OrderDetailsSeller' element={[<NavbarSeller/>,<OrderdetailsSeller/>]} />
  
      <Route path='/IndProductsUser/:id' element={[<Navbaruser/>,<IndProductsUser/>]} />
      <Route path='/buyingproduser/:id' element={[<Navbaruser/>,<BuyingprodUser/>]}/>
      <Route path='/OrderDetails/:type/:id' element={[<NavAdmin/>,<OrderDetails/>]}/>
     
      <Route path='/ProfileeditUser' element={[<Navbaruser/>,<ProfileeditUser/>]} />
      <Route path='/CartUser' element={[<Navbaruser/>,<CartUser/>]} />
      <Route path='/CartBuy' element={[<Navbaruser/>,<CartBUy/>]}/>

      <Route path='/RegisterSeller' element={[<RegisterSeller/>]} />
      <Route path='/Sellerlogin' element={[<LoginSeller/>]} />
      <Route path='/ForgotpassSeller' element={[<ForgotpassSeller/>]} />
      <Route path='/Seller' element={[<NavbarSeller/>,<FullProductsSeller/>]} />
      <Route path='/OrderDetailsSeller' element={[<NavbarSeller/>,<OrderdetailsSeller/>]} />
      <Route path='/ProfileSeller' element={[<NavbarSeller/>,<ProfileSeller/>]} />
      <Route path='/NewprodSeller' element={[<NavbarSeller/>,<NewprodSeller/>]} />
      <Route path='/OwnprodSeller' element={[<NavbarSeller/>,<OwnprodSeller/>]} />
      <Route path='/ProfileeditSeller' element={[<NavbarSeller/>,<ProfileeditSeller/>]} />
      
      


    </Routes>
    </BrowserRouter>
  );
}

export default App;