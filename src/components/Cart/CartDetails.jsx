
import Button from 'react-bootstrap/Button';
import { useCartContext } from "../../context/CartContext";
import './CartDetails.css';
function CartDetails() {
    const { cartList, vaciarItems, borrarItem, total } = useCartContext();
    return (<>
        <ul className='CartDetailUl'>
            {cartList.map(function (item) {
                return <li className='CartDetailLi'>
                    <div className='CartDetailLiContainer'>
                        <div>
                            <img className='imgCartDetails' src={item.pic} />
                        </div>
                        <div className='CartItemAcction'>
                            {item.name}, Cantidad: {item.cantidad} <Button className='CartDetailButton' onClick={() => borrarItem(item.id)}>Quitar</Button>
                        </div>
                    </div>
                </li>

            })}
        </ul>
        <div className='CartDetailsPrecio'>
            <div><Button onClick={() => vaciarItems()}>Vaciar Carrito</Button></div>
            <div className='CartDetailP'>Total:$ {total()}</div>
        </div>

    </>)
}

export default CartDetails;
