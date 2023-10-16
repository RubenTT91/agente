import '../pages/Layout.css';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="contenedorNav">
      <nav>
        <ul>
          <li>            
            <Link className="link" to="/"> Home </Link>
          </li>
          <li>
            <Link className="link" to="/login"> Login </Link>
          </li>
          <li>
            <Link className="link" to="/contacts"> Contacts</Link>
          </li>
          <li>
            <Link className="link" to="/collection"> Collection</Link>
          </li>         
        </ul>
      </nav>      
      <Outlet />
    </div>
  );
};
export default Layout;
