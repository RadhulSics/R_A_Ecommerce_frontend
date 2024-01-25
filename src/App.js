import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import NavAdmin from './components/NavbarAdmin.js';
import Register from './components/Registration.js';

import Navbaruser from './components/Navbaruser.js';

import FullProdAdmin from './components/FullProductsAdmin.js'


function App() {
  return (
    <div>
       {/* <Register/> */}

       {/* <Navbaruser/>
         <Login/>  */}
            {/* <NavbarAdmin/> */}
            

         {/* <Login/>  */}
             <NavAdmin/>
            <FullProdAdmin/>  
    </div>
  );
}

export default App;
