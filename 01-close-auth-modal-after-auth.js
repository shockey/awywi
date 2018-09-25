// Live demo at https://awywi-close-auth-modal.surge.sh

const CloseAuthModalAfterAuthorizationPlugin = (system) => {
  const closeModalAndProxyAction = (ori, args) => {
    setTimeout(() => {
      // use setTimeout to close the modal on the next tick
      system.authActions.showDefinitions(false)
    }, 0)
    return ori(...args)
  }

  return {
    statePlugins: {
      auth: {
        wrapActions: {
          authorize: (ori) => (...args) => {
            return closeModalAndProxyAction(ori, args)
          },
          authorizeOauth2: (ori) => (...args) => {
            return closeModalAndProxyAction(ori, args)
          }
        }
      }
    }
  }
}
