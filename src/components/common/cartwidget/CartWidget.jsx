//componente  carrito
//importo carrito(de libreria)
import { TbShoppingCartHeart } from "react-icons/tb";

const CartWidget = () => {
  return (
    <div>
      <span>7</span>
      {/* ejecuto el carrito */}
      <TbShoppingCartHeart title={"carrito"} size={"2rem"} color={"white"} />
    </div>
  );
};

export default CartWidget;
