//importo el CartWidget
import CartWidget from "../common/CartWidget"
//el css
import "./Navbar.css"

export const Navbar = ()=>{

        return(
            <header>
                
                   
                
                <nav>
                    <img src="https://res.cloudinary.com/drm9tm64q/image/upload/v1709095004/logo-leon_r1bgq9.png" alt="" />
                    <ul>
                        <li className="menu">Ropa Deportiva</li>
                        <li className="menu">Zapatillas Deportivas</li>
                        <li className="menu">Todo Deportes</li>
                    </ul>
                    {/* carrito */}
                    <CartWidget />
                </nav>

            
            
          </header>
        
         
        )
    }
