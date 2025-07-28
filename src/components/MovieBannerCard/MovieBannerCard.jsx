import { Image } from "minista"
import "./MovieBannerCard.scss"
import Button from "../Button"
const MovieBannerCard = (props) => {
  const { title, description, imgSrc } = props

  return (
    <div className="movie-banner-card">
      <Image className="movie-banner-card__image" src={imgSrc} />
      <div className="movie-banner-card__inner">
        <div className="movie-banner-card__body">
          <h2 className="movie-banner-card__title h3">{title}</h2>
          <div className="movie-banner-card__description hidden-mobile">
            <p>{description}</p>
          </div>
        </div>
        <footer className="movie-banner-card__footer">
          <Button
            className="movie-banner-card__play-button"
            iconName="play"
            label="Play Now"
            hasFillIcon
          />
          <div className="movie-banner-card__actions">
            <Button
              iconName="plus"
              label="Add to playlist"
              isLabelHidden
              mode="black-06"
            />
            <Button
              iconName="like"
              label="Like"
              isLabelHidden
              mode="black-06"
            />
            <Button
              iconName="volume"
              label="Mute"
              isLabelHidden
              mode="black-06"
            />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MovieBannerCard
