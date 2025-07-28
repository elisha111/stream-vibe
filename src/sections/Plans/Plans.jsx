import Grid from "@/components/Grid"
import Section from "@/layouts/Section"
import planGroups from "./planGroups"
import PlanCard from "@/components/PlanCard"
import TabsNavigations from "@/components/Tabs/components/TabsNavigations"
import Tabs from "@/components/Tabs"

const Plans = () => {
  const tabsTitle = "plans-tats"
  const tabsNavigationId = "plans-tats-navigation"

  return (
    <Section
      title="Choose the plan that's right for you"
      titleId="plans-id"
      description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
      actions={
        <TabsNavigations
          id={tabsNavigationId}
          title={tabsTitle}
          items={planGroups}
        />
      }
    >
      <Tabs
        title={tabsTitle}
        navigationTargetElementId={tabsNavigationId}
        items={planGroups.map((planGroup) => ({
          title: planGroup.title,
          isActive: planGroup.isActive,
          children: (
            <Grid columns={3}>
              {planGroup.items.map((planItem, index) => (
                <PlanCard {...planItem} key={index} />
              ))}
            </Grid>
          ),
        }))}
      />
    </Section>
  )
}

export default Plans
