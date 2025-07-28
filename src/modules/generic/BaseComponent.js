class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error(
        "Нвозможно создать экземпляр абсрактного класса BaseComponent"
      )
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop]
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop]

        target[prop] = newValue

        if (newValue !== oldValue) {
          this.updateUI()
        }

        return true
      },
    })
  }
  /**
   * перерисовка UI в ответ на обновления состояния
   */
  updateUI() {
    throw new Error("Необходимо реализовать метод updateUI!")
  }
}

export default BaseComponent
