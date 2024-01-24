import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import NavbarAdmin from './components/NavbarAdmin';
import Register from './components/Registration.js';
import FullProdAdmin from './components/FullProductsAdmin.js'

function App() {
  return (
    <div>
       {/* <Register/> */}
         {/* <Login/>  */}
             <NavbarAdmin/>
            <FullProdAdmin/>  
    </div>
  );
}

export default App;
