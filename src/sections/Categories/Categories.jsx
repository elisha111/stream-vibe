import Section from "@/layouts/Section"
import "./Categories.scss"
import CategoryCart from "@/components/CategoryCart"

const Categories = () => {
  const categoryItems = [
    {
      title: "Actions",
      images: [
        "/src/assets/images/categories/action/1.jpg",
        "/src/assets/images/categories/action/2.jpg",
        "/src/assets/images/categories/action/3.jpg",
        "/src/assets/images/categories/action/4.jpg",
      ],
    },
    {
      title: "Adventure",
      images: [
        "/src/assets/images/categories/action/1.jpg",
        "/src/assets/images/categories/action/2.jpg",
        "/src/assets/images/categories/action/3.jpg",
        "/src/assets/images/categories/action/4.jpg",
      ],
    },
    {
      title: "Comedy",
      images: [
        "/src/assets/images/categories/action/1.jpg",
        "/src/assets/images/categories/action/2.jpg",
        "/src/assets/images/categories/action/3.jpg",
        "/src/assets/images/categories/action/4.jpg",
      ],
    },
    {
      title: "Drama",
      images: [
        "/src/assets/images/categories/action/1.jpg",
        "/src/assets/images/categories/action/2.jpg",
        "/src/assets/images/categories/action/3.jpg",
        "/src/assets/images/categories/action/4.jpg",
      ],
    },
    {
      title: "Horror",
      images: [
        "/src/assets/images/categories/action/1.jpg",
        "/src/assets/images/categories/action/2.jpg",
        "/src/assets/images/categories/action/3.jpg",
        "/src/assets/images/categories/action/4.jpg",
      ],
    },
  ]

  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={
        <div>
          <button>dgthtl</button>
          <button>назад</button>
        </div>
      }
      isActionsHiddenOnMobile
    >
      {categoryItems.map((categoryItem, index) => (
        <CategoryCart {...categoryItem} key={index} />
      ))}
    </Section>
  )
}

export default Categories
