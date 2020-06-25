export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CITIES':
      return {
        ...state,
        cities: action.payload,
      };
    case 'UPDATE_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };
    case 'SEARCH':
      return {
        ...state,
        results: action.payload,
        suggestions: [],
        searchQuery: '',
      };
    case 'SUGGEST':
      return {
        ...state,
        suggestions: action.payload,
        results: [],
      };
    default:
      return state;
  }
};
