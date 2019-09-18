export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_MEDIA':
      return {
        ...state,
        currentMedia: action.payload.newMedia,
      };
    default:
      return state;
  }
};
