import Cart from "../../cart/cart"
import { fakeData } from "../../fakeData/fakeData"


const Homepage = () => {
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