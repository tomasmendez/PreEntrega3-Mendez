import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardItem from "../CardItem/CardItem";
import Loading from "../Loading/Loading";



function CategoryContainer(props) {

    const [items, setItems] = useState([]);
    const { category } = useParams()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'Productos')
        const queryFilter = query(queryCollection, where('category', '==', category))
        getDocs(queryFilter)
            .then(respCollection => {
                setItems(respCollection.docs.map((prod) => {
                    return { id: prod.id, ...prod.data() }
                }))
                setLoading(false)
            })
    }, [category])

    return (
        <>
            {loading ?
                <Loading />
                :
                <>
                    {items.map(function (item) {
                        return <CardItem item={item} />
                    })}
                </>}


        </>
    )

}
export default CategoryContainer;