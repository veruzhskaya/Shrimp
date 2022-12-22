import { useSelector } from "react-redux";
import dataProducts from "../../data/dataProducts";
import { getSelectedCategory } from "../../redux/productSlice";
import Product from "./Product";

const Products = () =>{
    const selectedCategory = useSelector(getSelectedCategory)
    return(
        <div>
             <div className="product_content">
                <h2  className="prod_par header">Наименование</h2>
                <h2  className="prod_par header">Фасовка</h2>
                <h2  className="prod_par header">Стоимость</h2>
                <h2  className="prod_par header">Добавить</h2>
            </div>
            {dataProducts.filter(product => {
                if (selectedCategory === 'Весь ассортимент')
                return true;
                return selectedCategory === product.category;

            }) 
            .map(product => <Product key={product.id} product = {product}/>)}
        </div>
     
    )
}

export default Products;