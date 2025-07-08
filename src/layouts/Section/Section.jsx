import classNames from "classnames"

const Section = (props) => {
  const { className, title, titleId, description, actions, children } = props

  return (
    <section
      className={classNames(className, "section container")}
      aria-label={titleId}
    >
      <header className="section__header">
        <div className="section__info">
          <h2 className="sections__title h3" id={titleId}>
            {title}
          </h2>
          {description && (
            <div className="section__description">
              <p>{description}</p>
            </div>
          )}
        </div>
        {actions && <div className="section__actions">{actions}</div>}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}

export default Section
