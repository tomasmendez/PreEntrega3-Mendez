import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';
import './CartWidget.css';


function CartWidget() {
    const { contar } = useCartContext()
    const mostrarTotal = contar() > 0
    return (
        <div class="CartWidget">
            {mostrarTotal ? <i class="numero">{contar()}</i> : <></>}
            <Link to='/carrito'><FaShoppingCart /></Link>
        </div>

    )
}

export default CartWidget