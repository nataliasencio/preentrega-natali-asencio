//CartWidget presentacional
import CartWidget from "../../common/cartwidget/CartWidget";
//css
import "./Navbar.css";
//input mui
import TextField from "@mui/material/TextField";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <img
          src="https://res.cloudinary.com/drm9tm64q/image/upload/v1709095004/logo-leon_r1bgq9.png"
          alt=""
        />
        <ul>
          <li className="menu">Todo</li>
          <li className="menu">Ropa Deportiva</li>
          <li className="menu">Zapatillas Deportivas</li>
          <li className="menu">Todo Deportes</li>
        </ul>
        <TextField label="BUSCAR" color="primary" focused />
        {/* carrito */}
        <CartWidget />
      </nav>
    </header>
  );
};
