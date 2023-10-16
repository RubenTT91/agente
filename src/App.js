import "./App.css";
import {  Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts.jsx";
import Login from "./pages/Login";
import Collection from "./pages/Collection";
import Default from './pages/notFound';
import Footer from './pages/footer';




function App() {
  return (
    <div className='home'>
      <p><h1>Adopta un Agente © Rubencho91</h1></p>
      <Routes >
        <Route path="/" element={<Layout/>}>
          <Route path="Contacts" element={<Contacts />}/>          
          <Route path="Collection" element={<Collection />}/>
          <Route path="Login" element={<Login />}/>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Default/>}/>
        </Route>
      </Routes>
      <div className="footer"><Footer /></div>
    </div>
  );
}

export default App;
