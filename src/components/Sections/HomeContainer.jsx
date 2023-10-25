import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardItem from "../CardItem/CardItem";
import Loading from "../Loading/Loading";



function HomeContainer(props) {

    const [items, setItems] = useState([]);
    const { category } = useParams()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'Productos')
        getDocs(queryCollection)
            .then(respCollection => {
                setItems(respCollection.docs.map((prod) => {
                    return { id: prod.id, ...prod.data() }
                }))
                setLoading(false)
            })
    }, [])

    return (
        <>
            {loading ?
                <Loading />
                :
                <>
                    {items.filter((producto) => {
                        if (category) {
                            return category === producto.category
                        } else {
                            return true
                        }
                    }).map(function (item) {
                        return <CardItem item={item} />
                    })}
                </>}


        </>
    )

}
export default HomeContainer;