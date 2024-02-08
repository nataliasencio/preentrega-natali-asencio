//importo la hoja de estilos del css
import "./Navbar.css"

export const Navbar = ()=>{
    return(
        
        <nav>
            <img src="https://res.cloudinary.com/drm9tm64q/image/upload/v1707347975/images_btflyx.jpg" alt="" />
            <ul>
                <li className="colorLetraMenu">ropa deportiva mujer</li>
                <li className="colorLetraMenu">ropa deportiva hombre</li>
                <li className="colorLetraMenu">zapatillas mujer</li>
                <li className="colorLetraMenu">zapatillas hombre</li>
                <li className="colorLetraMenu">deportes</li>
            </ul>
        </nav>
    )
}