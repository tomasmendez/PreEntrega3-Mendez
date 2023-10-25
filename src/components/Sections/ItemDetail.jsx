import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import ProductDetail from "../ProductDetail/ProductDetail";


function ItemDetail() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({})
    useEffect(() => {
        if (id) {
            const db = getFirestore()
            const queryCollection = doc(db, 'Productos', id)
            getDoc(queryCollection)
                .then(prod => {
                    setProducto({ id, ...prod.data() })
                    setLoading(false)
                })
        }

    }, [id])
    return (
        <>
            {loading ?
                <Loading />
                :
                <>
                    <ProductDetail item={producto} />
                </>}


        </>
    )
}
export default ItemDetail;