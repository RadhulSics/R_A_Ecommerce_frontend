import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import NavbarAdmin from './components/NavbarAdmin';

function App() {
  return (
    <div>
      <NavbarAdmin/>
      <Login/>
      {/* <Navbaruser/> */}
    </div>
  );
}

export default App;
