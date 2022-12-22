import { Link } from 'react-router-dom';
import headerImage from './img/see.jpg'
const Home = () =>{
    return(
        <div className='container'>
            <img className='seefood' src={headerImage} alt='fish'/>
            <p className='par'>Мы рады Вас приветствовать в нашем магазине!</p>
            <Link className='shop' to = '/Shop'>Заказать</Link>
        </div>
    )
}

export default Home;