import './App.css';
import'./components/StyleR.css';
import Login from './components/Login';
import NavAdmin from './components/NavbarAdmin.js';
import Register from './components/Registration.js';
import Navbaruser from './components/Navbaruser.js';
import FullProdAdmin from './components/FullProductsAdmin.js'
import FullproductsUser from './components/FullproductsUser.js'
import Ban from './components/BanAdmin.js'
import OrderDetails from './components/OrderDetailsAdmin.js'
import ProfUser from './components/ProfileUser.js'
import { Route,Routes,BrowserRouter, useLocation } from 'react-router-dom';
import Indproducts from './components/Indproducts.js';
import ProfileeditUser from './components/ProfeditUser.js'
import OrderDetailsUSer from './components/orderHistory.js'
import NavbarSeller from './components/NavbarSeller.js';
import ProfileSeller from './components/profileSeller.js';
import IndProductsSeller from './components/IndProductsSeller.js';
import FullProductsSeller from './components/FullProductsSeller.js';
import OrderdetailsSeller from './components/OrderdetailsSeller.js';
import NavbarAdmin from './components/NavbarAdmin.js';
import NewprodSeller from './components/NewprodSeller.js';
import IndProductsUser from './components/IndProductsUser.js'
import BuyingprodUser from './components/BuyingprodUser.js'
import OwnprodSeller from './components/ownprodSeller.js';
import ProfileeditSeller from './components/ProfeditSeller.js'
import CartUser from './components/CartUser.js';
import UserSearch from './components/UserSearch.js';
import SellerList from './components/SellerList.js';
import UserList from './components/UserList.js';
import SellerApproval from './components/SellerApproval.js';
import ForgotPassword from './components/ForgotPassword.js';
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';
import NavbarHomePage from './components/NavbarHomePage.js';
import AboutUs from './components/AboutUs.js';
import ContactUs from './components/ContactUs.js';
import FooterHomepage from './components/FooterHomepage.js';
import SellerSearch from './components/SellerSearch.js'
import AdminSearch from './components/AdminSearch.js';
import CartBuy from './components/CartBuy.js';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
 
  return (

    <BrowserRouter>
     <ScrollToTop />
    <Routes>

      <Route path='/' element={[<NavbarHomePage/>,<HomePage/>,<FooterHomepage/>]} />
      <Route path='/about' element={[<NavbarHomePage/>,<AboutUs/>,<FooterHomepage/>]} />
      <Route path='/contact' element={[<NavbarHomePage/>,<ContactUs/>,<FooterHomepage/>]} />
      <Route path='/login' element={[<Login/>]} />
      <Route path='/Register' element={[<Register/>]} />
      <Route path='/ForgotPassword' element={[<ForgotPassword/>]} />



      <Route path='/Admin' element={[<NavAdmin/>,<FullProdAdmin/>,<Footer/>]} />
      <Route path='/Ban' element={[<NavAdmin/>,<Ban/>,<Footer/>]} />
      <Route path='/OrderDetails/:type/:id' element={[<NavAdmin/>,<OrderDetails/>,<Footer/>]}/>
      <Route path='/UserAdmin' element={[<NavAdmin/>,<UserList/>,<Footer/>]} />
      <Route path='/SellerAdmin' element={[<NavAdmin/>,<SellerList/>,<Footer/>]} />
      <Route path='/IndProductsAdmin/:id' element={[<NavbarAdmin/>,<Indproducts/>,<Footer/>]} />
      <Route path='/sellerApproval' element={[<NavbarAdmin/>,<SellerApproval/>,<Footer/>]} />
      <Route path='/adminSearch/:data' element={[<NavAdmin/>,<AdminSearch/>,<Footer/>]} />


      <Route path='/User' element={[<Navbaruser/>,<FullproductsUser/>,<Footer/>]} />
      <Route path='/ProfileUser' element={[<Navbaruser/>,<ProfUser/>,<Footer/>]} />
      <Route path='/OrderDetailsUser' element={[<Navbaruser/>,<OrderDetailsUSer/>,<Footer/>]} />
      <Route path='/CartUser' element={[<Navbaruser/>,<CartUser/>,<Footer/>]} />
      <Route path='/CartBuy' element={[<Navbaruser/>,<CartBuy/>,<Footer/>]} />
      <Route path='/IndProductsUser/:id' element={[<Navbaruser/>,<IndProductsUser/>,<Footer/>]} />
      <Route path='/BuyingprodUser/:id' element={[<Navbaruser/>,<BuyingprodUser/>,<Footer/>]} />
      <Route path='/ProfileeditUser' element={[<Navbaruser/>,<ProfileeditUser/>,<Footer/>]} />
      <Route path='/userSearch/:data' element={[<Navbaruser/>,<UserSearch/>,<Footer/>]} />
      
      
      <Route path='/Seller' element={[<NavbarSeller/>,<FullProductsSeller/>,<Footer/>]} />
      <Route path='/IndProductsSeller/:id' element={[<NavbarSeller/>,<IndProductsSeller/>,<Footer/>]} />
      <Route path='/OrderDetailsSeller' element={[<NavbarSeller/>,<OrderdetailsSeller/>,<Footer/>]} />
      <Route path='/ProfileSeller' element={[<NavbarSeller/>,<ProfileSeller/>,<Footer/>]} />
      <Route path='/NewprodSeller' element={[<NavbarSeller/>,<NewprodSeller/>,<Footer/>]} />
      <Route path='/ProfileeditSeller' element={[<NavbarSeller/>,<ProfileeditSeller/>,<Footer/>]} />
      <Route path='/OwnprodSeller' element={[<NavbarSeller/>,<OwnprodSeller/>,<Footer/>]} />
      <Route path='/sellerSearch/:data' element={[<NavbarSeller/>,<SellerSearch/>,<Footer/>]} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;