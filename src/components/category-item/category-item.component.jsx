import {useNavigate } from "react-router-dom"
import {CategoryItemContainer, Body, BackgroundImage} from "./category-item.styles.jsx"


export default function CategoryItem({category}){
    const {imageUrl, title, route} = category
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return(
        <CategoryItemContainer>
        <BackgroundImage
        imageUrl={imageUrl}
        />
        <Body onClick={onNavigateHandler}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </CategoryItemContainer>
    )
}