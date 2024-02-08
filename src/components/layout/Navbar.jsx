//importo el CartWidget
import CartWidget from "../common/CartWidget"

export const Navbar = ()=>{

        return(
        <div>
            <img src="https://res.cloudinary.com/drm9tm64q/image/upload/v1707347975/images_btflyx.jpg" alt="" />
            <nav>
                <ul>
                    <li className="colorLetraMenu">ropa deportiva mujer</li>
                    <li className="colorLetraMenu">ropa deportiva hombre</li>
                    <li className="colorLetraMenu">zapatillas mujer</li>
                    <li className="colorLetraMenu">zapatillas hombre</li>
                    <li className="colorLetraMenu">deportes</li>
                </ul>
            </nav>

            {/* carrito */}
            <CartWidget />
            
          

        </div>
              
         
        )
    }
