import AllCategories from "./Components/Filter/AllCategories";
import Products from "./Components/ProductComponents/Products";


const Shop = () =>{
    return(
        <div>
            <div className="header">
                <h1>Наш ассортимент</h1>
            </div>
            <div>
                <AllCategories/>
            </div>
            <div>
                <Products/>
            </div>
        </div>
    )
}

export default Shop;