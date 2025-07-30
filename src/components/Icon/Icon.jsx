import React from "react"
import "./Icon.scss"
import classNames from "classnames"
import { Icon as MinistaIcon } from "minista"

const Icon = (props) => {
  const { className, name, hasFill = false, ariaLable } = props

  return (
    <span className={classNames(className, "icon")} aria-label={ariaLable}>
      <MinistaIcon
        iconId={name}
        stroke={hasFill ? "none" : "currentColor"}
        fill={hasFill ? "currentColor" : "none"}
      />
    </span>
  )
}

export default Icon
