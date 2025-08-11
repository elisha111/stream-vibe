import AccordionGroup from "@/components/AccordionGroup"
import "./Seasons.scss"
import seasonsItems from "./seasonsItems"
import Accordion from "@/components/Accordion"

const Seasons = () => {
  return (
    <AccordionGroup mode="dark" isOrderedList={false}>
      {seasonsItems.map(({ title, subtitle, episodes }, value) => (
        <Accordion
          title={title}
          titleLevelClassName="h4"
          subtitle={subtitle}
          id={`season-${value}`}
          name="seasons"
          isOpen={value === 0}
          key={value}
          isArrowButton
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
          minus!
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons
