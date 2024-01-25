import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import NavAdmin from './components/NavbarAdmin.js';
import Register from './components/Registration.js';
import FullProdAdmin from './components/FullProductsAdmin.js'
import Ban from './components/BanAdmin.js';

function App() {
  return (
    <div>
       {/* <Register/> */}
         {/* <Login/>  */}
             <NavAdmin/>
            <FullProdAdmin/>  
            {/* <Ban/> */}
    </div>
  );
}

export default App;
