import delivery from './img/delivery.jpg'

const Delivery = () =>{
    return(
        <div>
            <div className="header">
                <h1>Доставка и оплата</h1>
            </div>
            <div class="container_delivery">
                <p className='par_delivery'>При заказе от <b>2000 рублей</b> доставка производится <b> бесплатно.</b></p>
                <p className='par_delivery'>До <b>2000 рублей</b> доставка оплачивается по тарифу такси.</p>
                <p className='par_delivery'>Оплата производится удобным для Вас способом после получения доставленного товара.</p>
            </div>
            <div className="photo-delivery">
                <img className="image_delivery" src={delivery} alt="delivery"/>
            </div> 
        </div>
    )
}

export default Delivery;