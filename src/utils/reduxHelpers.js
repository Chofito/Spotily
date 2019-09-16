// @flow
export const typeGenerator = (name: string, type: string): string =>
  `${name !== '' ? `${name}/` : ''}${type}`;

export const actionCreatorGenerator = (
  name: string,
  actionCreators: any,
  params: any
) =>
  Object.keys(actionCreators).reduce((result, key) => {
    result[key] = actionCreators[key](name, params);
    return result;
  }, {});

export const actionHandlerGenerator = (name: string, actionHandler: any) =>
  Object.keys(actionHandler).reduce((result, key) => {
    const actionType = typeGenerator(name, key);
    result[actionType] = actionHandler[key];
    return result;
  }, {});

export const reducerGenerator = (
  name: string = '',
  defaultActionHandler: any,
  initialState: any
) => {
  // Memorize the handlers to avoid generating again on every call.
  const actionHandlers = actionHandlerGenerator(name, defaultActionHandler);
  return (state: any = initialState, action: any) =>
    actionHandlers[action.type]
      ? actionHandlers[action.type](state, action)
      : state;
};
