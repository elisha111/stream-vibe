import classNames from "classnames"
import "./Badge.scss"
import Icon from "@/components/Icon"

const Badge = (props) => {
  const {
    className,
    mode = "", // "" (default) | "accent"
    isBig = false,
    children,
    iconName,
    hasFillIcon,
    iconAriaLabel,
  } = props

  return (
    <div
      className={classNames(className, "badge", {
        [`badge--${mode}`]: mode,
        "badge--big": isBig,
      })}
    >
      {iconName && (
        <Icon
          className="badge__icon"
          name={iconName}
          hasFill={hasFillIcon}
          ariaLable={iconAriaLabel}
        />
      )}
      <span>{children}</span>
    </div>
  )
}

export default Badge
