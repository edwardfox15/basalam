import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Cart from "../../cart/cart"
import { CityData } from "../../fakeData/cityData"
import { fakeData } from "../../fakeData/fakeData"


const Homepage = () => {

    const [productlist , setProductlist] = useState()

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((data)=>{
            console.log(data.data)
            setProductlist(data.data)
        })
        .catch((erro)=>{
            console.log(erro)
        })
    },[])

    return (
        <div className="con d-flex flex-wrap gap-4 bg-light">
            <h1 className="Name-store">Easy Store</h1>
            {fakeData.map(item => {
                return (
                    <div key={`product ${item.id}`} className="Homepage--container">
                        <Cart image= {item.image}
                        title={item.title}
                        rating = {item.rating.rate}
                        count= {item.rating.count}
                        price = {item.price}
                        />
                    </div>
                )
            })}
        </div>
    )
}
export default Homepage