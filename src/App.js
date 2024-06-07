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
import { Route,Routes,BrowserRouter } from 'react-router-dom';
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

function App() {
  return (

    <BrowserRouter>
    <Routes>

      <Route path='/' element={[<NavbarHomePage/>,<HomePage/>,<Footer/>]} />
      <Route path='/about' element={[<NavbarHomePage/>,<AboutUs/>,<Footer/>]} />
      <Route path='/contact' element={[<NavbarHomePage/>,<ContactUs/>,<Footer/>]} />
      <Route path='/login' element={[<Login/>]} />
      <Route path='/Register' element={[<Register/>]} />
      <Route path='/ForgotPassword' element={[<ForgotPassword/>]} />



      <Route path='/Admin' element={[<NavAdmin/>,<FullProdAdmin/>]} />
      <Route path='/Ban' element={[<NavAdmin/>,<Ban/>]} />
      <Route path='/OrderDetails' element={[<NavAdmin/>,<OrderDetails/>]}/>
      <Route path='/UserAdmin' element={[<NavAdmin/>,<UserList/>]} />
      <Route path='/SellerAdmin' element={[<NavAdmin/>,<SellerList/>]} />
      <Route path='/IndProductsAdmin/:id' element={[<NavbarAdmin/>,<Indproducts/>]} />
      <Route path='/sellerApproval' element={[<NavbarAdmin/>,<SellerApproval/>]} />
      


      <Route path='/User' element={[<Navbaruser/>,<FullproductsUser/>]} />
      <Route path='/ProfileUser' element={[<Navbaruser/>,<ProfUser/>]} />
      <Route path='/OrderDetailsUser' element={[<Navbaruser/>,<OrderDetailsUSer/>]} />
      <Route path='/CartUser' element={[<Navbaruser/>,<CartUser/>]} />
      <Route path='/IndProductsUser/:id' element={[<Navbaruser/>,<IndProductsUser/>]} />
      <Route path='/BuyingprodUser/:id' element={[<Navbaruser/>,<BuyingprodUser/>]} />
      <Route path='/ProfileeditUser' element={[<Navbaruser/>,<ProfileeditUser/>]} />
      <Route path='/userSearch/:data' element={[<Navbaruser/>,<UserSearch/>]} />
      
      
      <Route path='/Seller' element={[<NavbarSeller/>,<FullProductsSeller/>,<Footer/>]} />
      <Route path='/IndProductsSeller/:id' element={[<NavbarSeller/>,<IndProductsSeller/>]} />
      <Route path='/OrderDetailsSeller' element={[<NavbarSeller/>,<OrderdetailsSeller/>]} />
      <Route path='/ProfileSeller' element={[<NavbarSeller/>,<ProfileSeller/>]} />
      <Route path='/NewprodSeller' element={[<NavbarSeller/>,<NewprodSeller/>,<Footer/>]} />
      <Route path='/ProfileeditSeller' element={[<NavbarSeller/>,<ProfileeditSeller/>]} />
      <Route path='/OwnprodSeller' element={[<NavbarSeller/>,<OwnprodSeller/>]} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;