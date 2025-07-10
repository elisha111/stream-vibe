import getIdFromTitle from "@/utils/getIdFromTitle"

const getTabsElementsIdFromTitle = (title) => {
  const titleFormated = getIdFromTitle(title)
  const buttonId = `${titleFormated}-tab`
  const contentId = `${titleFormated}-tab-panel`

  return {
    buttonId: `${titleFormated}-tab`,
    contentId: `${titleFormated}-tab-panel`,
  }
}

export default getTabsElementsIdFromTitle
