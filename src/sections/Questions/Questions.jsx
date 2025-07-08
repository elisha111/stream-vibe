import Accordion from "@/components/Accordion"
import AccordionGroup from "@/components/AccordionGroup"
import Section from "@/layouts/Section"

const Questions = () => {
  const questionsItems = [
    "What is StreamVibe?",
    "How much does StreamVibe cost?",
    "What content is available on StreamVibe?",
    "How can I watch StreamVibe?",
    "How do I sign up for StreamVibe?",
    "What is the StreamVibe free trial?",
    "How do I contact StreamVibe customer support?",
    "What are the StreamVibe payment methods?",
  ]

  return (
    <Section title="БЛОК ВОПРОСЫ" titleId="questions-title" description="desc">
      <AccordionGroup columns={2}>
        {questionsItems.map((questions, index) => (
          <Accordion
            title={questions}
            id={`questions-${index}`}
            name="questions"
            isOpen={index === 0}
            key={index}
          >
            <p>
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Section>
  )
}

export default Questions
