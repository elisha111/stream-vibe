import { Image } from "minista"
import "./MovieCard.scss"
import Badge from "@/components/Badge"
import RatingView from "@/components/RatingView"

const MovieCard = (params) => {
  const {
    title,
    imgSrc,
    duration,
    views,
    href = "/movie",
    released,
    rating,
    season,
  } = params

  return (
    <a className="movie-card" href={href} title={title}>
      <h3 className="visually-hidden">{title}</h3>
      <Image className="movie-card__image" src={imgSrc} />
      <div className="movie-card__body">
        {duration && (
          <Badge iconName="clock" iconAriaLabel="Duration" hasFillIcon>
            {duration}
          </Badge>
        )}

        {season && (
          <Badge iconName="catalog" iconAriaLabel="Season" hasFillIcon>
            {season}
          </Badge>
        )}

        {rating && (
          <Badge className="movie-card__rating-badge">
            <RatingView {...rating} />
          </Badge>
        )}

        {views && (
          <Badge iconName="eye" iconAriaLabel="Views" hasFillIcon>
            {views}
          </Badge>
        )}

        {released && (
          <Badge className="movie-card__released-badge">
            Released at{" "}
            <time
              className="movie-card__released-badge-label"
              datetime={released.dateTime}
            >
              {released.label}
            </time>
          </Badge>
        )}
      </div>
    </a>
  )
}

export default MovieCard
