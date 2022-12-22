import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/productSlice";

const Filter = ({category}) => {
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();
   return(
     <div className="category_cont">
        <img className="img_food" src={`./${category.img}.jpg`} alt='seeFood'/>
      <div>
        <p onClick={() => {dispatch(filterCategory(category.see))}} className={selectedCategory===category.see? 'categoryButtonSelected category_par':'category_par'}>{category.see}</p>
      </div>
    </div>
  
   )
}

export default Filter;