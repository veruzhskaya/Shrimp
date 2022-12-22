import contact from './img/contact.jpg';
import inst from './img/ins.png';
import ws from './img/ws.png';
import tel from './img/tel.png';
import logo from './img/logo.png';


const Contact = () =>{
    return(
<div>
    <div className="header">
        <h1>Наши контакты</h1>
    </div>

    <div class="container_contact">
        <img className="logo_cont" src={logo} alt="logo" width="100"/>
        <p className="par_contact">Адрес:</p>
        <p className="par_contact">г. Краснодар, ул. писателя Знаменского, дом 17, цокольный этаж. </p>
        <p className="par_contact">Телефон:</p>
        <p className="par_contact">+7-918-447-72-33</p>
        <img className="icon" src={inst} alt="icon"/>
        <img className="icon" src={ws} alt="icon"/>
        <img className="icon" src={tel} alt="icon"/>
    </div>
    <div class="img_container">
        <img class="image_contact" src={contact} alt="seefood"/>
    </div> 
</div>
    )
}

export default Contact;