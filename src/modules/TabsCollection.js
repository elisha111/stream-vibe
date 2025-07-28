import getParams from "@/utils/getParams"
import pxToRem from "@/utils/pxToRam"
import BaseComponent from "./generic/BaseComponent"

const rootSelector = "[data-js-tabs]"

class Tabs extends BaseComponent {
  selectors = {
    root: rootSelector,
    navigation: "[data-js-tabs-navigation]",
    button: "[data-js-tabs-button]",
    content: "[data-js-tabs-content]",
  }

  stateClasses = {
    isActive: "is-active",
  }

  stateCSSVariables = {
    activeButtonWidth: "--tabsNavigationActiveButtonWidth",
    activeButtonOffsetLeft: "--tabsNavigationActiveButtonOffsetLeft",
  }

  constructor(rootSelector) {
    super()
    this.rootElement = rootSelector
    this.params = getParams(this.rootElement, this.selectors.root)
    this.navigationElement = this.params.navigationTargetElementId
      ? document.getElementById(this.params.navigationTargetElementId)
      : this.rootElement.querySelector(this.selectors.navigation)

    this.buttonElements = [
      ...this.navigationElement.querySelectorAll(this.selectors.button),
    ]
    this.contentElements = [
      ...this.rootElement.querySelectorAll(this.selectors.content),
    ]
    this.state = this.getProxyState({
      activeTabIntex: this.buttonElements.findIndex(
        ({ ariaSelected }) => ariaSelected
      ),
    })
    this.limitTabsIndex = this.buttonElements.length - 1
    this.bindEvents()
    setTimeout(this.bindObservers, 500)
  }

  updateUI() {
    const { activeTabIntex } = this.state

    this.buttonElements.forEach((buttonElement, index) => {
      const isActive = index === activeTabIntex

      buttonElement.classList.toggle(this.stateClasses.isActive, isActive)
      buttonElement.ariaSelected = isActive
      buttonElement.tabIndex = isActive ? 0 : -1

      if (isActive) {
        this.updateNavigationCSSVar(buttonElement)
      }
    })

    this.contentElements.forEach((contentElement, index) => {
      const isActive = index === activeTabIntex

      contentElement.classList.toggle(this.stateClasses.isActive, isActive)
    })
  }

  updateNavigationCSSVar(
    activeButtonElement = this.buttonElements[this.state.activeTabIntex]
  ) {
    const { width, left } = activeButtonElement.getBoundingClientRect()
    const offsetLeft =
      left - this.navigationElement.getBoundingClientRect().left

    this.navigationElement.style.setProperty(
      this.stateCSSVariables.activeButtonWidth,
      `${pxToRem(width)}rem`
    )

    this.navigationElement.style.setProperty(
      this.stateCSSVariables.activeButtonOffsetLeft,
      `${pxToRem(offsetLeft)}rem`
    )
  }

  activateTab(newTabIndex) {
    this.state.activeTabIntex = newTabIndex
    this.buttonElements[newTabIndex].focus()
  }

  previousTab = () => {
    const newTabIndex =
      this.state.activeTabIntex === 0
        ? this.limitTabsIndex
        : this.state.activeTabIntex - 1

    this.activateTab(newTabIndex)
  }

  nextTab = () => {
    const newTabIndex =
      this.state.activeTabIntex === this.limitTabsIndex
        ? 0
        : this.state.activeTabIntex + 1

    this.activateTab(newTabIndex)
  }

  firstTab = () => {
    this.activateTab(0)
  }

  lastTab = () => {
    this.activateTab(this.limitTabsIndex)
  }

  onButtonClick(buttonIndex) {
    this.state.activeTabIntex = buttonIndex
  }

  onKeyDown = (event) => {
    const { target, code, metaKey } = event
    const isTabsContentFocused = this.contentElements.some(
      (contentElement) => contentElement === target
    )
    const isTabsButtonFocused = this.buttonElements.some(
      (buttonElement) => buttonElement === target
    )

    if (!isTabsContentFocused && !isTabsButtonFocused) {
      return
    }

    const action = {
      ArrowLeft: this.previousTab,
      ArrowRight: this.nextTab,
      Home: this.firstTab,
      End: this.lastTab,
    }[code]

    // для мака, так как там нет кнопок Home и End
    const isMacHomeKey = metaKey && code === "ArrowLeft"
    if (isMacHomeKey) {
      event.preventDefault()
      this.firstTab()
      return
    }

    const isMacEndKey = metaKey && code === "ArrowRight"
    if (isMacEndKey) {
      event.preventDefault()
      this.lastTab()
      return
    }

    if (action) {
      event.preventDefault()
      action()
    }
  }

  bindEvents() {
    this.buttonElements.forEach((buttonElement, index) => {
      buttonElement.addEventListener("click", () => this.onButtonClick(index))
    })
    document.addEventListener("keydown", this.onKeyDown)
  }

  onResize = () => {
    this.updateNavigationCSSVar()
  }

  bindObservers = () => {
    const resizeObserver = new ResizeObserver(this.onResize)

    resizeObserver.observe(this.navigationElement)
  }
}

class TabsCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Tabs(element)
    })
  }
}

export default TabsCollection
