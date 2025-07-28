import React from "react"
import "./Button.scss"
import classNames from "classnames"
import Icon from "@/components/Icon"

const Button = (props) => {
  const {
    className,
    href,
    type = "button",
    target,
    label,
    isLabelHidden = false,
    iconName,
    mode = "", // '' = (default) | 'transparent' | 'black-10' | 'black-08' | 'black-06'
    iconPosition = "before", // 'before' | 'after'
    hasFillIcon,
    extraAttrs,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"

  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps

  const title = isLabelHidden ? label : undefined

  const iconComponent = iconName && (
    <Icon name={iconName} className="button__icon" hasFill={hasFillIcon} />
  )

  return (
    <Component
      className={classNames(className, "button", {
        [`button--${mode}`]: mode,
      })}
      title={title}
      aria-label={title}
      {...specificProps}
      {...extraAttrs}
    >
      {iconPosition === "before" && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === "after" && iconComponent}
    </Component>
  )
}

export default Button
