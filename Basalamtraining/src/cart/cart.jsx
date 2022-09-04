import IconPrice from '../component/icon-price'
import IconRating from '../component/icon-rating'
import './cart.css'

const Cart = (props) => {
    return (
        <div className='container d-flex flex-column justify-content-center align-items-center bg-Homepage-container p-3'>
            <div className='IMage-container mx-auto d-flex justify-content-center align-items-start'>
                <img className='w-100 h-100' src={props.image}/>
            </div>
            <div className='w-20 h-20'>
                <p className='text-title fw-bold text-drection text-cart-nowrap'>
                    <span>{props.title}</span>
                </p>
            </div>
            <div className='w-100 h-100 d-flex flex-row justify-content-end align-items-center text-cart'>
                <div className='w-100 h-100 d-flex flex-row justify-content-start align-items-center fw-bold text-cart'>
                <IconRating/>
                {props.rating}
                </div>
                <div className='count-rating-color-font'>
                {props.count}
                </div>
            </div>
            <div className='w-100 h-100'>
             <button className='addBtn rounded'>+</button>
            </div>
            <div className='w-100 h-100 text-price-font d-flex flex-row justify-content-end align-items-center text-cart'>
            <IconPrice/>
                {props.price}
            </div>
        </div>
    )
}

export default Cart