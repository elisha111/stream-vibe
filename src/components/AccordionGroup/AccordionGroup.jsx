import classNames from "classnames"
import styles from "./AccordionGroup.module.scss"

const AccordionGroup = (props) => {
  const { columns = 1, children, isOrderedList = true } = props

  const ListTag = isOrderedList ? "ol" : "ul"

  console.log(children)

  return (
    <ListTag
      className={classNames("accordion-group", {
        [`accordion-group--${columns}-columns`]: columns > 1,
        "accordion-group--has-counter": isOrderedList,
        [styles.counter]: isOrderedList,
      })}
    >
      {children.map((child, index) => (
        <li className={`accordion-group__item ${styles.item}`} key={index}>
          {child}
        </li>
      ))}
    </ListTag>
  )
}

export default AccordionGroup
