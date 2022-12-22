import Filter from "./Filter";


const AllCategories = () =>{
    const seefood = [ 
         {
            see: "Морепродукты",
            img: "морепродукты"
        }, 
          {
            see: "Рыба",
            img: "рыба"
        },  
          {
            see: "Полуфабрикаты",
            img: "полуфабрикаты"
        },  
          {
            see: "Курица",
            img: "курица"
        }, 
          {
            see: "Ягоды",
            img: "ягоды"
        },
          {
            see: "Овощи",
            img: "овощи"
        }, 
        {
            see: "Весь ассортимент",
            img: "все"
        },               
     ]
    return(
        <div className="content">         
              {seefood.map(category => <Filter key={category.see} category = {category}/>)}
           
        </div>
     
    )
}

export default AllCategories;