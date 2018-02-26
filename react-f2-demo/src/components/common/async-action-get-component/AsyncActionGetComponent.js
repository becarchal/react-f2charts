const AsyncActionGetComponent = (loadComponent, doAction) => {
  loadComponent()
    .then(module => module.default)
    .then(Component => {
      if (typeof doAction === 'function') {
        doAction(Component);
      }
    })
    .catch(err => {
      console.error(`Cannot load component in <AsyncComponent />`);
      throw err;
    });
};
export default AsyncActionGetComponent;
