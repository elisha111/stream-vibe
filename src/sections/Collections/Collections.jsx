import Tabs from "@/components/Tabs"
import "./Collections.scss"
import collectionGroups from "./collectionGroups"
import getIdFromTitle from "@/utils/getIdFromTitle"
import Section from "@/layouts/Section"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import Slider from "@/components/Slider"
import CategoryCart from "@/components/CategoryCart"
import MovieCard from "@/components/MovieCard"

const Collections = () => {
  return (
    <Tabs
      className="collections container"
      title="collections"
      isEnableOnlyOnMobile
      items={collectionGroups.map((collectionGroup) => ({
        isActive: collectionGroup.isActive,
        title: collectionGroup.title,
        children: (
          <div className="collections__group">
            <p className="collections__title hidden-mobile">
              {collectionGroup.title}
            </p>
            {collectionGroup.items.map((collectionItem, index) => {
              const { title, categoryItems, sliderParams, movieItems } =
                collectionItem

              const titleFormatted = `${getIdFromTitle(
                collectionGroup.title
              )}-${getIdFromTitle(title)}`

              const titleId = `${titleFormatted}-title`

              const sliderNavigationId = `${titleFormatted}-slider-navigation`

              return (
                <Section
                  className="collections__section"
                  title={title}
                  titleId={titleId}
                  actions={
                    <SliderNavigation id={sliderNavigationId} mode="tile" />
                  }
                  isActionsHiddenOnMobile
                  key={index}
                >
                  <Slider
                    sliderParams={sliderParams}
                    navigationTargetElementId={sliderNavigationId}
                    isBeyondTheViewportOnMobile
                  >
                    {categoryItems?.map((categoryItem, index) => (
                      <CategoryCart {...categoryItem} key={index} />
                    )) ??
                      movieItems?.map((movieItem, index) => (
                        <MovieCard {...movieItem} key={index} />
                      ))}
                  </Slider>
                </Section>
              )
            })}
          </div>
        ),
      }))}
    />
  )
}

export default Collections
