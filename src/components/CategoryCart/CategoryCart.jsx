import { Image } from "minista"
import "./CategoryCart.scss"
import Icon from "@/components/Icon"

const CategoryCart = (props) => {
  const { title, images = [] } = props

  return (
    <a className="category-cart" href="/movies">
      <div className="category-cart__images">
        {images.map((imgSrc, index) => (
          <Image className="category-cart__image" src={imgSrc} key={index} />
        ))}
      </div>
      <div className="category-cart__body">
        <h3 className="category-cart__title">{title}</h3>
        <Icon className="category-cart__icon" name="arrow-right" />
      </div>
    </a>
  )
}

export default CategoryCart
