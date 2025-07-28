import getIdFromTitle from "@/utils/getIdFromTitle"

const getTabsElementsIdsFromTitle = (title) => {
  const titleFormatted = getIdFromTitle(title)

  return {
    buttonId: `${titleFormatted}-tab`,
    contentId: `${titleFormatted}-tab-panel`,
  }
}

export default getTabsElementsIdsFromTitle
