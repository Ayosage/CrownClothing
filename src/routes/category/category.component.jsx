import {CategoryContainer, Title} from './category.styles.jsx'
import { useParams } from 'react-router-dom'
import { useState, useEffect, Fragment } from 'react'
import ProductCard from '../../components/product-card/product-card.component'
import { selectCategoriesMap } from '../../store/categories/category.selector.js'
import { useSelector } from 'react-redux'

const Category = () => {
    const {category} = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category])
    

    useEffect(() => {
        
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
            
                {products && 
                    products.map((product) => ( <ProductCard key={product.id} product={product}/>)
                
                )}
            </CategoryContainer>
        </Fragment>
    )
}

export default Category