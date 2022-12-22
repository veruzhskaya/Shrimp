import gsap from 'gsap';
import { useLayoutEffect, useRef, useState } from 'react';
import mussels from './img/mussels.jpg';
import shrimp from './img/shrimp.jpg';
import Modal from './Modal';



const Recipes = () =>{
    const [modal, setModal] = useState({
        modal1:false,
        modal2:false,
        modal3:false,
        modal4:false,
        modal5:false,
    });
   const comp = useRef();
   useLayoutEffect(() => {
    let ctx = gsap.context(() =>{
        gsap.to(".photo_mussels", {x: 300, duration:3 });
        gsap.from(".photo_shrimp", {y: 20, duration:3 });
    }, comp);
    return () => ctx.revert();
   },[]);

    return(
        <div>
            <div className="header">
                <h1>Рецепты наших покупателей</h1>
            </div>
            <div class="container_recipes">
                <button className="submit" onClick={() => setModal({...modal, modal1: true})} >Стейк трески</button>
                <Modal 
                title={'Стейк трески'}
                isOpened={modal.modal1}
                onModalClose = {() => setModal({...modal, modal1: false})}
                children={'Стейк трески натираем солью, перцем, прованскими травами, взбрызгиваем лимоном. Оставляем на 20-30 минут. Делаем подушку из овощей: фасоль стручковая, лук полукольцами, морковь, картофель. Выкладываем треску. Запекам в духовке 30 минут, за 5 минут до готовности посыпаем сыром. Перед подачей украшаем зеленью.'}
                />           
                <button  className="submit" onClick={() => setModal({...modal, modal2: true})}>Паста с мидиями</button>
                <Modal 
                title={'Паста с мидиями'}
                isOpened={modal.modal2}
                onModalClose = {() => setModal({...modal, modal2: false})}
                children={'250 гр. макарон,  100 гр. стручковой фасоли,  1 крупная луковица, 3 зубчика чеснока, 250 гр. мидий, 100 мл. сливок + 50 мл. молока. Обжариваем лук и чеснок до золотистого цвета на сливочном масле, добавляем мидии и фасоль, туштм 3 минуты. Добавляем сливки и молоко, доводим до кипения и добавляем макароны. Варим до готовности. Добавляем сыр и зелень, даем постоять 5-10 минут.'}
                />  
                <button  className="submit"  onClick={() => setModal({...modal, modal3: true})}>Мидии в духовке с сыром</button>
                <Modal 
                title={'Мидии в духовке с сыром'}
                isOpened={modal.modal3}
                onModalClose = {() => setModal({...modal, modal3: false})}
                children={'Мясо мидий крупных, промыть, уложить в один слой в смазанную сливочным маслом форму. Сверху смесь: тертый сыр, чеснок, майонез. В разогретую духовку на 15 минут. Вынуть из духовки, дать постоять 5-10 минут.'}
                />   
                <button  className="submit" onClick={() => setModal({...modal, modal4: true})}>Стейк лосося с овощами</button>
                <Modal 
                title={'Стейк лосося с овощами'}
                isOpened={modal.modal4}
                onModalClose = {() => setModal({...modal, modal4: false})}
                children={'Стейк разрезать вдоль и поперек на 4 кусочка. Посолить, поперчить, обжарить на сковороде до золотистой корочки. Выложить на бумажное полотенце. В этой же сковороде обжарить помидоры черри, шпинат, добавить чеснок. К овощам добавить кусочки рыбы, залить сливками 10%. После того как сливки закипят, посолить и добавить тертый сыр.'}
                /> 
                <button  className="submit" onClick={() => setModal({...modal, modal5: true})}>Облепиховый чай</button>
                <Modal 
                title={'Облепиховый чай'}
                isOpened={modal.modal5}
                onModalClose = {() => setModal({...modal, modal5: false})}
                children={'Раздавить облепиху. Добавить зеленый чай, натертый корень имбиря, сок половинки апельсина. Заварить вкусный и полезный чай.'}
                /> 
            </div>
            <div ref={comp}>
                <img  className="photo_mussels" src={mussels} alt="mussels"/>
                <img  className="photo_shrimp" src={shrimp} alt="shrimp"/>
            </div>
        </div>
    )
}

export default Recipes;