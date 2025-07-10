import classNames from "classnames"
import React from "react"
import styles from "./Tabs.module.scss"
import getTabsElementsIdFromTitle from "./utils/getTabsElementsIdFromTitle"

const Tabs = (props) => {
  const {
    className,
    title,
    items = [],
    navigationTargetElementId = null,
  } = props

  //   const titleFormated = getIdFromTitle(title)
  //   const buttonId = `${titleFormated}-tab`
  //   const contentId = `${titleFormated}-tab-panel`

  const { buttonId, contentId } = getTabsElementsIdFromTitle(title)

  return (
    <div
      className={classNames(className, `tabs`, styles.root)}
      data-js-tabs={JSON.stringify({ navigationTargetElementId })}
    >
      {!navigationTargetElementId && <div>НАВИГАЦИЯ ТАБОВ</div>}
      <div className="tabs__body">
        {items.map((item, index) => {
          const { title, children, isActive } = item

          return (
            <div
              className={classNames(`tabs__content`, styles.content, {
                "is-active": isActive,
              })}
              id={contentId}
              aria-labelledby={buttonId}
              tabIndex={0}
              data-js-tabs-content=""
              key={index}
            >
              {children}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tabs
