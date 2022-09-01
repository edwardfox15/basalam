import IconPrice from '../component/icon-price'
import IconRating from '../component/icon-rating'
import './cart.css'

const Cart = (props) => {
    return (
        <div className='container d-flex flex-column justify-content-center align-items-center bg-Homepage-container p-3'>
            <div className='IMage-container mx-auto'>
                <img className='w-100 h-100' src={props.image}/>
            </div>
            <div className='w-20 h-20'>
                <p className='fw-bold text-drection'>
                    {props.title}
                </p>
            </div>
            <div className='w-100 h-100 d-flex flex-row justify-content-end align-items-center'>
                <div className='w-100 h-100 d-flex flex-row justify-content-start align-items-center fw-bold'>
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
            <div className='w-100 h-100 text-price-font d-flex flex-row justify-content-end align-items-center'>
            <IconPrice/>
                {props.price}
            </div>
        </div>
    )
}

export default Cart