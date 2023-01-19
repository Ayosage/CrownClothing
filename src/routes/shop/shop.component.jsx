import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";

import {Routes, Route} from "react-router-dom"
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";





const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const getCategoryMap = async () => {
        const categoryMap = await  getCategoriesAndDocuments()
        dispatch(setCategoriesMap(categoryMap))
    } 
   getCategoryMap()
},[]) 

  return(
    
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=":category" element={<Category/>}/>
    </Routes>
  
  )
  
};

export default Shop;

